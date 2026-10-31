import React from 'react';
import { 
  Server, 
  Database, 
  Wrench, 
  Atom
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      badge: 'Client & UI',
      icon: Atom,
      items: portfolioData.skills.frontend,
    },
    {
      id: 'backend',
      title: 'Backend Development',
      badge: 'Server & Logic',
      icon: Server,
      items: portfolioData.skills.backend,
    },
    {
      id: 'database',
      title: 'Database Systems',
      badge: 'Data Persistence',
      icon: Database,
      items: portfolioData.skills.database,
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      badge: 'Workflow & Tooling',
      icon: Wrench,
      items: portfolioData.skills.tools,
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">TECH STACK</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
            Technologies, frameworks, and developer tooling I utilize to build and deploy production-ready full-stack applications.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.id}
                className="portfolio-card p-6 sm:p-7 relative overflow-hidden space-y-5 bg-white dark:bg-[#1C2029] shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E9E5FF] dark:bg-[#4169E1]/20 text-[#4169E1] flex items-center justify-center">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#171717] dark:text-[#F3F4F6]">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-mono text-[#737373] dark:text-[#9CA3AF]">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#4169E1] font-semibold bg-[#FAFAF8] dark:bg-[#161920] px-2.5 py-1 rounded-md border border-[#E5E5E0] dark:border-white/10">
                    {cat.items.length} Techs
                  </span>
                </div>

                {/* Tech Cards List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 hover:border-[#4169E1]/50 hover:bg-white dark:hover:bg-[#1E2330] hover:shadow-xs transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] group-hover:text-[#4169E1] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-[#737373] dark:text-[#9CA3AF] line-clamp-1">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
