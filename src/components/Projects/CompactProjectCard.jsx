import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '../Icons';

export default function CompactProjectCard({ project }) {
  // Render genuine screenshot image with consistent 16:9 aspect ratio container
  const renderVisual = () => {
    if (project.id === 'orainfotech') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
          <img
            src="/orainfotech-preview.png"
            alt={`${project.title} - Official Corporate Website Redesign`}
            className="w-full h-full object-cover object-[center_top] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            width="1905"
            height="1007"
          />
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[10px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-xs">
            Live Corporate Portal
          </div>
        </div>
      );
    }

    if (project.id === 'dwarkadhish-car-rent') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#121c2e] via-[#1a263d] to-[#0f1728] group">
          <img
            src="/dwarkadhish-preview.png"
            alt={`${project.title} - Hyundai Venue Fleet Vehicle`}
            className="w-full h-full object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            width="1024"
            height="576"
          />
          {/* Top Status Badges */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[10px] font-mono text-[#D8B66A] font-semibold border border-[#D8B66A]/30 shadow-xs">
              Surat Fleet
            </span>
            <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[10px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-xs">
              Instant Booking
            </span>
          </div>
          {/* Subtle bottom rate bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
            <span className="text-[#D8B66A] font-bold">12h: ₹2,500</span>
            <span className="text-emerald-400 font-bold">24h: ₹3,500</span>
          </div>
        </div>
      );
    }

    if (project.id === 'food-ordering') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
          <img
            src="/food-del-preview.png"
            alt={`${project.title} - Online Food Ordering Web Application`}
            className="w-full h-full object-cover object-[center_center] transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            width="1366"
            height="802"
          />
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[10px] font-mono text-[#8AB4FF] font-semibold border border-white/10 shadow-xs">
            MERN Application
          </div>
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[10px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-xs">
            Dynamic State
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <article className="portfolio-card group flex flex-col justify-between overflow-hidden bg-white/90 dark:bg-[#1C2029]/90 backdrop-blur-md rounded-2xl border border-[#E5E5E0] dark:border-white/10 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-left h-full">
      {/* 16:9 Image / Visual Banner at the Top */}
      <div className="w-full border-b border-[#E5E5E0] dark:border-white/10 overflow-hidden shrink-0">
        {renderVisual()}
      </div>

      {/* Card Content Body - Flex Column for Strict Equal Height & Alignment */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3.5">
        <div className="space-y-2 flex-1">
          {/* Top Category and Index */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#4169E1]">
              {project.category}
            </span>
            <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 text-[#737373] dark:text-[#9CA3AF]">
              {project.index}
            </span>
          </div>

          {/* Project Title: Space Grotesk, weight 600 */}
          <h3 className="font-heading text-base sm:text-lg font-semibold text-[#171717] dark:text-[#F3F4F6] group-hover:text-[#4169E1] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Short Project Description strictly clamped to 3 lines */}
          <p className="text-xs sm:text-[13px] text-[#525252] dark:text-[#9CA3AF] leading-relaxed line-clamp-3 min-h-[3.75rem]">
            {project.summary}
          </p>

          {/* Compact Technology Badges with Consistent Gap */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-[#FAFAF8] dark:bg-[#161920] text-[#171717] dark:text-[#F3F4F6] border border-[#E5E5E0] dark:border-white/10 leading-normal"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded text-[#737373] dark:text-[#9CA3AF]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Links Bar strictly positioned at the card bottom */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#E5E5E0] dark:border-white/10 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="btn-secondary !py-1.5 !px-3 !text-xs !rounded-lg flex-1 justify-center"
            >
              <Github className="w-3.5 h-3.5 shrink-0" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="btn-primary !py-1.5 !px-3.5 !text-xs !rounded-lg flex-1 justify-center"
            >
              <span>{project.liveLabel || 'Live Demo'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
