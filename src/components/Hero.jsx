import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Sparkles, Terminal, Copy, Check } from 'lucide-react';
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
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Subtle Background Geometric Accents */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-[#E9E5FF]/40 dark:bg-[#4169E1]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-8 w-80 h-80 rounded-full bg-[#8AB4FF]/20 dark:bg-[#5B82F6]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.statusBadge || 'Available for engineering roles & select web projects'}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          
          {/* Main Headline & Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#4169E1] font-bold">
                  {portfolioData.personal.role}
                </span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6] leading-[1.08]">
                Hi, I'm <span className="text-[#4169E1]">{portfolioData.personal.name}</span>. <br />
                Building modern full-stack web applications.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
              {portfolioData.personal.tagline || portfolioData.personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                className="btn-primary !py-3 !px-5 shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary CTA: Download Resume */}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Yash Tank Resume in PDF format"
                className="btn-secondary !py-3 !px-5"
              >
                <FileText className="w-4 h-4 text-[#4169E1]" />
                <span>Download Resume</span>
              </a>

              {/* Contact Link */}
              <a
                href="#contact"
                className="btn-secondary !py-3 !px-4 hover:border-[#4169E1]"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-[#E5E5E0] dark:border-white/10 flex flex-wrap items-center gap-5 sm:gap-6 text-sm text-[#737373] dark:text-[#9CA3AF]">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717] dark:text-[#F3F4F6]">
                Connect:
              </span>
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank GitHub profile"
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium text-xs sm:text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Yash Tank LinkedIn profile"
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-medium text-xs sm:text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-[#4169E1] transition-colors font-mono text-xs cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                <span>{copied ? 'Copied Email' : portfolioData.personal.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Editor Visual Specimen */}
          <div className="lg:col-span-5 w-full">
            <div className="portfolio-card p-6 sm:p-7 relative overflow-hidden space-y-5 shadow-premium bg-white dark:bg-[#1C2029]">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#737373] dark:text-[#9CA3AF] bg-[#FAFAF8] dark:bg-[#161920] px-2.5 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10">
                  <Terminal className="w-3.5 h-3.5 text-[#4169E1]" />
                  <span>developer.config.ts</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="space-y-3 font-mono text-xs sm:text-[13px] leading-relaxed select-text">
                <div>
                  <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-bold">export const</span>{' '}
                  <span className="text-[#2563EB] dark:text-[#60A5FA] font-semibold">yashTank</span>{' '}
                  <span className="text-[#737373]">=</span> {'{'}
                </div>
                
                <div className="pl-5 space-y-1.5 text-[#525252] dark:text-[#9CA3AF]">
                  <div>
                    <span className="text-[#171717] dark:text-[#F3F4F6] font-medium">name</span>:{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{portfolioData.personal.name}"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] dark:text-[#F3F4F6] font-medium">role</span>:{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"MERN Stack Developer"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] dark:text-[#F3F4F6] font-medium">specialization</span>:{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack Web Applications"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] dark:text-[#F3F4F6] font-medium">coreStack</span>:{' '}[
                    <span className="text-emerald-600 dark:text-emerald-400">"React"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Node.js"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Express"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"MongoDB"</span>],
                  </div>
                  <div>
                    <span className="text-[#171717] dark:text-[#F3F4F6] font-medium">education</span>:{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"BCA (Computer Applications)"</span>,
                  </div>
                  <div>
                    <span className="text-[#171717] dark:text-[#F3F4F6] font-medium">status</span>:{' '}
                    <span className="text-[#4169E1] font-semibold">"Ready for New Opportunities"</span>
                  </div>
                </div>

                <div>{'};'}</div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="p-3.5 rounded-xl bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#171717] dark:text-[#F3F4F6] block leading-snug">
                      Production Standards
                    </span>
                    <span className="text-[11px] text-[#737373] dark:text-[#9CA3AF] leading-none">
                      Accessible, mobile-first &amp; tested
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
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
