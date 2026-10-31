import React, { useState } from 'react';
import { Mail, ArrowUpRight, CheckCircle2, AlertCircle, Loader2, RotateCcw, FileText, Send, MapPin, Clock } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _hp_company: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
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
      errs.subject = 'Please enter a project scope or subject.';
    } else if (formData.subject.trim().length < 2) {
      errs.subject = 'Subject must be at least 2 characters.';
    }

    if (!formData.message || !formData.message.trim()) {
      errs.message = 'Please enter your message.';
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
        setFormData({ name: '', email: '', subject: '', message: '', _hp_company: '' });
      } else {
        setStatus('error');
        setServerErrorMessage(data.message || 'Unable to deliver message. Please try again or email directly.');
      }
    } catch (err) {
      console.error('[CONTACT API ERROR]', err);
      setStatus('error');
      setServerErrorMessage(`Backend service unavailable. Please reach out directly at ${portfolioData.personal.email}.`);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/60 border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
            Let's build something exceptional together.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Whether inquiring about engineering roles, technical collaboration, or discussing a new web project, I welcome your message.
          </p>
        </div>

        {/* 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                Contact Coordinates
              </h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                I review all direct inquiries personally. Reach out through email, verified code repositories, or professional networks.
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white shadow-subtle hover:shadow-premium hover:border-[#4169E1] transition-all border border-[#E5E5E0]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4169E1] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] font-bold block">
                    Direct Email
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] group-hover:text-[#4169E1] transition-colors truncate block">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#4169E1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white shadow-subtle hover:shadow-premium hover:border-[#4169E1] transition-all border border-[#E5E5E0]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4169E1] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] font-bold block">
                    Source Code
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] group-hover:text-[#4169E1] transition-colors truncate block">
                    github.com/yashtank075-ai
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#4169E1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white shadow-subtle hover:shadow-premium hover:border-[#4169E1] transition-all border border-[#E5E5E0]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4169E1] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] font-bold block">
                    Professional Network
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] group-hover:text-[#4169E1] transition-colors truncate block">
                    linkedin.com/in/yash-tank
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#4169E1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Resume Download Card */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white shadow-subtle hover:shadow-premium hover:border-[#4169E1] transition-all border border-[#E5E5E0]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4169E1] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] font-bold block">
                    Curriculum Vitae
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] group-hover:text-[#4169E1] transition-colors truncate block">
                    Download Resume (PDF)
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#4169E1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            <div className="p-4 rounded-xl bg-white border border-[#E5E5E0] text-xs text-[#525252] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#171717]">
                <MapPin className="w-3.5 h-3.5 text-[#4169E1]" />
                <span>Location &amp; Working Model:</span>
              </div>
              <p className="pl-5 leading-relaxed">
                {portfolioData.personal.location} (IST UTC+5:30) • Open for full-time engineering roles, remote positions, and select web projects.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="portfolio-card p-6 sm:p-8 bg-white shadow-premium border border-[#E5E5E0]">
              <div className="border-b border-[#E5E5E0] pb-4 mb-6 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-lg text-[#171717]">
                    Send a Message
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#737373] mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#4169E1]" />
                    <span>Response turnaround: under 24 hours</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#4169E1] bg-[#EEF2FF] px-2.5 py-1 rounded-md border border-[#4169E1]/20 font-semibold">
                  Direct Dispatch
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#171717]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-[#525252] max-w-md mx-auto">
                    Thank you for reaching out. Your transmission has been dispatched to my inbox. I will review it and reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 btn-secondary !py-2 !px-4 !text-xs !rounded-xl"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                  {/* Honeypot anti-spam field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_hp_company">Company</label>
                    <input
                      type="text"
                      id="_hp_company"
                      name="_hp_company"
                      value={formData._hp_company}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
                      <div className="space-y-1">
                        <span className="font-semibold block">Message Delivery Failed</span>
                        <p className="text-xs leading-relaxed">
                          {serverErrorMessage || `Please email directly at ${portfolioData.personal.email}.`}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-medium text-[#171717] block">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-[#E5E5E0] bg-[#FAFAF8]'
                        } text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/30 focus:border-[#4169E1] focus:bg-white transition-all`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-medium text-[#171717] block">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-[#E5E5E0] bg-[#FAFAF8]'
                        } text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/30 focus:border-[#4169E1] focus:bg-white transition-all`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono font-medium text-[#171717] block">
                      Subject / Scope <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Developer Role / Project Proposal"
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.subject ? 'border-rose-400 bg-rose-50/50' : 'border-[#E5E5E0] bg-[#FAFAF8]'
                      } text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/30 focus:border-[#4169E1] focus:bg-white transition-all`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-600 font-medium">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-medium text-[#171717] block">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Provide details about the opportunity, tech stack, timeline, or requirements..."
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-[#E5E5E0] bg-[#FAFAF8]'
                      } text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/30 focus:border-[#4169E1] focus:bg-white transition-all resize-y`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full !py-3 !rounded-xl justify-center font-semibold text-sm shadow-subtle hover:shadow-premium active:scale-[0.99] disabled:opacity-60 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
