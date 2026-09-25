import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import ProjectCard from './Projects/ProjectCard';

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend & API' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fullstack') return project.type === 'fullstack';
    if (activeFilter === 'frontend') return project.stack.includes('React.js') || project.type === 'fullstack';
    return true;
  });

  const featuredProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

  return (
    <section id="projects" className="pt-12 pb-10 lg:pt-16 lg:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Featured <span className="text-blue-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-300">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            A selection of authentic applications I've built while working with modern MERN web technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-2.5 mb-10 flex-wrap">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-[#0e1524] border border-slate-200 dark:border-white/10 shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-blue-600 border border-blue-400/40 rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Layout: 1 Large Featured + 2 Secondary Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {/* 1 Large Primary Featured Project */}
            {featuredProject && (
              <ProjectCard key={featuredProject.id} project={featuredProject} index={0} isFeatured={true} />
            )}

            {/* 2 Secondary Projects Side-by-Side */}
            {secondaryProjects.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                {secondaryProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx + 1} isFeatured={false} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
