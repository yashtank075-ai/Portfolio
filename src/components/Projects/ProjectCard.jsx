import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '../Icons';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, isFeatured = false }) {
  return (
    <article 
      className={`editorial-card group relative p-5 sm:p-7 lg:p-8 transition-all duration-300 ${
        isFeatured ? 'bg-[#FAF8F3] dark:bg-[#151512]' : 'bg-[#FAF8F3] dark:bg-[#151512]'
      }`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#8C734B] dark:text-[#D9C8A5]">
            {project.index} //
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#3D3B35] dark:text-[#D4D0C5] font-semibold">
            {project.category}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs font-semibold text-[#171714] dark:text-[#F5F2EB] bg-[#EFECE3] dark:bg-[#1E1E1A] hover:bg-[#E8E4DB] dark:hover:bg-[#262621] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] transition-colors min-h-[40px]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Source</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website`}
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold text-[#FAF8F3] bg-[#171714] dark:bg-[#F5F2EB] dark:text-[#171714] hover:bg-[#8C734B] dark:hover:bg-[#D9C8A5] transition-colors min-h-[40px]"
            >
              <span>{project.liveLabel || 'Explore Project'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Main Grid: Visual Specimen & Editorial Narrative */}
      <div className={isFeatured ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" : "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"}>
        
        {/* Visual Architectural Schematics */}
        <div className={isFeatured ? "lg:col-span-7 order-1" : "lg:col-span-6 order-1"}>
          <ProjectVisual projectId={project.id} />
          
          {/* Architecture Notes Box */}
          {project.caseStudyNotes && (
            <div className="mt-4 p-4 bg-[#EFECE3]/80 dark:bg-[#1A1A16]/90 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] space-y-2 text-left font-mono text-xs sm:text-sm">
              <div className="text-xs text-[#8C734B] dark:text-[#D9C8A5] uppercase font-bold tracking-wider">
                {project.caseStudyNotes.headline || 'System Topology & Architecture'}
              </div>
              <div className="text-[#171714] dark:text-[#F5F2EB] font-sans font-medium text-xs sm:text-sm">
                {project.caseStudyNotes.architecture}
              </div>
              <div className="text-[#3D3B35] dark:text-[#D4D0C5] text-xs sm:text-sm pt-1">
                <strong className="text-[#171714] dark:text-[#F5F2EB]">Key Implementation:</strong> {project.caseStudyNotes.technicalSolution}
              </div>
            </div>
          )}
        </div>

        {/* Narrative & Specification Column */}
        <div className={isFeatured ? "lg:col-span-5 space-y-5 text-left order-2" : "lg:col-span-6 space-y-5 text-left order-2"}>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#171714] dark:text-[#F5F2EB] leading-tight mb-2.5">
              {project.title}
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Yash Tank's Contribution */}
          <div className="space-y-1.5 py-3 border-y border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8C734B] dark:text-[#D9C8A5] font-bold block">
              Engineering Contribution
            </span>
            <p className="font-sans text-sm sm:text-base text-[#171714] dark:text-[#F5F2EB] leading-relaxed font-normal">
              {project.contribution}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D3B35] dark:text-[#D4D0C5] font-bold block">
              Core Capabilities &amp; Workflows
            </span>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-sans text-sm sm:text-base text-[#3D3B35] dark:text-[#D4D0C5] leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5] mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D3B35] dark:text-[#D4D0C5] font-bold block mb-2.5">
              Verified Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#171714] dark:text-[#F5F2EB] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] font-medium"
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
