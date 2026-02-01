import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Check if environment variables are missing
const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
const missingVars = requiredEnvVars.filter(v => !process.env[v]);

if (missingVars.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn(`WARNING: Missing environment variables for sending emails: ${missingVars.join(', ')}`);
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ethereal.email",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER || "test_user",
        pass: process.env.SMTP_PASS || "test_pass",
    },
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.post('/send', async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: 'Missing name or email' });
        }

        console.log(`Sending emails for registration: ${name} <${email}>`);

        // Email to the user (Applicant)
        const userMailPromise = transporter.sendMail({
            from: '"CampusCatalyst" <no-reply@campuscatalyst.com>',
            to: email,
            subject: "Registration Received - CampusCatalyst",
            text: `Hi ${name},\n\nThanks for signing up for the CampusCatalyst newsletter! You've been successfully added to our list.\n\nStay tuned for updates!\n\nBest,\nThe CampusCatalyst Team`,
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Hello ${name},</h2>
          <p>Thanks for signing up for the <strong>CampusCatalyst</strong> newsletter! You've been successfully added to our list.</p>
          <p>Stay tuned for updates!</p>
          <br>
          <p>Best,</p>
          <p>The CampusCatalyst Team</p>
        </div>
      `,
        });

        // Email to the Admin
        const adminEmail = process.env.ADMIN_EMAIL || "hendrik.cooper@example.com";
        const adminMailPromise = transporter.sendMail({
            from: '"CampusCatalyst System" <system@campuscatalyst.com>',
            to: adminEmail,
            subject: `New Newsletter Signup: ${name}`,
            text: `A new user has registered for the newsletter.\n\nName: ${name}\nEmail: ${email}\nTime: ${new Date().toLocaleString()}`,
            html: `
        <div style="font-family: sans-serif;">
          <h3>New Newsletter Signup</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
          </ul>
        </div>
      `,
        });

        await Promise.all([userMailPromise, adminMailPromise]);

        console.log('Emails sent successfully');
        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Mail server running on port ${PORT}`);
});
