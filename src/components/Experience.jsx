import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const internship = portfolioData.experience.find((exp) => exp.type === 'internship') || portfolioData.experience[0];
  const academic = portfolioData.experience.find((exp) => exp.type === 'education') || portfolioData.experience[1];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/30 dark:bg-[#161920]/30 backdrop-blur-[2px] border-y border-[#E5E5E0]/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">CAREER JOURNEY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            Experience &amp; Academic Background
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
            Hands-on professional engineering contributions alongside formal academic computer science training.
          </p>
        </div>

        <div className="space-y-10 max-w-4xl text-left">
          
          {/* 1. PROFESSIONAL INTERNSHIP EXPERIENCE CARD */}
          <div className="portfolio-card p-6 sm:p-8 lg:p-9 bg-white dark:bg-[#1C2029] relative overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300">
            {/* Primary Blue Accent Stripe */}
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#4169E1]" />

            {/* Header / Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E0] dark:border-white/10 pb-5 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#F3F4F6]">
                      {internship.role}
                    </h3>
                  </div>
                  <p className="text-base font-semibold text-[#4169E1] mt-0.5">
                    {internship.organization}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
                <span className="inline-flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#161920] px-3 py-1.5 rounded-md border border-[#E5E5E0] dark:border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-[#4169E1]" />
                  <span>{internship.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#161920] px-3 py-1.5 rounded-md border border-[#E5E5E0] dark:border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#4169E1]" />
                  <span>{internship.location}</span>
                </span>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#9CA3AF] leading-relaxed mb-6 font-sans">
              {internship.summary}
            </p>

            {/* Practical Contributions as Bullet Points */}
            <div className="space-y-3 pt-2 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] font-bold block mb-3">
                Key Development Contributions &amp; Responsibilities:
              </span>
              <div className="space-y-3">
                {internship.contributions.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#383838] dark:text-[#D1D5DB] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#4169E1] shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Tech Stack Area */}
            <div className="pt-4 border-t border-[#E5E5E0] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
                <Terminal className="w-3.5 h-3.5 text-[#4169E1]" />
                <span className="font-semibold uppercase tracking-wider">Technologies Used:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {internship.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#FAFAF8] dark:bg-[#161920] text-[#171717] dark:text-[#F3F4F6] border border-[#E5E5E0] dark:border-white/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. ACADEMIC TENURE CARD (DISTINCT & SEPARATE) */}
          {academic && (
            <div className="portfolio-card p-6 sm:p-7 bg-white/80 dark:bg-[#1C2029]/80 relative overflow-hidden border border-[#E5E5E0] dark:border-white/10 shadow-sm transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E0] dark:border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F3F0] dark:bg-white/5 text-[#737373] dark:text-[#9CA3AF] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#171717] dark:text-[#F3F4F6]">
                      {academic.role}
                    </h3>
                    <p className="text-sm text-[#737373] dark:text-[#9CA3AF] font-medium">
                      {academic.organization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
                  <span className="inline-flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#161920] px-2.5 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10">
                    <Calendar className="w-3 h-3 text-[#737373]" />
                    <span>{academic.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#161920] px-2.5 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10">
                    <MapPin className="w-3 h-3 text-[#737373]" />
                    <span>{academic.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF] leading-relaxed mb-3 font-sans">
                {academic.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#E5E5E0]/60 dark:border-white/5 font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
                {academic.contributions.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 shrink-0" />
                    <span className="text-[11.5px] leading-tight">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
