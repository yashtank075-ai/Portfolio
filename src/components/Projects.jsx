import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import CompactProjectCard from './Projects/CompactProjectCard';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const oraProject = portfolioData.featuredProject;
  // All portfolio projects
  const allProjects = [oraProject, ...portfolioData.projects].filter(Boolean);

  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Corporate development internship work alongside full-stack engineering and real-world business websites.
          </p>
        </div>

        {/* Compact Responsive Grid: 3-cols on Desktop/Large screens, 2-cols on Tablet, 1-col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {allProjects.map((project) => (
            <CompactProjectCard 
              key={project.id} 
              project={project}
              onOpenDetails={() => setActiveModalProject(project)}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="portfolio-card max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white p-5 sm:p-8 space-y-5 sm:space-y-6 text-left shadow-2xl relative border border-[#E5E5E0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-[#737373] hover:text-[#171717] bg-[#F2F3F0] hover:bg-[#E5E5E0] transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#4169E1] px-2.5 py-0.5 rounded-md bg-[#EEF2FF]">
                  {activeModalProject.index}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#737373] font-bold">
                  {activeModalProject.category}
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#171717] break-words">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Project Summary */}
            <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
              {activeModalProject.summary}
            </p>

            {/* Engineering Contribution */}
            {activeModalProject.contribution && (
              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#4169E1] font-bold block">
                  Engineering Scope &amp; Contribution:
                </span>
                <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                  {activeModalProject.contribution}
                </p>
              </div>
            )}

            {/* Key Capabilities & Features */}
            {activeModalProject.features && (
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#737373] font-bold block">
                  Key Capabilities:
                </span>
                <ul className="space-y-2">
                  {activeModalProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#525252]">
                      <CheckCircle2 className="w-4 h-4 text-[#4169E1] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#737373] font-bold block">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {activeModalProject.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#FAFAF8] text-[#171717] border border-[#E5E5E0] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-[#E5E5E0]">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary min-h-[44px] !py-2.5 !px-4 !text-xs flex-1 justify-center rounded-xl font-semibold"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>View Repository</span>
                </a>
              )}
              {activeModalProject.liveUrl && activeModalProject.liveUrl !== '#' && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary min-h-[44px] !py-2.5 !px-5 !text-xs flex-1 justify-center rounded-xl font-semibold"
                >
                  <span>{activeModalProject.liveLabel || 'Open Live Demo'}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
