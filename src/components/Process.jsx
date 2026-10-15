import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Process() {
  return (
    <section id="process" className="py-12 sm:py-14 lg:py-16 relative border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-6 mb-8 sm:mb-10 text-left">
          <div className="space-y-3">
            <div className="editorial-tag text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5]" />
              <span>04 // Methodology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171714] dark:text-[#F5F2EB] tracking-tight">
              Working Approach
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] max-w-md leading-relaxed">
            My proposed engineering workflow from initial architectural scoping to production deployment.
          </p>
        </div>

        {/* 5-Step Editorial Process Grid (1 col on mobile, 2 col on tablet, 5 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {portfolioData.process.map((item, idx) => (
            <div
              key={item.step}
              className="editorial-card p-5 sm:p-6 flex flex-col justify-between space-y-4 transition-all duration-300"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-3">
                  <span className="font-mono text-xl sm:text-2xl font-light text-[#8C734B] dark:text-[#D9C8A5]">
                    {item.step}
                  </span>
                  <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] uppercase tracking-wider font-semibold">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-[#171714] dark:text-[#F5F2EB] leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] font-mono text-xs text-[#8C734B] dark:text-[#D9C8A5] font-medium">
                Stage Verified ✓
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
