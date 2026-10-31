import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, Sparkles, Terminal, Copy, Check, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const ROLES = [
  'Junior Full Stack Developer',
  'MERN Stack Developer',
  'React.js & Node.js Developer'
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for professional role
  useEffect(() => {
    const currentFullRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentFullRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullRole.slice(0, displayText.length + 1));
        }, 75);
      } else {
        // Pause at the end before deleting
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullRole.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Ambient Decorative Accents */}
      <div className="absolute top-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#E9E5FF]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-4 sm:left-8 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#8AB4FF]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-2xs max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="truncate text-[11.5px] sm:text-xs">Open to Junior Developer Roles</span>
          </div>
        </div>

        {/* Hero Grid: 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center text-left">
          
          {/* Left Column: Professional Introduction */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-2.5">
              {/* Small Introduction Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#E9E5FF]/80 border border-[#4169E1]/30 max-w-full">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#4169E1] shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#4169E1] font-bold">
                  HELLO, I'M
                </span>
              </div>
              
              {/* Main Heading: Yash Tank */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] leading-[1.06] break-words">
                <span className="bg-gradient-to-r from-[#171717] via-[#2A3342] to-[#4169E1] bg-clip-text text-transparent">
                  Yash Tank
                </span>
              </h1>

              {/* Animated Developer Role with Blinking Cursor - Tightened Top Spacing */}
              <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                <div className="font-heading text-base sm:text-2xl lg:text-3xl font-bold text-[#4169E1] tracking-tight min-h-[2.2rem] sm:min-h-[2.5rem] flex items-center flex-wrap leading-snug">
                  <span className="break-words">{displayText}</span>
                  <span className="inline-block w-[2.5px] sm:w-[3px] h-4.5 sm:h-7 bg-[#4169E1] ml-1 sm:ml-1.5 animate-pulse shrink-0 align-middle" />
                </div>
                <h2 className="text-xs sm:text-lg lg:text-xl font-medium text-[#171717] tracking-tight leading-snug">
                  Building Modern Web Experiences with React &amp; Node.js
                </h2>
              </div>
            </div>

            {/* Concise Recruiter-Focused Description with Enhanced Readability */}
            <p className="text-xs sm:text-base lg:text-lg text-[#525252] leading-relaxed max-w-2xl font-normal font-sans">
              BCA graduate and Full Stack Developer Intern at Ora Infotech. Experienced in building modular web interfaces, reliable backend APIs, and database-driven applications with React, Next.js, Node.js, and MongoDB/PostgreSQL.
            </p>

            {/* Primary Action Buttons: guaranteed >= 44px touch target */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              {/* Primary CTA: View My Projects */}
              <a
                href="#projects"
                className="btn-primary min-h-[44px] !py-2.5 !px-5 shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all font-semibold text-xs sm:text-sm justify-center rounded-xl"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>

              {/* Secondary CTA: Download Resume */}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Yash Tank Resume in PDF format"
                className="btn-secondary min-h-[44px] !py-2.5 !px-5 shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all font-semibold text-xs sm:text-sm justify-center rounded-xl"
              >
                <FileText className="w-3.5 h-3.5 text-[#4169E1]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Compact Contact & Social Links Bar - Refined Spacing */}
            <div className="pt-3.5 sm:pt-5 border-t border-[#E5E5E0] flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:gap-6 text-xs sm:text-sm text-[#737373]">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717]">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank GitHub profile"
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium min-h-[44px]"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank LinkedIn profile"
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium min-h-[44px]"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium min-h-[44px]"
                aria-label="Send email to Yash Tank"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#4169E1]" />
                <span>Email</span>
              </a>

              {/* Quick Copy Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] hover:border-[#4169E1] transition-colors font-mono text-[11px] sm:text-xs cursor-pointer py-1.5 px-2.5 rounded-md bg-[#FAFAF8] border border-[#E5E5E0] min-h-[36px] active:scale-95 shadow-2xs"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                <span className="truncate max-w-[130px] sm:max-w-none">{copied ? 'Copied' : portfolioData.personal.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code-Terminal Visual Specimen */}
          <div className="lg:col-span-5 w-full">
            <div className="portfolio-card p-4 sm:p-7 relative overflow-hidden space-y-3.5 sm:space-y-5 shadow-premium bg-white/95 backdrop-blur-sm group hover:border-[#4169E1]/40 transition-all duration-300">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2.5 sm:pb-3.5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#737373] bg-[#FAFAF8] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#E5E5E0]">
                  <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4169E1]" />
                  <span>developer.config.ts</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="space-y-2 sm:space-y-3 font-mono text-[11px] sm:text-[13px] leading-relaxed select-text overflow-x-auto">
                <div>
                  <span className="text-[#8B5CF6] font-bold">export const</span>{' '}
                  <span className="text-[#2563EB] font-semibold">yashTank</span>{' '}
                  <span className="text-[#737373]">=</span> {'{'}
                </div>
                
                <div className="pl-2.5 sm:pl-5 space-y-1 sm:space-y-1.5 text-[#525252]">
                  <div>
                    <span className="text-[#171717] font-medium">name</span>:{' '}
                    <span className="text-emerald-600">"{portfolioData.personal.name}"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] font-medium">role</span>:{' '}
                    <span className="text-emerald-600">"Junior Full Stack Developer"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] font-medium">coreStack</span>:{' '}[
                    <span className="text-emerald-600">"React"</span>,{' '}
                    <span className="text-emerald-600">"Next.js"</span>,{' '}
                    <span className="text-emerald-600">"Node.js"</span>,{' '}
                    <span className="text-emerald-600">"Express"</span>,{' '}
                    <span className="text-emerald-600">"MongoDB"</span>],
                  </div>
                  <div>
                    <span className="text-[#171717] font-medium">experience</span>:{' '}
                    <span className="text-emerald-600">"Full Stack Developer Intern @ Ora Infotech"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] font-medium">education</span>:{' '}
                    <span className="text-emerald-600">"BCA • Shree Shambhubhai V. Patel College"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] font-medium">status</span>:{' '}
                    <span className="text-[#4169E1] font-semibold">"Open to Junior Developer Opportunities"</span>
                  </div>
                </div>

                <div>{'};'}</div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#E9E5FF] text-[#4169E1] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11.5px] sm:text-xs font-bold text-[#171717] block leading-snug">
                      Production Standards
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#737373] leading-none">
                      Accessible, mobile-first &amp; verified
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10.5px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Verified
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
