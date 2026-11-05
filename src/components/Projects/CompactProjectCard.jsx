import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { Github } from '../Icons';

// Individual fine-tuned object positions ensuring prime UI hero content is visible
const IMAGE_POSITIONS = {
  'dwarkadhish-car-rent': 'object-[center_35%]',
  'reelflow': 'object-[center_top]',
  'flowdesk-ai': 'object-[center_top]',
  'orainfotech': 'object-[center_top]',
  'milliard-agarbatti': 'object-[center_center]',
  'food-ordering': 'object-[center_top]',
};

export default function CompactProjectCard({ project, onOpenDetails }) {
  const objectPosition = IMAGE_POSITIONS[project.id] || 'object-[center_top]';

  // Render screenshot with consistent 16:9 aspect ratio and fine-tuned object position
  const renderVisual = () => {
    return (
      <div 
        className="relative aspect-video w-full overflow-hidden bg-[#0F172A] group/img cursor-pointer" 
        onClick={onOpenDetails}
        tabIndex={0}
        role="button"
        aria-label={`Open details for ${project.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails();
          }
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={`w-full h-full object-cover ${objectPosition} transition-transform duration-500 ease-out group-hover/img:scale-[1.03] group-focus/img:scale-[1.03]`}
          loading="lazy"
        />

        {/* Clean, subtle dark gradient at top to ensure label contrast and readability */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none" />

        {/* Improved high-contrast, professional category label over screenshot */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#18181B]/85 backdrop-blur-md text-[11.5px] font-mono text-zinc-100 font-medium border border-white/15 shadow-sm flex items-center gap-1.5 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
          <span className="tracking-wide">{project.category}</span>
        </div>

        {/* Restrained hover and keyboard focus hint banner: visible strictly on hover/focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 group-focus/img:opacity-100 transition-opacity duration-200 flex items-end p-3.5 pointer-events-none">
          <span className="text-xs font-mono text-white font-medium flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#3B82F6]" /> Click to view details &amp; architecture
          </span>
        </div>
      </div>
    );
  };

  return (
    <article className="portfolio-card group flex flex-col justify-between overflow-hidden bg-white rounded-2xl border border-[#E5E5E0] shadow-2xs hover:border-[#171717] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left h-full">
      {/* 16:9 Image / Visual Banner at the Top */}
      <div className="w-full border-b border-[#E5E5E0] overflow-hidden shrink-0">
        {renderVisual()}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3 flex-1">
          {/* Top Index & Details Quick Trigger */}
          <div className="flex items-center justify-between gap-2 border-b border-[#E5E5E0]/70 pb-2.5">
            <span className="font-mono text-xs font-bold text-[#4169E1] px-2 py-0.5 rounded bg-[#EEF2FF]">
              Project {project.index}
            </span>
            {onOpenDetails && (
              <button
                type="button"
                onClick={onOpenDetails}
                className="text-[11px] font-mono text-[#737373] hover:text-[#4169E1] transition-colors flex items-center gap-1 px-2 py-0.5 rounded-md hover:bg-[#EEF2FF] cursor-pointer"
                title="View full project details"
              >
                <Info className="w-3.5 h-3.5 text-[#4169E1]" />
                <span className="font-semibold">Case Study</span>
              </button>
            )}
          </div>

          {/* Project Title: Space Grotesk, natural 2-line wrap without artificial truncation ellipses */}
          <h3 
            className="font-heading text-lg sm:text-[1.28rem] font-bold text-[#171717] group-hover:text-[#4169E1] transition-colors line-clamp-2 cursor-pointer leading-snug min-h-[2.8rem] flex items-start"
            onClick={onOpenDetails}
          >
            {project.title}
          </h3>

          {/* Project Description: Clean naturally ending sentence with no mid-thought cutoffs */}
          <p className="text-[14px] sm:text-[14.5px] text-[#525252] leading-[1.65] min-h-[4.9rem]">
            {project.cardSummary || project.summary}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAFAF8] text-[#171717] border border-[#E5E5E0] font-medium leading-normal"
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

        {/* Action Links Bar: Strictly positioned and verified labels */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-[#E5E5E0] shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="btn-secondary !py-2.5 !px-3.5 !text-xs !rounded-xl flex-1 justify-center font-semibold"
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
              aria-label={`Open ${project.title} live website`}
              className="btn-primary !py-2.5 !px-3.5 !text-xs !rounded-xl flex-1 justify-center font-semibold"
            >
              <span>Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
