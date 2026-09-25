import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="pt-8 pb-12 lg:pt-10 lg:pb-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Experience & <span className="text-blue-600 dark:text-blue-400">Development Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on technical growth achieved through designing, building, and deploying real full-stack web applications.
          </p>
        </div>

        {/* Experience List - Compact Grid / Cards Layout without Artificial Timeline Vertical Space */}
        <div className="max-w-4xl mx-auto space-y-5">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-4 sm:p-7 rounded-2xl bg-white/70 dark:bg-[#080d19]/80 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 space-y-3 shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
