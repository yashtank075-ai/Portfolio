import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function QuickStats() {
  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Sleek Horizontal Strip Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#0c1220]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-slate-200 dark:divide-white/10">
            {portfolioData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group px-4 sm:px-6 py-2 flex flex-col justify-between text-left cursor-default transition-all duration-300"
              >
                {/* Stat Number & Animated Underline */}
                <div className="relative inline-block space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:scale-105 origin-left transition-all duration-300">
                    <span className="bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all">
                      {stat.value}
                    </span>
                  </div>
                  
                  {/* Subtle Expanding Underline */}
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 rounded-full" />
                </div>

                {/* Label & Detail */}
                <div className="mt-2 space-y-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
