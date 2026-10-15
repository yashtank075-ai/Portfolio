import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Discipline Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-4 mb-7 text-left">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-wider">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5] shrink-0" />
              <span className="font-semibold text-[#171714] dark:text-[#F5F2EB]">
                YASH TANK
              </span>
            </div>
            <span className="text-[#5A574F] dark:text-[#A8A49A] text-[11px] sm:text-xs">
              // MERN &amp; FULL-STACK DEVELOPER
            </span>
          </div>
          <div className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{portfolioData.personal.location}</span>
            <span className="text-[#8C734B] dark:text-[#D9C8A5] shrink-0">●</span>
            <span className="font-semibold text-[#171714] dark:text-[#F5F2EB]">
              Available for Full-Time Roles &amp; Projects
            </span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Main Editorial Headline & Copy */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#171714] dark:text-[#F5F2EB] leading-[1.08] tracking-tight">
              Thoughtful design. <br className="hidden sm:inline" />
              Well-engineered web applications.
            </h1>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed max-w-2xl font-normal">
              I develop full-stack applications and high-performance commercial websites using <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">React</strong>, <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">Next.js</strong>, <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">Node.js</strong>, <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">Express</strong>, and <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">MongoDB</strong>. My approach prioritizes modular architecture, clean REST APIs, and tactile responsive design.
            </p>

            {/* Clear Action CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
              {/* Primary: View Projects */}
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171714] dark:bg-[#F5F2EB] text-[#F5F2EB] dark:text-[#171714] hover:bg-[#8C734B] dark:hover:bg-[#D9C8A5] transition-all font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-center"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 shrink-0" />
              </a>

              {/* Secondary: Discuss a Project / Contact */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#171714] dark:border-[#F5F2EB] text-[#171714] dark:text-[#F5F2EB] hover:border-[#8C734B] hover:text-[#8C734B] dark:hover:border-[#D9C8A5] dark:hover:text-[#D9C8A5] transition-all font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-center"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              {/* Tertiary: Download Resume */}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.2)] text-[#3D3B35] dark:text-[#D4D0C5] hover:text-[#171714] dark:hover:text-[#F5F2EB] hover:border-[#8C734B] dark:hover:border-[#D9C8A5] transition-colors font-mono text-xs sm:text-sm text-center"
              >
                <FileText className="w-4 h-4 text-[#8C734B] dark:text-[#D9C8A5] shrink-0" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="pt-6 border-t border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] flex flex-wrap items-center gap-5 sm:gap-7 font-mono text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6]">
              <span className="uppercase tracking-wider text-xs text-[#8C734B] dark:text-[#D9C8A5] font-semibold">
                Direct Channels:
              </span>
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="editorial-link"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="editorial-link"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="editorial-link"
              >
                <Mail className="w-4 h-4" />
                <span>{portfolioData.personal.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Discipline Index */}
          <div className="lg:col-span-4 space-y-6 w-full">
            <div className="editorial-card p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold">
                  Technical Architecture
                </span>
                <span className="font-mono text-xs text-[#8C734B] dark:text-[#D9C8A5] font-medium">
                  FULL-STACK
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[#171714] dark:text-[#F5F2EB]">
                    <span className="font-bold text-xs uppercase tracking-wider">01 / Frontend</span>
                    <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">React &amp; Next.js</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Modular component systems, server-rendered views, custom hooks, and Tailwind design tokens.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D3C8]/60 dark:border-[rgba(245,242,235,0.08)] space-y-1">
                  <div className="flex justify-between items-center text-[#171714] dark:text-[#F5F2EB]">
                    <span className="font-bold text-xs uppercase tracking-wider">02 / Backend &amp; API</span>
                    <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">Node &amp; Express</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    RESTful endpoints, middleware routing, rate-limiting, and defensive error handlers.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D3C8]/60 dark:border-[rgba(245,242,235,0.08)] space-y-1">
                  <div className="flex justify-between items-center text-[#171714] dark:text-[#F5F2EB]">
                    <span className="font-bold text-xs uppercase tracking-wider">03 / Database Layer</span>
                    <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">MongoDB &amp; Mongoose</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Flexible document schema modeling, collections indexing, and relationship integrity.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D3C8]/60 dark:border-[rgba(245,242,235,0.08)] space-y-1">
                  <div className="flex justify-between items-center text-[#171714] dark:text-[#F5F2EB]">
                    <span className="font-bold text-xs uppercase tracking-wider">04 / Academic Foundation</span>
                    <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">BCA Degree</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Veer Narmad South Gujarat University. Core algorithms, DBMS, and software design.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] flex items-center justify-between font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
                <span>Status</span>
                <span className="text-[#8C734B] dark:text-[#D9C8A5] font-semibold">Open for Discussion</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
