import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { degree, institution, location, status, summary, coreSubjects } = portfolioData.education;

  return (
    <section className="py-16 lg:py-24 relative bg-slate-100/60 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2.5 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Education <span className="text-blue-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-300">& Foundation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Academic degree and theoretical grounding in computer science and application development.
          </p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-5 sm:p-8 lg:p-12 rounded-3xl premium-card hover-education-card space-y-6 sm:space-y-8 overflow-hidden text-left"
        >
          <div className="premium-card-accent" />

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100 truncate">
                  {degree}
                </h3>
                <p className="text-xs sm:text-base text-blue-600 dark:text-blue-400 font-semibold font-mono mt-0.5 truncate">
                  {institution} — {location}
                </p>
              </div>
            </div>

            <span className="self-start sm:self-auto text-xs font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
              {status}
            </span>
          </div>

          {/* Summary */}
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {summary}
          </p>

          {/* Core Subjects Grid */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Key Academic Focus & Coursework</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreSubjects.map((subject, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{subject}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
