import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _hp_company: '' // Invisible honeypot field for spam prevention
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
    if (status === 'error') {
      setStatus('idle');
      setServerErrorMessage('');
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name || !formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email || !formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject || !formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 2) {
      errs.subject = 'Subject must be at least 2 characters.';
    }

    if (!formData.message || !formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters.';
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setServerErrorMessage('');

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _hp_company: formData._hp_company
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Clear form fields ONLY on successful delivery
        setFormData({ name: '', email: '', subject: '', message: '', _hp_company: '' });
      } else {
        setStatus('error');
        setServerErrorMessage(data.message || 'Unable to send message. Please try again.');
      }
    } catch (err) {
      console.error('[CONTACT API FETCH ERROR]', err);
      setStatus('error');
      setServerErrorMessage('Unable to connect to server. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-slate-100/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-mono font-medium">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Let's Build Something <span className="text-blue-600 dark:text-blue-400">Together.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I'm open to full-stack developer opportunities, internships, and exciting software projects. Reach out and let's start a conversation!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-7 rounded-3xl premium-card space-y-6 overflow-hidden">
              <div className="premium-card-accent" />
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-white/10 pb-4">
                Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-4 rounded-2xl premium-card hover-contact-card flex items-center gap-4 group overflow-hidden transition-all"
                >
                  <div className="premium-card-accent" />
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors truncate">
                      {portfolioData.personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl premium-card hover-contact-card flex items-center gap-4 group overflow-hidden transition-all"
                >
                  <div className="premium-card-accent" />
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      github.com/yash-dev
                    </div>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl premium-card hover-contact-card flex items-center gap-4 group overflow-hidden transition-all"
                >
                  <div className="premium-card-accent" />
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      linkedin.com/in/yash-tank
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl premium-card flex items-center gap-4 overflow-hidden">
                  <div className="premium-card-accent" />
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl premium-card space-y-6 overflow-hidden">
              <div className="premium-card-accent" />
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-white/10 pb-4">
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                      Thanks for reaching out! Your message has been sent directly to my Gmail inbox. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all shadow-md inline-flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Send Another Message</span>
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* SPAM PROTECTION: Invisible Honeypot Field */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <label htmlFor="_hp_company">Do not fill this field</label>
                      <input
                        type="text"
                        id="_hp_company"
                        name="_hp_company"
                        tabIndex="-1"
                        value={formData._hp_company}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>

                    {/* Server level error banner */}
                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold block mb-0.5">Delivery Error</strong>
                          <span>{serverErrorMessage || 'Unable to send message. Please try again.'}</span>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300">
                          Your Name <span className="text-red-500 dark:text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Rahul Patel"
                          disabled={status === 'loading'}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                            errors.name ? 'border-red-500' : 'border-slate-200 dark:border-white/10 focus:border-blue-500'
                          } text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300">
                          Your Email <span className="text-red-500 dark:text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rahul@example.com"
                          disabled={status === 'loading'}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                            errors.email ? 'border-red-500' : 'border-slate-200 dark:border-white/10 focus:border-blue-500'
                          } text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300">
                        Subject <span className="text-red-500 dark:text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Website Development / Job Opportunity"
                        disabled={status === 'loading'}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                          errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-white/10 focus:border-blue-500'
                        } text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300">
                        Message <span className="text-red-500 dark:text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="I would like to discuss a website project..."
                        disabled={status === 'loading'}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                          errors.message ? 'border-red-500' : 'border-slate-200 dark:border-white/10 focus:border-blue-500'
                        } text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all border border-blue-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : status === 'error' ? (
                        <>
                          <span>Try Again</span>
                          <Send className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
