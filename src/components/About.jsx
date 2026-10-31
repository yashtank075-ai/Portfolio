import React from 'react';
import { GraduationCap, Code2, Database, Layout, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const PILLARS = [
  {
    icon: Layout,
    title: 'Modular React & Next.js',
    highlight: 'Component Lifecycle & SPA/SSR',
    description: 'Clean, decomposed components with predictable hooks, custom state utilities, and zero layout thrashing.',
    accent: 'border-l-4 border-l-[#4169E1] hover:bg-[#EEF2FF]/40'
  },
  {
    icon: Code2,
    title: 'RESTful API Engineering',
    highlight: 'Node.js, Express & Route Security',
    description: 'Robust controllers with structured request validation, defensive middleware, and standardized JSON responses.',
    accent: 'border-l-4 border-l-[#8B5CF6] hover:bg-[#E9E5FF]/40'
  },
  {
    icon: Database,
    title: 'Database Architecture',
    highlight: 'MongoDB & PostgreSQL Modeling',
    description: 'Data schemas with indexed queries, transactional integrity, embedded relations, and aggregation pipelines.',
    accent: 'border-l-4 border-l-[#10B981] hover:bg-[#ECFDF5]/50'
  },
  {
    icon: ShieldCheck,
    title: 'Responsive & Accessible Polish',
    highlight: 'Mobile-First & Fluid Viewports',
    description: 'Disciplined CSS Grid/Flexbox layouts verified across 320px–1920px viewports with WCAG accessibility standards.',
    accent: 'border-l-4 border-l-[#F59E0B] hover:bg-[#FFFBEB]/50'
  }
];

export default function About() {
  const { degree, institution, location, status } = portfolioData.education;

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/40 border-y border-[#E5E5E0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
            Engineering with discipline &amp; craftsmanship.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Bridging frontend responsiveness with scalable backend architectures and verified database schemas.
          </p>
        </div>

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Narrative Content & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#525252] leading-relaxed">
              <p>
                Hello, I'm <strong className="font-semibold text-[#171717]">{portfolioData.personal.name}</strong>, a <span className="text-[#4169E1] font-semibold">Junior Full Stack Developer</span> based in {portfolioData.personal.location}. I construct full-stack web applications using the MERN stack with modern Next.js and Tailwind CSS tooling.
              </p>
              <p>
                Currently interning at <strong className="font-semibold text-[#171717]">Ora Infotech</strong>, I have contributed directly to backend workflow orchestration, customer booking APIs, and corporate website redesign initiatives. My approach focuses on writing legible, maintainable code rather than bloated shortcuts.
              </p>
              <p>
                My foundation stems from a formal <strong className="font-semibold text-[#171717]">{degree}</strong>. This provides rigorous training in computer science essentials, algorithm design, relational (PostgreSQL) and document (MongoDB) database systems, and object-oriented architectures.
              </p>
            </div>

            {/* Academic Credential Card */}
            <div className="portfolio-card p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-subtle hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 group border border-[#E5E5E0]">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-[#E9E5FF] text-[#4169E1] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-[#171717] truncate">
                    {degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] truncate">
                    {institution} • {location}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 shrink-0 self-start sm:self-auto">
                {status}
              </span>
            </div>
          </div>

          {/* Right Column: 4 Distinct Pillars */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#4169E1] font-bold">
                Core Engineering Capabilities
              </h3>
              <span className="text-[11px] font-mono text-[#737373]">
                4 Pillars
              </span>
            </div>

            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-4.5 rounded-xl bg-white border border-[#E5E5E0] shadow-2xs hover:shadow-subtle hover:-translate-y-0.5 transition-all duration-300 ${pillar.accent}`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#4169E1]" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-[#171717]">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-[11px] font-mono font-medium text-[#4169E1]">
                        {pillar.highlight}
                      </p>
                      <p className="text-xs text-[#525252] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
