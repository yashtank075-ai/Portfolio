import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">METHODOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            Engineering Workflow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] dark:text-[#9CA3AF] leading-relaxed">
            A structured, iterative workflow from initial discovery and scoping to production deployment.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {portfolioData.process.map((item, idx) => (
            <div
              key={item.step}
              className="portfolio-card p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-white dark:bg-[#1C2029]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-3">
                  <span className="font-mono text-2xl font-bold text-[#4169E1]">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-[#737373] dark:text-[#9CA3AF] uppercase tracking-wider font-semibold">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[#171717] dark:text-[#F3F4F6]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#737373] dark:text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5E5E0]/60 dark:border-white/5 font-mono text-[11px] text-[#4169E1] font-semibold">
                Phase Complete ✓
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
