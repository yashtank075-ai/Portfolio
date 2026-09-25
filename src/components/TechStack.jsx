import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Database, Cpu, Atom, Code2, Sparkles, GitBranch, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const stackIcons = [Atom, Cpu, Layers, Database];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = React.useState(null);

  const marqueeItems = [
    { name: "React.js", category: "Client Interface", color: "from-cyan-500 to-blue-500", icon: Atom },
    { name: "Node.js", category: "Runtime Engine", color: "from-emerald-500 to-green-600", icon: Cpu },
    { name: "Express.js", category: "REST Framework", color: "from-purple-500 to-indigo-600", icon: Layers },
    { name: "MongoDB", category: "NoSQL Database", color: "from-teal-500 to-emerald-600", icon: Database },
    { name: "JavaScript (ES6+)", category: "Language Core", color: "from-amber-400 to-yellow-500", icon: Code2 },
    { name: "Tailwind CSS", category: "Design System", color: "from-cyan-400 to-blue-500", icon: Sparkles },
    { name: "Git & GitHub", category: "Version Control", color: "from-slate-700 to-slate-900", icon: GitBranch },
    { name: "REST APIs", category: "Protocol Architecture", color: "from-blue-600 to-indigo-600", icon: Network }
  ];

  // Duplicate for seamless infinite marquee loop
  const doubleItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-12 relative overflow-hidden w-full max-w-full bg-white/70 dark:bg-[#070c18] border-y border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          INFINITE MERN PIPELINE • HOVER TO PAUSE &amp; EXAMINE
        </span>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative w-full max-w-full overflow-hidden">
        {/* Gradient Fades on Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-white dark:from-[#070c18] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-white dark:from-[#070c18] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {doubleItems.map((tech, idx) => {
            const Icon = tech.icon || Atom;
            const isHovered = hoveredTech === `${tech.name}-${idx}`;
            const isAnyHovered = hoveredTech !== null;

            return (
              <div
                key={`${tech.name}-${idx}`}
                onMouseEnter={() => setHoveredTech(`${tech.name}-${idx}`)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`relative shrink-0 flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-md transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'scale-110 border-blue-500 shadow-xl shadow-blue-500/20 z-30'
                    : isAnyHovered
                    ? 'opacity-40 scale-95'
                    : 'opacity-90 hover:opacity-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-md transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-slate-100 whitespace-nowrap">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block whitespace-nowrap">
                    {tech.category}
                  </span>
                </div>

                {/* Subtle Tooltip Status Indicator */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-mono whitespace-nowrap shadow-lg">
                    Active Stack Component
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
