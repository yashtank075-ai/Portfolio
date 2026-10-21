import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { degree, institution, location, status } = portfolioData.education;

  return (
    <section id="about" className="py-12 sm:py-14 lg:py-16 relative border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-6 mb-8 sm:mb-10 text-left">
          <div className="space-y-3">
            <div className="editorial-tag text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5]" />
              <span>02 // Background &amp; Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171714] dark:text-[#F5F2EB] tracking-tight">
              Engineering with Intention
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] max-w-md leading-relaxed">
            A developer who values modular component design, predictable state management, and reliable backend contracts above superficial trends.
          </p>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Narrative Introduction & Engineering Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
              <p>
                My name is <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">Yash Tank</strong>. I am a full-stack developer based in Surat, Gujarat, specializing in the MERN stack and modern website development.
              </p>
              <p>
                My computing foundation is backed by a formal <strong className="font-semibold text-[#171714] dark:text-[#F5F2EB]">Bachelor of Computer Applications (BCA)</strong> from Veer Narmad South Gujarat University. This academic training established core competencies in computer science fundamentals, data structures and algorithms, relational and NoSQL databases, object-oriented systems, and software engineering methodologies.
              </p>
              <p>
                When engineering applications, I treat both ends of the stack with deliberate care. On the client side, I write clean, modular React and Next.js interfaces with semantic HTML, accessible interaction states, and zero unnecessary script bloat. On the backend, I design structured Node.js and Express REST APIs backed by verified MongoDB schemas.
              </p>
            </div>

            {/* Development Pillars */}
            <div className="pt-5 border-t border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] space-y-3.5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#8C734B] dark:text-[#D9C8A5] font-bold">
                Core Development Principles
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#171714] dark:text-[#F5F2EB] block">
                    01 / Modular React Interfaces
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Decomposed, reusable components with explicit prop types and predictable state flows.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#171714] dark:text-[#F5F2EB] block">
                    02 / Structured REST APIs
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Express routes with rate-limiting, standardized JSON payloads, and defensive input sanitization.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#171714] dark:text-[#F5F2EB] block">
                    03 / Robust Data Modeling
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Careful MongoDB schema design with Mongoose validations to prevent orphan data records.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#171714] dark:text-[#F5F2EB] block">
                    04 / Tactile Responsive Polish
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6] leading-relaxed">
                    Tested across screen widths (360px to 1440px+) with zero layout shifts and accessible tap targets.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Credentials Banner */}
            <div className="p-4 sm:p-5 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#8C734B] dark:text-[#D9C8A5] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-[#171714] dark:text-[#F5F2EB]">
                    {degree}
                  </h4>
                  <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
                    {institution} • {location}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 bg-[#EFECE3] dark:bg-[#1E1E1A] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[#8C734B] dark:text-[#D9C8A5] font-semibold shrink-0">
                {status}
              </span>
            </div>
          </div>

          {/* Right Column: Technical Skill Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="editorial-card p-6 sm:p-7 space-y-6">
              <div className="border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8C734B] dark:text-[#D9C8A5] font-bold block mb-1">
                  Skills Matrix
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#171714] dark:text-[#F5F2EB]">
                  Tools &amp; Capabilities
                </h3>
              </div>

              {/* Category 1: Frontend */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#171714] dark:text-[#F5F2EB] uppercase tracking-wider">
                  <span>Frontend Engineering</span>
                  <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">Client</span>
                </div>
                <div className="space-y-1.5">
                  {portfolioData.skills.frontend.map((item) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1.5 border-b border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] text-xs sm:text-sm gap-1 sm:gap-4">
                      <span className="font-sans text-[#171714] dark:text-[#F5F2EB] font-medium shrink-0">{item.name}</span>
                      <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] sm:text-right">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Backend */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#171714] dark:text-[#F5F2EB] uppercase tracking-wider">
                  <span>Backend Architecture</span>
                  <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">Server</span>
                </div>
                <div className="space-y-1.5">
                  {portfolioData.skills.backend.map((item) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1.5 border-b border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] text-xs sm:text-sm gap-1 sm:gap-4">
                      <span className="font-sans text-[#171714] dark:text-[#F5F2EB] font-medium shrink-0">{item.name}</span>
                      <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] sm:text-right">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: Database */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#171714] dark:text-[#F5F2EB] uppercase tracking-wider">
                  <span>Database Systems</span>
                  <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">Data</span>
                </div>
                <div className="space-y-1.5">
                  {portfolioData.skills.database.map((item) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1.5 border-b border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] text-xs sm:text-sm gap-1 sm:gap-4">
                      <span className="font-sans text-[#171714] dark:text-[#F5F2EB] font-medium shrink-0">{item.name}</span>
                      <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] sm:text-right">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 4: Tools & Workflow */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#171714] dark:text-[#F5F2EB] uppercase tracking-wider">
                  <span>Workflow &amp; Tooling</span>
                  <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5]">Environment</span>
                </div>
                <div className="space-y-1.5">
                  {portfolioData.skills.tools.map((item) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1.5 border-b border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] text-xs sm:text-sm gap-1 sm:gap-4">
                      <span className="font-sans text-[#171714] dark:text-[#F5F2EB] font-medium shrink-0">{item.name}</span>
                      <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] sm:text-right">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Verified Experience & Practical Milestones Track */}
        <div className="pt-10 sm:pt-12 border-t border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#8C734B] dark:text-[#D9C8A5] font-bold block mb-1">
                Professional History
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] dark:text-[#F5F2EB] font-normal">
                Development Experience &amp; Academic Tenure
              </h3>
            </div>
            <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
              Surat, Gujarat, India
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="editorial-card p-6 sm:p-7 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-3">
                  <span className="font-mono text-xs font-bold text-[#8C734B] dark:text-[#D9C8A5]">
                    {exp.period}
                  </span>
                  <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] uppercase tracking-wider">
                    {exp.location}
                  </span>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-base sm:text-lg text-[#171714] dark:text-[#F5F2EB]">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
                    {exp.organization}
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
                  {exp.summary}
                </p>

                <div className="pt-2 border-t border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] font-bold block">
                    Key Focus Areas:
                  </span>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="font-sans text-xs sm:text-sm text-[#3D3B35] dark:text-[#D4D0C5] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
