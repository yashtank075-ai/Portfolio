import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function CurrentlyBuilding() {
  if (!portfolioData.currentlyBuilding) return null;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-8 lg:p-10 rounded-3xl premium-card space-y-6 overflow-hidden text-left"
        >
          <div className="premium-card-accent" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-slate-100 truncate">
                  Currently Learning & Building
                </h3>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                  Continuous Skill Refinement
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 self-start sm:self-auto">
              Active Focus Area
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {portfolioData.currentlyBuilding.map((item) => (
              <div
                key={item.topic}
                className="p-5 rounded-2xl premium-card hover-building-card space-y-2 overflow-hidden"
              >
                <div className="premium-card-accent" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.topic}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
