import React from 'react';
import { portfolioData } from '../data/portfolio';
import CompactProjectCard from './Projects/CompactProjectCard';

export default function Projects() {
  const oraProject = portfolioData.featuredProject;
  // All three projects: Orainfotech (01), Dwarkadhish Car Rent (02), Food Ordering (03)
  const allProjects = [oraProject, ...portfolioData.projects].filter(Boolean);

  return (
    <section id="projects" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] dark:text-[#9CA3AF] leading-relaxed">
            Corporate development internship work alongside full-stack engineering and real-world business websites.
          </p>
        </div>

        {/* Compact Responsive Grid: 3-cols on Desktop, 2-cols on Tablet, 1-col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {allProjects.map((project) => (
            <CompactProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
