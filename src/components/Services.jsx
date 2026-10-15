import React from 'react';
import { ArrowUpRight, ArrowRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-14 lg:py-16 relative border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] pb-6 mb-8 sm:mb-10 text-left">
          <div className="space-y-3">
            <div className="editorial-tag text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C734B] dark:bg-[#D9C8A5]" />
              <span>03 // Capabilities &amp; Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171714] dark:text-[#F5F2EB] tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] max-w-md leading-relaxed">
            Tailored engineering capabilities supporting both full-time software engineering roles and bespoke website development for businesses.
          </p>
        </div>

        {/* Numbered Editorial List Layout */}
        <div className="space-y-4 sm:space-y-5 text-left">
          {portfolioData.services.map((service) => (
            <div
              key={service.num}
              className="editorial-card p-5 sm:p-7 lg:p-8 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                
                {/* Number & Role Header */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-light text-[#8C734B] dark:text-[#D9C8A5]">
                      {service.num}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#3D3B35] dark:text-[#D4D0C5] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] px-2.5 py-0.5 font-semibold">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] dark:text-[#F5F2EB] font-normal leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#8C734B] dark:text-[#D9C8A5] pt-1 font-medium">
                    Audience: {service.forWho}
                  </p>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-8 space-y-5">
                  <p className="font-sans text-base sm:text-lg text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-[#D8D3C8]/70 dark:border-[rgba(245,242,235,0.08)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#171714] dark:text-[#F5F2EB] block mb-2.5 font-bold">
                      Key Deliverables &amp; Artifacts
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-sans text-[#3D3B35] dark:text-[#D4D0C5]">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 bg-[#8C734B] dark:bg-[#D9C8A5] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dual Clear Path for Recruiters vs Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 text-left">
          {/* Recruiter Pathway */}
          <div className="p-6 sm:p-8 bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8C734B] dark:text-[#D9C8A5] font-bold block">
                Pathway 01 // For Engineering Teams &amp; Recruiters
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#171714] dark:text-[#F5F2EB]">
                Evaluate Technical Fit &amp; Code Quality
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
                Review verified full-stack applications, examine repository commit structure, and download my formal curriculum vitae.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#171714] dark:bg-[#F5F2EB] text-[#F5F2EB] dark:text-[#171714] hover:bg-[#8C734B] dark:hover:bg-[#D9C8A5] transition-colors font-semibold"
              >
                <span>Inspect Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.2)] text-[#171714] dark:text-[#F5F2EB] hover:bg-[#E8E4DB] dark:hover:bg-[#1E1E1A] transition-colors font-medium"
              >
                <FileText className="w-4 h-4 text-[#8C734B] dark:text-[#D9C8A5]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Client Pathway */}
          <div className="p-6 sm:p-8 bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8C734B] dark:text-[#D9C8A5] font-bold block">
                Pathway 02 // For Businesses &amp; Website Clients
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#171714] dark:text-[#F5F2EB]">
                Commission a Commercial Website or Web App
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#3D3B35] dark:text-[#D4D0C5] leading-relaxed">
                Need a bespoke, responsive website or a modern full-stack application for your company? Let's discuss scope, timeline, and architecture.
              </p>
            </div>
            <div className="pt-4 font-mono text-xs sm:text-sm">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C734B] text-[#FAF8F3] hover:bg-[#171714] dark:hover:bg-[#D9C8A5] dark:hover:text-[#171714] transition-colors font-semibold"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
