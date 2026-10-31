import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { Github } from '../Icons';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, isFeatured = false }) {
  return (
    <article 
      className={`portfolio-card group p-6 sm:p-8 lg:p-9 bg-white dark:bg-[#1C2029] shadow-premium hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden text-left ${
        isFeatured ? 'border-[#4169E1]/30 ring-1 ring-[#4169E1]/10' : ''
      }`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E0] dark:border-white/10 pb-4 mb-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#4169E1] px-2.5 py-0.5 rounded-md bg-[#E9E5FF] dark:bg-[#4169E1]/20">
            {project.index}
          </span>
          <span className="text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold">
            {project.category}
          </span>
          {isFeatured && (
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#E9E5FF] text-[#4169E1] dark:bg-[#4169E1]/20 dark:text-[#5B82F6]">
              Featured Production Project
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="btn-secondary !py-2 !px-3.5 !text-xs !rounded-lg"
            >
              <Github className="w-3.5 h-3.5 shrink-0" />
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="btn-primary !py-2 !px-4 !text-xs !rounded-lg"
            >
              <span>{project.liveLabel || 'Live Demo'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          )}
        </div>
      </div>

      {/* Main Grid: Visual Demo / Architecture & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Visual Architectural / Screenshot Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="rounded-xl overflow-hidden border border-[#E5E5E0] dark:border-white/10 shadow-sm bg-[#F2F3F0] dark:bg-[#161920]">
            <ProjectVisual projectId={project.id} />
          </div>
          
          {/* Architecture Notes Box */}
          {project.caseStudyNotes && (
            <div className="p-4 rounded-xl bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 space-y-1.5 text-left font-mono text-xs">
              <div className="text-[11px] text-[#4169E1] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>{project.caseStudyNotes.headline || 'System Topology & Architecture'}</span>
              </div>
              <div className="text-[#171717] dark:text-[#F3F4F6] font-sans font-medium text-xs sm:text-sm">
                {project.caseStudyNotes.architecture}
              </div>
              <div className="text-[#525252] dark:text-[#9CA3AF] text-xs pt-1 font-sans">
                <strong className="text-[#171717] dark:text-[#F3F4F6]">Implementation:</strong> {project.caseStudyNotes.technicalSolution}
              </div>
            </div>
          )}
        </div>

        {/* Narrative & Specification Column */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-[#F3F4F6] leading-tight mb-2.5">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#525252] dark:text-[#9CA3AF] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Yash Tank's Contribution */}
          <div className="p-4 rounded-xl bg-[#F2F3F0]/60 dark:bg-[#161920]/60 border border-[#E5E5E0] dark:border-white/10 space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4169E1] font-bold block">
              My Engineering Contribution:
            </span>
            <p className="text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold block">
              Core Capabilities &amp; Features:
            </span>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#525252] dark:text-[#9CA3AF] leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#4169E1] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#737373] dark:text-[#9CA3AF] font-bold block mb-2">
              Technologies Used:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-md bg-[#FAFAF8] dark:bg-[#161920] text-[#171717] dark:text-[#F3F4F6] border border-[#E5E5E0] dark:border-white/10 font-medium hover:border-[#4169E1]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
