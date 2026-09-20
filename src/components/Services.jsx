import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const serviceIcons = {
  Layout, Server, Database, Layers
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-mono font-medium">
            <span>DEVELOPMENT FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            What I <span className="text-blue-600 dark:text-cyan-400">Build</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering clean, modular, and scalable software solutions across the full stack.
          </p>
        </div>

        {/* 4 Interactive Service Cards */}
        <div className="space-y-4">
          {portfolioData.services.map((item, idx) => {
            const Icon = serviceIcons[item.icon] || Layers;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isHovered
                    ? 'bg-[#0f192e] border-cyan-400/80 shadow-[0_12px_40px_rgba(6,182,212,0.25)] -translate-y-1 z-20'
                    : 'bg-white/80 dark:bg-[#0b1120]/80 border-slate-200 dark:border-white/10 hover:border-cyan-400/40'
                } border`}
              >
                {/* Subtle Cyan Bottom Glow Bar */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} 
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  
                  {/* Left Column: Number & Icon & Title */}
                  <div className="flex items-center gap-5 sm:gap-6">
                    <span className={`text-3xl sm:text-4xl font-extrabold font-mono transition-colors duration-300 ${
                      isHovered ? 'text-cyan-400 font-bold' : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      0{idx + 1}
                    </span>

                    <div className="flex items-center gap-4">
                      {/* Icon Container */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isHovered 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 scale-105' 
                          : 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className={`text-xl sm:text-2xl font-bold font-heading transition-colors duration-300 ${
                          isHovered ? 'text-cyan-300' : 'text-slate-900 dark:text-slate-100'
                        }`}>
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {item.tag} • MERN Architecture
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Description */}
                  <div className="md:max-w-md lg:max-w-lg">
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                      isHovered ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Interactive Arrow Button */}
                  <div className="flex items-center justify-end md:justify-center shrink-0">
                    <div className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/40 scale-105'
                        : 'border-slate-300 dark:border-white/10 text-slate-400 bg-slate-100/50 dark:bg-white/5'
                    }`}>
                      <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${
                        isHovered ? 'rotate-45 scale-110' : ''
                      }`} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
