export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const name = data.get('name') as string;
        const email = data.get('email') as string;

        if (!name || !email) {
            return new Response(
                JSON.stringify({ message: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // Configure your SMTP transporter here
        // TODO: Replace with your actual SMTP credentials or use environment variables
        const transporter = nodemailer.createTransport({
            host: import.meta.env.SMTP_HOST || "smtp.ethereal.email",
            port: Number(import.meta.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: import.meta.env.SMTP_USER || "test_user",
                pass: import.meta.env.SMTP_PASS || "test_pass",
            },
        });

        // Email to the user (Applicant)
        await transporter.sendMail({
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
        await transporter.sendMail({
            from: '"CampusCatalyst System" <system@campuscatalyst.com>',
            to: import.meta.env.ADMIN_EMAIL || "hendrik.cooper@example.com", // Fallback to provided name context if env not set
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

        return new Response(
            JSON.stringify({ message: 'Success' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);
        return new Response(
            JSON.stringify({ message: 'Error sending email. Please check server logs.' }),
            { status: 500 }
        );
    }
};
