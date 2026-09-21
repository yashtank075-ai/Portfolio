import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML special characters
function sanitizeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Sends portfolio contact email
 */
export async function sendContactEmail({
  name,
  email,
  subject,
  message
}) {
  const recipientEmail =
    process.env.CONTACT_EMAIL || 'your-email@gmail.com';

  const cleanName = sanitizeHtml(name);
  const cleanEmail = sanitizeHtml(email);
  const cleanSubject = sanitizeHtml(subject);
  const cleanMessage = sanitizeHtml(message).replace(/\n/g, '<br/>');

  const mailSubject = `[Portfolio Contact] ${subject.trim()}`;

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

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 20px;
            color: #333;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e1e8ed;
          }

          .header {
            background: #0f172a;
            color: #ffffff;
            padding: 24px 30px;
          }

          .header h2 {
            margin: 0;
            font-size: 20px;
            color: #60a5fa;
          }

          .header p {
            margin: 4px 0 0;
            font-size: 13px;
            color: #94a3b8;
          }

          .body-content {
            padding: 30px;
          }

          .field-group {
            margin-bottom: 20px;
          }

          .field-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 4px;
          }

          .field-value {
            font-size: 15px;
            color: #0f172a;
            font-weight: 600;
            background: #f8fafc;
            padding: 10px 14px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            word-break: break-word;
          }

          .message-box {
            font-size: 14px;
            line-height: 1.6;
            color: #1e293b;
            background: #f8fafc;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
          }

          .footer {
            background: #f8fafc;
            padding: 16px 30px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 12px;
            color: #64748b;
          }
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
            Reply directly to this email to contact ${cleanEmail}.
          </div>

        </div>
      </body>
    </html>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: mailSubject,
      text: textBody,
      html: htmlBody
    });

    if (error) {
      console.error('[RESEND ERROR]', error);
      throw new Error(error.message);
    }

    console.log('[EMAIL SUCCESS] Email sent:', data?.id);

    return data;

  } catch (error) {
    console.error(
      '[EMAIL ERROR]',
      error.message || error
    );

    throw error;
  }
}