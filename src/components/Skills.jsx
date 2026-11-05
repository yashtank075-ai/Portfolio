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
      title: 'Frontend Architecture',
      badge: 'Client & UI',
      icon: Atom,
      items: portfolioData.skills.frontend,
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      badge: 'APIs & Logic',
      icon: Server,
      items: portfolioData.skills.backend,
    },
    {
      id: 'database',
      title: 'Database Systems',
      badge: 'Data Modeling',
      icon: Database,
      items: portfolioData.skills.database,
    },
    {
      id: 'tools',
      title: 'Developer Tooling',
      badge: 'Workflow & Tools',
      icon: Wrench,
      items: portfolioData.skills.tools,
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
            Core Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Practical technologies applied across real-world web development, backend APIs, and database-driven applications.
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                className="portfolio-card group p-5 sm:p-6 lg:p-7 bg-white flex flex-col justify-between shadow-2xs hover:border-[#171717] hover:shadow-sm transition-all duration-300 relative border border-[#E5E5E0] rounded-2xl h-full"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] text-[#171717] flex items-center justify-center shrink-0">
                        <CategoryIcon className="w-4 h-4 text-[#4169E1]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-[#171717] truncate">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-[#737373] block">
                          {category.items.length} Technologies
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#FAFAF8] border border-[#E5E5E0] text-[#737373] shrink-0">
                      {category.badge}
                    </span>
                  </div>

                  {/* Individual Skills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] space-y-0.5"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-[#171717] block">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#737373] block leading-snug">
                          {skill.detail}
                        </span>
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
