import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import CompactProjectCard from './Projects/CompactProjectCard';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const oraProject = portfolioData.featuredProject;
  // All portfolio projects
  const allProjects = [oraProject, ...portfolioData.projects].filter(Boolean);

  const [activeModalProject, setActiveModalProject] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!activeModalProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

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
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 pt-[70px] sm:pt-20 md:pt-24 pb-4 sm:pb-6 bg-black/65 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="portfolio-card w-full max-w-[800px] max-h-[calc(100dvh-85px)] sm:max-h-[calc(100dvh-110px)] md:max-h-[calc(100dvh-130px)] flex flex-col bg-white overflow-hidden text-left shadow-2xl relative border border-[#E5E5E0] rounded-xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header with Title and Close Button */}
            <div className="p-3.5 sm:p-5 lg:p-6 border-b border-[#E5E5E0] bg-white/95 backdrop-blur-md sticky top-0 z-20 flex items-start justify-between gap-3 sm:gap-4 shrink-0">
              <div className="space-y-1 sm:space-y-1.5 min-w-0 flex-1 pr-2">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-[#4169E1] px-2 py-0.5 rounded-md bg-[#EEF2FF]">
                    {activeModalProject.index}
                  </span>
                  <span className="text-[10.5px] sm:text-xs uppercase tracking-wider text-[#737373] font-bold">
                    {activeModalProject.category}
                  </span>
                </div>
                <h3 className="font-heading text-base sm:text-xl lg:text-2xl font-bold text-[#171717] break-words leading-snug">
                  {activeModalProject.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="shrink-0 p-2 sm:p-2.5 rounded-xl text-[#737373] hover:text-[#171717] bg-[#F2F3F0] hover:bg-[#E5E5E0] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 overscroll-contain flex-1">
              {/* Responsive Project Screenshot / Preview with Object-Contain Protection */}
              {activeModalProject.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg sm:rounded-xl border border-[#E5E5E0] bg-[#0F172A] shadow-sm flex items-center justify-center">
                  <img
                    src={activeModalProject.image}
                    alt={`${activeModalProject.title} preview`}
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Project Summary */}
              <div className="space-y-1 sm:space-y-1.5">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#737373] font-bold block">
                  Project Overview:
                </span>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* System Architecture & Technical Solution (if present) */}
              {activeModalProject.caseStudyNotes && (
                <div className="p-3 sm:p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] space-y-2">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#4169E1] font-bold block">
                    {activeModalProject.caseStudyNotes.headline || 'System Architecture & Implementation:'}
                  </span>
                  {activeModalProject.caseStudyNotes.architecture && (
                    <div className="font-mono text-[11px] sm:text-xs text-[#171717] bg-white p-2.5 rounded-lg border border-[#E5E5E0] break-words">
                      {activeModalProject.caseStudyNotes.architecture}
                    </div>
                  )}
                  {activeModalProject.caseStudyNotes.technicalSolution && (
                    <p className="text-xs text-[#525252] leading-relaxed pt-1">
                      <strong className="text-[#171717] font-semibold">Solution: </strong>
                      {activeModalProject.caseStudyNotes.technicalSolution}
                    </p>
                  )}
                </div>
              )}

              {/* Engineering Scope & Contribution */}
              {activeModalProject.contribution && (
                <div className="p-3 sm:p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] space-y-1 sm:space-y-1.5">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#4169E1] font-bold block">
                    Engineering Scope &amp; Contribution:
                  </span>
                  <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                    {activeModalProject.contribution}
                  </p>
                </div>
              )}

              {/* Key Capabilities & Features */}
              {activeModalProject.features && (
                <div className="space-y-2 sm:space-y-2.5">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#737373] font-bold block">
                    Key Capabilities &amp; Features:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#525252] bg-[#FAFAF8] p-2 sm:p-2.5 rounded-lg border border-[#E5E5E0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4169E1] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#737373] font-bold block">
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
            </div>

            {/* Sticky Action Footer with Safe-Area Padding */}
            <div className="p-3 sm:p-4 lg:p-5 border-t border-[#E5E5E0] bg-[#FAFAF8] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary min-h-[44px] !py-2.5 !px-4 !text-xs flex-1 justify-center rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
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
                  className="btn-primary min-h-[44px] !py-2.5 !px-5 !text-xs flex-1 justify-center rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                >
                  <span>{activeModalProject.liveLabel || 'Open Live Website'}</span>
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
