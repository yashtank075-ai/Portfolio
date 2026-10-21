import React, { useState } from 'react';
import { Mail, ArrowUpRight, CheckCircle2, AlertCircle, Loader2, RotateCcw, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _hp_company: '' // Honeypot field for automated spam bots
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
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
      setServerErrorMessage('Backend service unavailable. Please reach out directly at yash.dev.contact26@gmail.com.');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-14 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-6 mb-8 sm:mb-10 text-left">
          <div className="space-y-3">
            <div className="editorial-tag text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5]" />
              <span>05 // Contact</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171714] dark:text-[#F5F2EB] tracking-tight">
              Contact &amp; Discuss a Project
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] max-w-md leading-relaxed">
            Whether inquiring about full-stack engineering roles, technical collaboration, or discussing a new web project, I welcome your message.
          </p>
        </div>

        {/* 2-Column Spread: Direct Channels & Functional Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Verified Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] dark:text-[#F5F2EB] font-normal">
                Direct Communication Channels
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
                I review all inquiries personally. For immediate reach, feel free to use direct email or connect through verified professional networks.
              </p>
            </div>

            <div className="space-y-3.5 font-mono text-xs sm:text-sm">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                aria-label={`Send direct email to ${portfolioData.personal.email}`}
                className="editorial-card p-4 sm:p-5 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#8C734B] dark:text-[#D9C8A5] flex items-center justify-center shrink-0 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-[#423F39] dark:text-[#C4C0B6] font-semibold block">
                      Direct Email
                    </span>
                    <span className="font-bold text-[#171714] dark:text-[#F5F2EB] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] transition-colors truncate block">
                      {portfolioData.personal.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#423F39] dark:text-[#C4C0B6] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank GitHub repositories (opens in new tab)"
                className="editorial-card p-4 sm:p-5 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#8C734B] dark:text-[#D9C8A5] flex items-center justify-center shrink-0 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-[#423F39] dark:text-[#C4C0B6] font-semibold block">
                      Code Repositories
                    </span>
                    <span className="font-bold text-[#171714] dark:text-[#F5F2EB] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] transition-colors truncate block">
                      github.com/yashtank075-ai
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#423F39] dark:text-[#C4C0B6] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank LinkedIn profile (opens in new tab)"
                className="editorial-card p-4 sm:p-5 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#8C734B] dark:text-[#D9C8A5] flex items-center justify-center shrink-0 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-[#423F39] dark:text-[#C4C0B6] font-semibold block">
                      Professional Network
                    </span>
                    <span className="font-bold text-[#171714] dark:text-[#F5F2EB] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] transition-colors truncate block">
                      linkedin.com/in/yash-tank
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#423F39] dark:text-[#C4C0B6] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* Resume */}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Yash Tank Resume in PDF format (opens in new tab)"
                className="editorial-card p-4 sm:p-5 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#8C734B] dark:text-[#D9C8A5] flex items-center justify-center shrink-0 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-[#423F39] dark:text-[#C4C0B6] font-semibold block">
                      Curriculum Vitae
                    </span>
                    <span className="font-bold text-[#171714] dark:text-[#F5F2EB] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] transition-colors truncate block">
                      Download yash_tank_resume.pdf
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#423F39] dark:text-[#C4C0B6] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>

            <div className="p-4 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] space-y-1">
              <span className="text-[#171714] dark:text-[#F5F2EB] font-bold block">Location &amp; Work Model:</span>
              <span>Surat, India (IST UTC+5:30) • Open for full-time engineering roles, hybrid/remote positions, and commercial web client projects.</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="editorial-card p-5 sm:p-7 lg:p-8 space-y-5">
              <div className="border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold">
                  Send a Message / Discuss a Project
                </span>
                <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] shrink-0">
                  Response SLA: &lt; 24h
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-8 text-center space-y-4 bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]">
                  <div className="w-12 h-12 rounded-full bg-[#171714] text-[#FAF8F3] dark:bg-[#F5F2EB] dark:text-[#171714] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#8C734B] dark:text-[#8C734B]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#171714] dark:text-[#F5F2EB] font-normal">
                    Message Dispatched Successfully
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#3D3B35] dark:text-[#D4D0C5] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your note has been delivered to my primary inbox. I will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs sm:text-sm border border-[#171714] dark:border-[#F5F2EB] text-[#171714] dark:text-[#F5F2EB] hover:bg-[#171714] hover:text-[#FAF8F3] dark:hover:bg-[#F5F2EB] dark:hover:text-[#171714] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Invisible Honeypot Field */}
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

                  {/* Server error alert */}
                  {status === 'error' && (
                    <div 
                      role="alert"
                      className="p-4 bg-[#EFECE3] dark:bg-[#201818] border border-[#B85C5C] text-[#8C2A2A] dark:text-[#E07A7A] text-xs font-mono flex items-start gap-3"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5">Delivery Notice</strong>
                        <span>{serverErrorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold block">
                        Full Name <span className="text-[#8C734B] dark:text-[#D9C8A5]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Mercer"
                        disabled={status === 'loading'}
                        aria-required="true"
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`w-full px-4 py-3 bg-[#FAF8F3] dark:bg-[#151512] border ${
                          errors.name ? 'border-[#B85C5C]' : 'border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] focus:border-[#8C734B] dark:focus:border-[#D9C8A5]'
                        } text-[#171714] dark:text-[#F5F2EB] placeholder:text-[#423F39]/50 font-sans text-base focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" role="alert" className="font-mono text-xs text-[#8C2A2A] dark:text-[#E07A7A] mt-1 font-semibold">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold block">
                        Email Address <span className="text-[#8C734B] dark:text-[#D9C8A5]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        disabled={status === 'loading'}
                        aria-required="true"
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full px-4 py-3 bg-[#FAF8F3] dark:bg-[#151512] border ${
                          errors.email ? 'border-[#B85C5C]' : 'border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] focus:border-[#8C734B] dark:focus:border-[#D9C8A5]'
                        } text-[#171714] dark:text-[#F5F2EB] placeholder:text-[#423F39]/50 font-sans text-base focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="font-mono text-xs text-[#8C2A2A] dark:text-[#E07A7A] mt-1 font-semibold">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold block">
                      Subject / Project Scope <span className="text-[#8C734B] dark:text-[#D9C8A5]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Engineering Role Opening / Website Project Scope"
                      disabled={status === 'loading'}
                      aria-required="true"
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={`w-full px-4 py-3 bg-[#FAF8F3] dark:bg-[#151512] border ${
                        errors.subject ? 'border-[#B85C5C]' : 'border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] focus:border-[#8C734B] dark:focus:border-[#D9C8A5]'
                      } text-[#171714] dark:text-[#F5F2EB] placeholder:text-[#423F39]/50 font-sans text-base focus:outline-none transition-colors disabled:opacity-50`}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" role="alert" className="font-mono text-xs text-[#8C2A2A] dark:text-[#E07A7A] mt-1 font-semibold">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold block">
                      Message &amp; Requirements <span className="text-[#8C734B] dark:text-[#D9C8A5]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Yash, we are evaluating candidates for a MERN stack role / interested in commissioning a web application..."
                      disabled={status === 'loading'}
                      aria-required="true"
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-4 py-3 bg-[#FAF8F3] dark:bg-[#151512] border ${
                        errors.message ? 'border-[#B85C5C]' : 'border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] focus:border-[#8C734B] dark:focus:border-[#D9C8A5]'
                      } text-[#171714] dark:text-[#F5F2EB] placeholder:text-[#423F39]/50 font-sans text-base focus:outline-none transition-colors disabled:opacity-50`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="font-mono text-xs text-[#8C2A2A] dark:text-[#E07A7A] mt-1 font-semibold">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#171714] dark:bg-[#F5F2EB] text-[#F5F2EB] dark:text-[#171714] hover:bg-[#8C734B] dark:hover:bg-[#D9C8A5] transition-colors font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] text-center sm:text-right">
                      Spam-protected • Encrypted REST transport
                    </span>
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
