import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { Github } from '../Icons';

export default function CompactProjectCard({ project, onOpenDetails }) {
  // Render genuine screenshot image with consistent 16:9 aspect ratio container
  const renderVisual = () => {
    if (project.id === 'flowdesk-ai') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group/img cursor-pointer" onClick={onOpenDetails}>
          <img
            src="/flowdesk-preview.png"
            alt={`${project.title} - FlowDesk AI Dashboard`}
            className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover/img:scale-108"
            loading="lazy"
            width="1920"
            height="1080"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-[#8AB4FF] font-semibold border border-white/10 shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] animate-pulse" />
            <span>CRM &amp; Ops Platform</span>
          </div>
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Multi-Tenant
          </div>
          {/* Bottom quick overlay hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
            <span className="text-[11.5px] font-mono text-white/95 font-medium flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#4169E1]" /> View Architecture Breakdown &amp; Features
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'orainfotech') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group/img cursor-pointer" onClick={onOpenDetails}>
          <img
            src="/orainfotech-preview.png"
            alt={`${project.title} - Official Corporate Website Redesign`}
            className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover/img:scale-108"
            loading="lazy"
            width="1905"
            height="1007"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Corporate Portal</span>
          </div>
          {/* Bottom quick overlay hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
            <span className="text-[11.5px] font-mono text-white/95 font-medium flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#4169E1]" /> Click for Architecture Breakdown
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'dwarkadhish-car-rent') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#121c2e] via-[#1a263d] to-[#0f1728] group/img cursor-pointer" onClick={onOpenDetails}>
          <img
            src="/dwarkadhish-preview.png"
            alt={`${project.title} - Hyundai Venue Fleet Vehicle`}
            className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover/img:scale-108"
            loading="lazy"
            width="1024"
            height="576"
          />
          {/* Top Status Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-[#D8B66A] font-semibold border border-[#D8B66A]/30 shadow-sm">
              Surat Fleet
            </span>
            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Direct Booking
            </span>
          </div>
          {/* Bottom rate bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 flex items-center justify-between text-[11px] font-mono text-white">
            <span className="text-[#D8B66A] font-bold">12h: ₹2,500</span>
            <span className="text-emerald-400 font-bold">24h: ₹3,500</span>
          </div>
        </div>
      );
    }

    if (project.id === 'food-ordering') {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group/img cursor-pointer" onClick={onOpenDetails}>
          <img
            src="/food-del-preview.png"
            alt={`${project.title} - Online Food Ordering Web Application`}
            className="w-full h-full object-cover object-[center_center] transition-transform duration-700 ease-out group-hover/img:scale-108"
            loading="lazy"
            width="1366"
            height="802"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-[#8AB4FF] font-semibold border border-white/10 shadow-sm">
            MERN Full-Stack
          </div>
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10.5px] font-mono text-emerald-400 font-semibold border border-white/10 shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Cart State
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
            <span className="text-[11.5px] font-mono text-white/95 font-medium flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#4169E1]" /> Inspect Database & API Pipeline
            </span>
          </div>
        </div>
      );
    }

    return null;
  };

  // Distinct styling & border glow per project
  const getCardHoverAccent = () => {
    if (project.id === 'flowdesk-ai') return 'hover:border-[#6366F1] hover:shadow-[0_12px_32px_-10px_rgba(99,102,241,0.25)]';
    if (project.id === 'orainfotech') return 'hover:border-[#4169E1] hover:shadow-[0_12px_32px_-10px_rgba(65,105,225,0.2)]';
    if (project.id === 'dwarkadhish-car-rent') return 'hover:border-[#D8B66A] hover:shadow-[0_12px_32px_-10px_rgba(216,182,106,0.25)]';
    return 'hover:border-[#10B981] hover:shadow-[0_12px_32px_-10px_rgba(16,185,129,0.2)]';
  };

  return (
    <article className={`portfolio-card group flex flex-col justify-between overflow-hidden bg-white rounded-2xl border border-[#E5E5E0] shadow-subtle hover:-translate-y-1.5 transition-all duration-300 text-left h-full ${getCardHoverAccent()}`}>
      {/* 16:9 Image / Visual Banner at the Top */}
      <div className="w-full border-b border-[#E5E5E0] overflow-hidden shrink-0">
        {renderVisual()}
      </div>

      {/* Card Content Body - Flex Column for Strict Equal Height & Alignment */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2.5 flex-1">
          {/* Top Category, Index and Details Trigger */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4169E1]">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5">
              {onOpenDetails && (
                <button
                  type="button"
                  onClick={onOpenDetails}
                  className="text-[11px] font-mono text-[#737373] hover:text-[#4169E1] transition-colors flex items-center gap-1 px-2 py-0.5 rounded-md hover:bg-[#EEF2FF] cursor-pointer"
                  title="View detailed overview"
                >
                  <Info className="w-3.5 h-3.5 text-[#4169E1]" />
                  <span className="font-semibold">Overview</span>
                </button>
              )}
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAFAF8] border border-[#E5E5E0] text-[#737373] font-semibold">
                {project.index}
              </span>
            </div>
          </div>

          {/* Project Title: Space Grotesk, weight 600 */}
          <h3 
            className="font-heading text-lg sm:text-xl font-bold text-[#171717] group-hover:text-[#4169E1] transition-colors line-clamp-1 cursor-pointer"
            onClick={onOpenDetails}
          >
            {project.title}
          </h3>

          {/* Short Project Description strictly clamped to 3 lines */}
          <p className="text-xs sm:text-[13.5px] text-[#525252] leading-relaxed line-clamp-3 min-h-[3.8rem]">
            {project.summary}
          </p>

          {/* Compact Technology Badges with Consistent Gap */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAFAF8] text-[#171717] border border-[#E5E5E0] font-medium leading-normal shadow-2xs"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#4169E1] font-semibold">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Links Bar strictly positioned at the card bottom */}
        <div className="flex items-center gap-2.5 pt-3.5 border-t border-[#E5E5E0] shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="btn-secondary !py-2 !px-3.5 !text-xs !rounded-lg flex-1 justify-center hover:scale-[1.02] active:scale-[0.98] font-semibold shadow-2xs"
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
              className="btn-primary !py-2 !px-3.5 !text-xs !rounded-lg flex-1 justify-center hover:scale-[1.02] active:scale-[0.98] font-semibold shadow-2xs"
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
