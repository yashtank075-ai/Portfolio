import React from 'react';
import { GraduationCap, Code2, Database, Layout, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { degree, institution, location, status } = portfolioData.education;

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/30 dark:bg-[#161920]/30 backdrop-blur-[2px] border-y border-[#E5E5E0]/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            Engineering with discipline &amp; craftsmanship.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
            A developer who values clean modular components, predictable state management, and reliable backend services.
          </p>
        </div>

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
              <p>
                My name is <strong className="font-semibold text-[#171717] dark:text-[#F3F4F6]">{portfolioData.personal.name}</strong>. I am a full-stack developer based in {portfolioData.personal.location}, specializing in the MERN stack and bespoke website development.
              </p>
              <p>
                My computing foundation is backed by a formal <strong className="font-semibold text-[#171717] dark:text-[#F3F4F6]">{degree}</strong> from {institution}. This academic training established core competencies in computer science fundamentals, data structures and algorithms, relational and NoSQL databases, object-oriented systems, and software engineering methodologies.
              </p>
              <p>
                When engineering applications, I treat both ends of the stack with deliberate care. On the client side, I write clean, modular React and Next.js interfaces with semantic HTML, accessible interaction states, and zero unnecessary script bloat. On the backend, I design structured Node.js and Express REST APIs backed by verified MongoDB schemas.
              </p>
            </div>

            {/* Academic Credential Card */}
            <div className="portfolio-card p-5 sm:p-6 bg-white dark:bg-[#1C2029] flex items-center justify-between gap-4 shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#171717] dark:text-[#F3F4F6]">
                    {degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] dark:text-[#9CA3AF]">
                    {institution} • {location}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-800/40 shrink-0">
                {status}
              </span>
            </div>
          </div>

          {/* Right Column: Key Pillars & Technical Strengths */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#4169E1] font-bold">
              Core Engineering Focus
            </h3>

            <div className="portfolio-card p-5 space-y-2 bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1]">
                  <Layout className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6]">
                  Modular React Interfaces
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF] pl-10">
                Decomposed, reusable components with explicit prop types and predictable state flows using hooks and Tailwind CSS.
              </p>
            </div>

            <div className="portfolio-card p-5 space-y-2 bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1]">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6]">
                  Structured REST APIs
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF] pl-10">
                Express routes with rate-limiting, standardized JSON response envelopes, and defensive input sanitization.
              </p>
            </div>

            <div className="portfolio-card p-5 space-y-2 bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1]">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6]">
                  Robust MongoDB Modeling
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF] pl-10">
                Careful document schema design with Mongoose validations, indexed queries, and relationship integrity.
              </p>
            </div>

            <div className="portfolio-card p-5 space-y-2 bg-white dark:bg-[#1C2029] shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#171717] dark:text-[#F3F4F6]">
                  Tactile Responsive Polish
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF] pl-10">
                Thorough cross-device testing with fluid breakpoints, accessible WCAG contrast, and zero layout shifts.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
