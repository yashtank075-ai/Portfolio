import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
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
            Experience &amp; Academic Tenure
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
            Professional internship contribution alongside formal academic grounding in computer applications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 max-w-4xl text-left">
          {portfolioData.experience.map((exp, idx) => {
            const isInternship = exp.role.toLowerCase().includes('intern');
            return (
              <div
                key={idx}
                className="portfolio-card p-6 sm:p-8 bg-white dark:bg-[#1C2029] relative overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                {/* Accent stripe */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#4169E1]" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E0] dark:border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                      {isInternship ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-[#171717] dark:text-[#F3F4F6]">
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-sm text-[#4169E1]">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
                    <span className="inline-flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#161920] px-3 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#4169E1]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-[#FAFAF8] dark:bg-[#161920] px-3 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#4169E1]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#525252] dark:text-[#9CA3AF] leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Key Responsibilities & Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#E5E5E0] dark:border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] font-bold block mb-2">
                    Key Highlights &amp; Scope:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF]">
                        <CheckCircle2 className="w-4 h-4 text-[#4169E1] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
