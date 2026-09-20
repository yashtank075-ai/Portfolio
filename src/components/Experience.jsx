import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-mono font-medium">
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Experience & <span className="text-blue-600 dark:text-blue-400">Development Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Hands-on technical growth achieved through designing, building, and deploying real full-stack web applications.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:w-0.5 before:bg-slate-300 dark:before:bg-white/10 before:-ml-px">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Center Dot */}
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-[#0c1220] border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Code className="w-5 h-5" />
              </div>

              {/* Card Container */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] p-7 rounded-3xl premium-card hover-experience-card space-y-4 overflow-hidden">
                <div className="premium-card-accent" />
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3.5">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
