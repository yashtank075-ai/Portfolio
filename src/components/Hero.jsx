import React, { useState } from 'react';
import { ArrowDown, FileText, Check, Copy, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge & Location */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-2xs">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full-Stack &amp; Web Development Roles</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#737373]">
            <MapPin className="w-3.5 h-3.5 text-[#4169E1]" />
            <span>Surat, Gujarat, India</span>
          </div>
        </div>

        {/* Hero Grid: 12-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4169E1]">
                Full Stack Developer
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
                I build digital products that solve real problems.
              </h1>

              <h2 className="text-lg sm:text-xl font-medium text-[#4169E1] tracking-tight">
                MERN Stack &amp; Next.js Web Engineering
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-2xl font-normal">
              I'm <strong className="font-semibold text-[#171717]">Yash Tank</strong>, a full-stack developer focused on building practical web applications, thoughtful interfaces and reliable backend systems. Currently interning at <strong className="font-semibold text-[#171717]">Ora Infotech</strong> and holding a formal <strong className="font-semibold text-[#171717]">BCA</strong> degree.
            </p>

            {/* Action Buttons: View Projects & Resume */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary min-h-[46px] justify-center text-sm font-semibold rounded-xl"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Yash Tank Resume in PDF format"
                className="btn-secondary min-h-[46px] justify-center text-sm font-semibold rounded-xl"
              >
                <FileText className="w-4 h-4 text-[#4169E1]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Compact Professional Links Bar */}
            <div className="pt-4 border-t border-[#E5E5E0] flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-[#737373]">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717]">
                Connect:
              </span>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank GitHub profile"
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium min-h-[40px]"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank LinkedIn profile"
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium min-h-[40px]"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium min-h-[40px]"
                aria-label="Send email to Yash Tank"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#4169E1]" />
                <span>Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] hover:border-[#4169E1] transition-colors font-mono text-xs cursor-pointer py-1.5 px-2.5 rounded-lg bg-[#FAFAF8] border border-[#E5E5E0] min-h-[36px] active:scale-95"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                <span className="truncate max-w-[130px] sm:max-w-none">{copied ? 'Copied' : portfolioData.personal.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Professional Specimen (Replaces Fake Terminal) */}
          <div className="lg:col-span-5 w-full">
            <div className="portfolio-card p-6 sm:p-7 bg-white rounded-2xl border border-[#E5E5E0] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717]">
                  Developer Profile
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Verified Details
                </span>
              </div>

              {/* Current Role Card */}
              <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#4169E1] font-semibold">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Current Experience</span>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#171717]">
                  Full Stack Developer Intern
                </h3>
                <p className="text-xs text-[#525252]">
                  Ora Infotech • Agent workflows, kit booking APIs &amp; corporate web systems
                </p>
              </div>

              {/* Education Card */}
              <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#4169E1] font-semibold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Degree</span>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#171717]">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xs text-[#525252]">
                  Shree Shambhubhai V. Patel College, VNSGU • Completed 2026
                </p>
              </div>

              {/* Core Technologies Badges */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-semibold block">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#FAFAF8] text-[#171717] border border-[#E5E5E0] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
