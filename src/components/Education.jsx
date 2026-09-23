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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-mono font-medium">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Education <span className="text-blue-600 dark:text-blue-400">& Foundation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Academic degree and theoretical grounding in computer science and application development.
          </p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl premium-card hover-education-card space-y-8 overflow-hidden"
        >
          <div className="premium-card-accent" />

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
                  {degree}
                </h3>
                <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold font-mono mt-1">
                  {institution} — {location}
                </p>
              </div>
            </div>

            <span className="self-start sm:self-auto text-xs font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">
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
