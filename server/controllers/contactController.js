import { sendContactEmail } from '../services/emailService.js';

/**
 * Controller for handling POST /api/contact
 */
export async function handleContactForm(req, res) {
  try {
    const { name, email, subject, message, _hp_company } = req.body || {};

    // 1. SPAM PROTECTION: Honeypot check
    // If the hidden honeypot field is filled out, reject quietly without sending email
    if (_hp_company && String(_hp_company).trim().length > 0) {
      console.warn('[SECURITY] Spam submission detected via honeypot field.');
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully'
      });
    }

    // 2. INPUT VALIDATION
    if (!name || !String(name).trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your name.'
      });
    }

    if (!email || !String(email).trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your email address.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    if (!subject || !String(subject).trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a subject.'
      });
    }

    if (!message || !String(message).trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a message.'
      });
    }

    // Length boundary safety limits
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanSubject = String(subject).trim();
    const cleanMessage = String(message).trim();

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters.'
      });
    }

    if (cleanSubject.length < 2 || cleanSubject.length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Subject must be between 2 and 150 characters.'
      });
    }

    if (cleanMessage.length < 5 || cleanMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 5 and 5000 characters.'
      });
    }

    // 3. SEND EMAIL VIA NODEMAILER
    await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage
    });

    console.log(`[CONTACT SUCCESS] Form submission received from ${cleanName} <${cleanEmail}>`);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('[CONTACT ERROR] Failed to send contact email:', error.message || error);
    
    // Controlled error response without leaking internal credentials/stack traces to client
    return res.status(500).json({
      success: false,
      message: 'Unable to send message. Please try again.'
    });
  }
}
