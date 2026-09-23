import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectPreviewGraphic from './ProjectPreviewGraphic';

export default function ProjectCard({ project, index }) {
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
      className="group relative p-6 sm:p-8 rounded-3xl bg-[#090d18] hover:bg-[#0b1121] border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-colors duration-500 overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(56,189,248,0.16)]"
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* LEFT COLUMN: PROJECT DETAILS */}
        <div className="lg:col-span-6 space-y-5 text-left">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 font-mono text-[11px] font-semibold uppercase rounded-md bg-[#121927] border border-white/10 text-slate-300 tracking-wider">
              FULL-STACK MERN
            </span>
            <span className="px-3 py-1 font-mono text-[11px] font-semibold uppercase rounded-md bg-[#121927] border border-white/10 text-slate-300 tracking-wider">
              {project.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal max-w-xl">
            {project.description}
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-[#0e1524] group-hover:bg-[#111a2d] border border-white/10 group-hover:border-white/15 space-y-0.5 transition-colors duration-300">
              <div className="text-cyan-400 font-mono text-xs font-semibold truncate">
                {featureBox1.title}
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 text-xs font-sans truncate transition-colors">
                {featureBox1.subtitle}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0e1524] group-hover:bg-[#111a2d] border border-white/10 group-hover:border-white/15 space-y-0.5 transition-colors duration-300">
              <div className="text-cyan-400 font-mono text-xs font-semibold truncate">
                {featureBox2.title}
              </div>
              <div className="text-slate-400 group-hover:text-slate-300 text-xs font-sans truncate transition-colors">
                {featureBox2.subtitle}
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-[#121a29] border border-white/10 text-slate-200 transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:text-white"
              >
                {tech}
              </span>
            ))}
            <span className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-[#121a29] border border-white/10 text-slate-200 transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:text-white">
              Tailwind CSS
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN: CONSOLE PREVIEW GRAPHIC */}
        <div className="lg:col-span-6 w-full relative">
          <div className="transition-transform duration-500 group-hover:scale-[1.015]">
            <ProjectPreviewGraphic projectId={project.id} />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
