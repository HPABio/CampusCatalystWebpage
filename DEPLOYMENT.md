
# Dokploy Deployment Instructions

This guide details how to deploy your decoupled application (Website + Mail Server) to your Dokploy VPS.

## 1. Prerequisites
Ensure you have the `dokploy` MCP server configured as described in `.agents/skills/private-dokploy-vps`.

## 2. Prepare Environment
Your application is now split into two services:
- **`website`**: The Astro-based frontend (now communicating with the mail server).
- **`mail-server`**: A lightweight Node.js/Express server handling email delivery.

## 3. Deployment Steps

Since the automated tools are currently inactive, please execute the following steps manually via your Dokploy Dashboard or CLI if you have one available, or use the MCP tool if you resolve the connection issue.

### A. Create Project
**Action**: Create a new project for "CampusCatalyst".

### B. Create Compose Stack
**Action**: Create a new Docker Compose stack within your environment.
- **Name**: `campus-catalyst-stack`
- **Compose File**: Copy the content of `docker-compose.dokploy.yaml` from your project root.

### C. Configure Environment Variables
You must set the following environment variables for the stack (specifically for the `mail-server` service):

| Variable | Value | Description |
| :--- | :--- | :--- |
| `SMTP_HOST` | `your.smtp.host` | e.g., `smtp.gmail.com` |
| `SMTP_PORT` | `587` | Standard SMTP port |
| `SMTP_USER` | `your_email@example.com` | Your SMTP username |
| `SMTP_PASS` | `your_password` | Your SMTP password (or app password) |
| `ADMIN_EMAIL` | `hendrik.cooper@example.com` | Where notification emails are sent |

The `website` service uses `MAIL_SERVICE_URL=http://mail-server:3000` which is already set in the compose file and relies on Docker's internal networking.

### D. Deploy
**Action**: Click "Deploy" on the Compose Stack page in Dokploy.
- This will build both the website and mail server images.
- It will start both containers on a shared network.

## 4. Verification
- Access your website at the configured domain.
- Try registering for the newsletter.
- Check the `mail-server` logs in Dokploy to see the email sending status (`Sending emails for registration...`).
