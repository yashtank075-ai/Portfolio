import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">METHODOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
            Engineering Workflow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            A structured, iterative workflow from initial discovery and schema modeling to production deployment.
          </p>
        </div>

        {/* Connected Horizontal Timeline Container on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle Desktop Connecting Line running through all cards */}
          <div 
            className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#4169E1]/20 via-[#4169E1]/60 to-[#4169E1]/20 z-0 pointer-events-none" 
            aria-hidden="true"
          />

          {/* 5-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left relative z-10">
            {portfolioData.process.map((item, idx) => (
              <div
                key={item.step}
                className="portfolio-card group p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-white shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative border border-[#E5E5E0] hover:border-[#4169E1]"
              >
                {/* Mobile connecting indicator */}
                <div className="lg:hidden absolute -left-1 top-4 bottom-4 w-1 bg-[#4169E1] rounded-full opacity-60" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4169E1] flex items-center justify-center font-mono font-bold text-sm group-hover:bg-[#4169E1] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      {item.step}
                    </div>
                    <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider font-semibold">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#171717] group-hover:text-[#4169E1] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#525252] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E5E0] font-mono text-[11px] text-[#4169E1] font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Deliverable Ready</span>
                  </span>
                  {idx < portfolioData.process.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#737373] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
