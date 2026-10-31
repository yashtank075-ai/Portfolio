import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/30 dark:bg-[#161920]/30 backdrop-blur-[2px] border-y border-[#E5E5E0]/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">CAPABILITIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#F3F4F6]">
            What I Build &amp; Deliver
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] dark:text-[#9CA3AF] leading-relaxed">
            Tailored engineering capabilities supporting both full-time software engineering roles and bespoke website development for businesses.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {portfolioData.services.map((service) => (
            <div
              key={service.num}
              className="portfolio-card p-6 sm:p-8 bg-white dark:bg-[#1C2029] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-3">
                  <span className="font-mono text-2xl font-bold text-[#4169E1]">
                    {service.num}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 text-[#737373] dark:text-[#9CA3AF]">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#F3F4F6]">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4169E1] font-medium">
                  Ideal for: {service.forWho}
                </p>

                <p className="text-sm text-[#737373] dark:text-[#9CA3AF] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E0] dark:border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#F3F4F6] block mb-2 font-bold">
                  Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#737373] dark:text-[#9CA3AF]">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
