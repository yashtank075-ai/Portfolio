import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure server/.env environment variables are loaded
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config(); // fallback

// Helper function to escape HTML special characters to prevent injection
function sanitizeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Create Nodemailer Transporter
const createTransporter = () => {
  const user = process.env.EMAIL_USER || 'yash.dev.contact26@gmail.com';
  const pass = process.env.EMAIL_PASS;

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass
    }
  });
};

/**
 * Sends portfolio contact email to yash.dev.contact26@gmail.com
 * @param {Object} details - { name, email, subject, message }
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const recipientEmail = process.env.CONTACT_EMAIL || 'yash.dev.contact26@gmail.com';
  const senderEmail = process.env.EMAIL_USER || 'yash.dev.contact26@gmail.com';

  const cleanName = sanitizeHtml(name);
  const cleanEmail = sanitizeHtml(email);
  const cleanSubject = sanitizeHtml(subject);
  const cleanMessage = sanitizeHtml(message).replace(/\n/g, '<br/>');

  const mailSubject = `[Portfolio Contact] ${subject.trim()}`;

  // Plain Text Version
  const textBody = `
New Portfolio Contact Message
--------------------------------
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

--------------------------------
Sent from Yash's Portfolio Website
  `.trim();

  // HTML Email Version
  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #333; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e1e8ed; }
          .header { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: #ffffff; padding: 24px 30px; text-align: left; }
          .header h2 { margin: 0; font-size: 20px; font-weight: 700; color: #60a5fa; }
          .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; }
          .body-content { padding: 30px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 600; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #e2e8f0; word-break: break-word; }
          .message-box { font-size: 14px; line-height: 1.6; color: #1e293b; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Portfolio Contact Message</h2>
            <p>Submitted via Yash's Portfolio Website</p>
          </div>
          <div class="body-content">
            <div class="field-group">
              <div class="field-label">Visitor Name</div>
              <div class="field-value">${cleanName}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Visitor Email</div>
              <div class="field-value">${cleanEmail}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Subject</div>
              <div class="field-value">${cleanSubject}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Message</div>
              <div class="message-box">${cleanMessage}</div>
            </div>
          </div>
          <div class="footer">
            Clicking <strong>Reply</strong> in your email client will reply directly to <strong>${cleanEmail}</strong>.
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"${cleanName} via Portfolio" <${senderEmail}>`,
    to: recipientEmail,
    replyTo: email.trim(), // Enables 1-click reply in Gmail directly to the visitor
    subject: mailSubject,
    text: textBody,
    html: htmlBody
  };

  const transporter = createTransporter();
  const info = await transporter.sendMail(mailOptions);
  return info;
}
