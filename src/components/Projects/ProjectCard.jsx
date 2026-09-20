import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Code } from 'lucide-react';
import ProjectPreviewGraphic from './ProjectPreviewGraphic';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative p-6 sm:p-9 rounded-3xl backdrop-blur-2xl transition-all duration-500 overflow-hidden border cursor-pointer ${
        isHovered
          ? 'bg-gradient-to-br from-[#0e172a] via-[#091020] to-[#0d162a] border-cyan-400/70 shadow-[0_20px_50px_rgba(6,182,212,0.2)] -translate-y-2'
          : 'bg-white/80 dark:bg-[#0c1220]/80 border-slate-200 dark:border-white/10 shadow-2xl'
      }`}
    >
      {/* Mouse Cursor Spotlight Reveal */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.14), transparent 80%)`
          }}
        />
      )}

      {/* Top Accent Gradient Border Line */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} 
      />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* PREVIEW IMAGE / GRAPHIC COLUMN */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full relative group/img`}>
          <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
            isHovered ? 'scale-[1.02] shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-cyan-400/30' : 'shadow-2xl'
          }`}>
            <ProjectPreviewGraphic projectId={project.id} />
          </div>
        </div>

        {/* DETAILS CONTENT COLUMN */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5 text-left`}>
          
          {/* Badge & Category */}
          <div className="flex items-center gap-3">
            <span className={`px-3.5 py-1 text-xs font-mono font-semibold rounded-full transition-all duration-300 ${
              isHovered
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-md shadow-cyan-500/20'
                : 'bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-cyan-400'
            }`}>
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Project 0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-2xl sm:text-3xl font-extrabold font-heading transition-colors duration-300 leading-snug ${
            isHovered ? 'text-cyan-300' : 'text-slate-900 dark:text-slate-100'
          }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-base leading-relaxed transition-colors duration-300 ${
            isHovered ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'
          }`}>
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all duration-300 ${
                  isHovered
                    ? 'bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features List with Micro-rotating Icons */}
          <div className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-white/10">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Key Features & Implementation Highlights:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {project.features.map((feature, fIdx) => (
                <div key={fIdx} className="group/feat flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                    isHovered ? 'text-cyan-400 rotate-12' : 'text-blue-600 dark:text-cyan-400'
                  }`} />
                  <span className={`transition-colors duration-300 ${
                    isHovered ? 'text-slate-200 font-medium' : ''
                  }`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
