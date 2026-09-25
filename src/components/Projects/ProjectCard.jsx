import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from '../Icons';
import ProjectPreviewGraphic from './ProjectPreviewGraphic';

export default function ProjectCard({ project, index, isFeatured = true }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Derive feature highlight boxes from existing project features
  const featureBox1 = {
    title: project.features[0]?.split(' ')[0] + ' ' + (project.features[0]?.split(' ')[1] || 'Feature'),
    subtitle: project.features[0]?.split('&')[0] || project.features[0] || 'State management'
  };

  const featureBox2 = {
    title: project.features[1]?.split(' ')[0] + ' ' + (project.features[1]?.split(' ')[1] || 'Engine'),
    subtitle: project.features[1]?.split('&')[0] || project.features[1] || 'Real-time updates'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.008 }}
      viewport={{ once: true }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 25,
        opacity: { duration: 0.4, delay: index * 0.08 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative p-4 sm:p-7 lg:p-8 rounded-3xl bg-white/80 dark:bg-[#090d18] hover:bg-slate-50 dark:hover:bg-[#0b1121] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl transition-colors duration-500 overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(56,189,248,0.16)] flex flex-col justify-between`}
    >
      {/* Soft spotlight radial glow on mouse movement */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.09), transparent 80%)`
          }}
        />
      )}

      {/* Smooth top gradient accent border line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
      />

      <div className={isFeatured ? "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10" : "flex flex-col gap-6 relative z-10 h-full justify-between"}>
        
        {/* GRAPHIC PREVIEW (FIRST ON MOBILE FOR FEATURED PROJECT) */}
        <div className={isFeatured ? "lg:col-span-6 w-full relative order-1 lg:order-2" : "w-full relative mt-2"}>
          <div className="transition-transform duration-500 group-hover:scale-[1.015]">
            <ProjectPreviewGraphic projectId={project.id} />
          </div>
        </div>

        {/* DETAILS COLUMN */}
        <div className={isFeatured ? "lg:col-span-6 space-y-4 sm:space-y-5 text-left order-2 lg:order-1" : "space-y-4 text-left"}>
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase rounded-md bg-slate-100 dark:bg-[#121927] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 tracking-wider">
              {isFeatured ? 'PRIMARY FEATURED PROJECT' : 'FEATURED MERN APP'}
            </span>
            <span className="px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase rounded-md bg-slate-100 dark:bg-[#121927] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 tracking-wider">
              {project.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 className={isFeatured ? "text-xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300" : "text-lg sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300"}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-normal">
            {project.description}
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e1524] group-hover:bg-slate-100 dark:group-hover:bg-[#111a2d] border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/15 space-y-0.5 transition-colors duration-300">
              <div className="text-blue-600 dark:text-cyan-400 font-mono text-xs font-semibold break-words">
                {featureBox1.title}
              </div>
              <div className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 text-xs font-sans break-words transition-colors">
                {featureBox1.subtitle}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0e1524] group-hover:bg-slate-100 dark:group-hover:bg-[#111a2d] border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/15 space-y-0.5 transition-colors duration-300">
              <div className="text-blue-600 dark:text-cyan-400 font-mono text-xs font-semibold break-words">
                {featureBox2.title}
              </div>
              <div className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 text-xs font-sans break-words transition-colors">
                {featureBox2.subtitle}
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-[#121a29] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 transition-colors duration-300 group-hover:border-blue-500/40 dark:group-hover:border-cyan-500/30 group-hover:text-slate-900 dark:group-hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons: GitHub Source Code & Live Demo */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-semibold rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-all shadow-sm flex-1 sm:flex-initial text-center"
              >
                <Github className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 border border-blue-400/30 transition-all shadow-sm flex-1 sm:flex-initial text-center"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
