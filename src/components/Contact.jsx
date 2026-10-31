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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/60 dark:bg-[#161920]/40 border-t border-[#E5E5E0] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            Let's build something exceptional together.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
            Whether inquiring about engineering roles, technical collaboration, or discussing a new web project, I welcome your message.
          </p>
        </div>

        {/* 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#F3F4F6]">
                Contact Coordinates
              </h3>
              <p className="text-sm text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
                I review all direct inquiries personally. Reach out through email, verified code repositories, or professional networks.
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold block">
                    Direct Email
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6] group-hover:text-[#4169E1] transition-colors truncate block">
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
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold block">
                    GitHub Repositories
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6] group-hover:text-[#4169E1] transition-colors truncate block">
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
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold block">
                    Professional Network
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6] group-hover:text-[#4169E1] transition-colors truncate block">
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
              className="portfolio-card p-4 sm:p-5 flex items-center justify-between group bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold block">
                    Curriculum Vitae
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6] group-hover:text-[#4169E1] transition-colors truncate block">
                    Download Resume (PDF)
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#4169E1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            <div className="p-4 rounded-xl bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 text-xs text-[#525252] dark:text-[#9CA3AF] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#171717] dark:text-[#F3F4F6]">
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
            <div className="portfolio-card p-6 sm:p-8 bg-white dark:bg-[#1C2029] shadow-premium">
              <div className="border-b border-[#E5E5E0] dark:border-white/10 pb-4 mb-6 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-lg text-[#171717] dark:text-[#F3F4F6]">
                    Send a Message
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#737373] dark:text-[#9CA3AF] mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#4169E1]" />
                    <span>Response turnaround: under 24 hours</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#4169E1] bg-[#FAFAF8] dark:bg-[#161920] px-2.5 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10 font-semibold">
                  Direct Dispatch
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#171717] dark:text-[#F3F4F6]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#525252] dark:text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your note has been delivered to my inbox and I will review your requirements promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary !text-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field */}
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
                      className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs font-mono flex items-start gap-3"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5">Notice</strong>
                        <span>{serverErrorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] font-bold block">
                        Full Name <span className="text-[#4169E1]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Mercer"
                        disabled={status === 'loading'}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#161920] border ${
                          errors.name ? 'border-red-500' : 'border-[#E5E5E0] dark:border-white/10 focus:border-[#4169E1]'
                        } text-[#171717] dark:text-[#F3F4F6] placeholder:text-[#737373]/50 text-sm focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {errors.name && (
                        <p role="alert" className="text-xs text-red-500 font-mono mt-1 font-semibold">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] font-bold block">
                        Email Address <span className="text-[#4169E1]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        disabled={status === 'loading'}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#161920] border ${
                          errors.email ? 'border-red-500' : 'border-[#E5E5E0] dark:border-white/10 focus:border-[#4169E1]'
                        } text-[#171717] dark:text-[#F3F4F6] placeholder:text-[#737373]/50 text-sm focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p role="alert" className="text-xs text-red-500 font-mono mt-1 font-semibold">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] font-bold block">
                      Subject / Project Scope <span className="text-[#4169E1]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Engineering Role Opening / Website Project Scope"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#161920] border ${
                        errors.subject ? 'border-red-500' : 'border-[#E5E5E0] dark:border-white/10 focus:border-[#4169E1]'
                      } text-[#171717] dark:text-[#F3F4F6] placeholder:text-[#737373]/50 text-sm focus:outline-none transition-colors disabled:opacity-50`}
                    />
                    {errors.subject && (
                      <p role="alert" className="text-xs text-red-500 font-mono mt-1 font-semibold">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] font-bold block">
                      Message &amp; Requirements <span className="text-[#4169E1]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Yash, we are evaluating candidates for a MERN stack role / interested in building a web application..."
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#161920] border ${
                        errors.message ? 'border-red-500' : 'border-[#E5E5E0] dark:border-white/10 focus:border-[#4169E1]'
                      } text-[#171717] dark:text-[#F3F4F6] placeholder:text-[#737373]/50 text-sm focus:outline-none transition-colors disabled:opacity-50`}
                    />
                    {errors.message && (
                      <p role="alert" className="text-xs text-red-500 font-mono mt-1 font-semibold">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary !py-2.5 !px-6 cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="font-mono text-xs text-[#737373] dark:text-[#9CA3AF] text-center sm:text-right">
                      Direct inbox dispatch • Secure REST
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
