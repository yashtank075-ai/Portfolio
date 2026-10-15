import React from 'react';
import { portfolioData } from '../data/portfolio';
import ProjectCard from './Projects/ProjectCard';

export default function Projects() {
  const oraProject = portfolioData.featuredProject;
  const foodProject = portfolioData.projects.find((p) => p.id === 'food-ordering');
  const visibleProjects = [oraProject, foodProject].filter(Boolean);

  return (
    <section id="work" className="py-12 sm:py-14 lg:py-16 relative border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-6 mb-8 sm:mb-10">
          <div className="space-y-3 text-left">
            <div className="editorial-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5]" />
              <span>01 // Selected Work</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171714] dark:text-[#F5F2EB] tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#5A574F] dark:text-[#A8A49A] max-w-md text-left leading-relaxed">
            Corporate web development and interface engineering from my full-stack internship alongside end-to-end MERN application architecture.
          </p>
        </div>

        {/* Selected Project Rhythms */}
        <div className="space-y-8 sm:space-y-10">
          {visibleProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isFeatured={idx === 0} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
