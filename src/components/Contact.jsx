import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Code2, ArrowRight, ArrowUpRight, ExternalLink, Play, Send, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';
import { Linkedin } from './Icons';
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
        setServerErrorMessage(data.message || 'Unable to send message. Please try again.');
      }
    } catch (err) {
      console.error('[CONTACT API FETCH ERROR]', err);
      setStatus('error');
      setServerErrorMessage('Unable to connect to server. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#050811] text-slate-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: DIALOGUE INITIATION & DIRECT CHANNELS */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101929] border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Contact Me</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
              Have an idea? <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Let's build something useful.</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-normal max-w-xl">
              Whether you are scouting for a reliable full-stack developer to join your engineering team or seeking a MERN specialist for web product delivery, I am always ready to talk architecture, scope, and implementation.
            </p>

            {/* Direct Channel Cards List */}
            <div className="space-y-3 pt-2 font-mono">
              
              {/* Direct Email Card */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-4 rounded-2xl bg-[#0b101c] border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-[#141d2e] border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                      {portfolioData.personal.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>

              {/* Source Repositories Card */}
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0b101c] border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-[#141d2e] border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Source Repositories</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                      github.com/yashtank075-ai
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
              </a>

              {/* Professional Network Card */}
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0b101c] border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-[#141d2e] border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Professional Network</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                      linkedin.com/in/yash-tank
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
              </a>
            
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101c]/95 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6 font-mono text-left">
              
              {/* Form Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-mono font-bold">
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>Send Message to Yash</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Response SLA: &lt; 24h
                </span>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-xl bg-[#0d1d18] border border-emerald-500/30 text-center space-y-4 font-sans"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-heading">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out! Your inquiry has been dispatched directly to my inbox. I will review and respond shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-xl bg-[#141d2e] border border-white/10 text-xs font-mono font-semibold text-slate-200 hover:text-white hover:border-cyan-400/40 transition-all shadow-md inline-flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4 text-cyan-400" />
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

                    {/* Server error alert banner */}
                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                        <div>
                          <strong className="font-semibold block mb-0.5">Delivery Error</strong>
                          <span>{serverErrorMessage || 'Unable to send message. Please try again.'}</span>
                        </div>
                      </div>
                    )}

                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-mono font-semibold text-slate-300">
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Mercer"
                          disabled={status === 'loading'}
                          className={`w-full px-4 py-3 rounded-xl bg-[#121927] border ${
                            errors.name ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                          } text-slate-100 placeholder:text-slate-600 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-400 font-sans flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-mono font-semibold text-slate-300">
                          Your Email Address <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          disabled={status === 'loading'}
                          className={`w-full px-4 py-3 rounded-xl bg-[#121927] border ${
                            errors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                          } text-slate-100 placeholder:text-slate-600 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 font-sans flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Subject / Scope */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-semibold text-slate-300">
                        Project Scope or Role Title <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Full-Stack Engineer Opening / MERN Web Project"
                        disabled={status === 'loading'}
                        className={`w-full px-4 py-3 rounded-xl bg-[#121927] border ${
                          errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-slate-100 placeholder:text-slate-600 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-400 font-sans flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-semibold text-slate-300">
                        Message & Requirements <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Yash, we are looking for a MERN developer to help build..."
                        disabled={status === 'loading'}
                        className={`w-full px-4 py-3 rounded-xl bg-[#121927] border ${
                          errors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-slate-100 placeholder:text-slate-600 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 font-sans flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold font-sans text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-110 active:scale-[0.98] transition-all border border-blue-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-white" />
                            <span>Send Message</span>
                            <ArrowUpRight className="w-4 h-4 text-blue-200" />
                          </>
                        )}
                      </button>

                      <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                        Protected by client validation
                      </span>
                    </div>

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
