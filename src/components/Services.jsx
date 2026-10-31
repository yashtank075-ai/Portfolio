import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Layers, Server, Globe, Layout, ArrowRight } from 'lucide-react';

const SERVICE_META = {
  "01": {
    icon: Layers,
    accent: "hover:border-[#4169E1]",
    glow: "from-[#4169E1]/15 to-transparent",
    iconBg: "bg-[#EEF2FF] text-[#4169E1]",
    badge: "Full-Stack System",
    rotation: "group-hover:rotate-6 group-hover:scale-110",
  },
  "02": {
    icon: Server,
    accent: "hover:border-[#8B5CF6]",
    glow: "from-[#8B5CF6]/15 to-transparent",
    iconBg: "bg-[#F5F3FF] text-[#8B5CF6]",
    badge: "Backend & Systems",
    rotation: "group-hover:-rotate-6 group-hover:scale-110",
  },
  "03": {
    icon: Globe,
    accent: "hover:border-[#10B981]",
    glow: "from-[#10B981]/15 to-transparent",
    iconBg: "bg-[#ECFDF5] text-[#10B981]",
    badge: "Web Experience",
    rotation: "group-hover:rotate-12 group-hover:scale-110",
  },
  "04": {
    icon: Layout,
    accent: "hover:border-[#F59E0B]",
    glow: "from-[#F59E0B]/15 to-transparent",
    iconBg: "bg-[#FFFBEB] text-[#F59E0B]",
    badge: "UI Craftsmanship",
    rotation: "group-hover:-rotate-12 group-hover:scale-110",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative bg-[#F2F3F0]/40 border-y border-[#E5E5E0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="badge-tag mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4169E1]" />
            <span className="text-[#4169E1] font-bold">CAPABILITIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
            What I Build &amp; Deliver
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Tailored engineering capabilities supporting both full-time software engineering roles and bespoke website development for businesses.
          </p>
        </div>

        {/* 4 Cards Grid with Distinct Visual Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {portfolioData.services.map((service) => {
            const meta = SERVICE_META[service.num] || SERVICE_META["01"];
            const Icon = meta.icon;

            return (
              <div
                key={service.num}
                className={`portfolio-card group p-6 sm:p-8 bg-white space-y-5 flex flex-col justify-between shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-[#E5E5E0] ${meta.accent}`}
              >
                {/* Subtle Ambient Card Corner Gradient */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${meta.glow} rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl ${meta.iconBg} flex items-center justify-center shrink-0 ${meta.rotation} transition-transform duration-300 shadow-2xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-[#171717]">
                        {service.num}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#FAFAF8] border border-[#E5E5E0] text-[#737373]">
                      {meta.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#171717] group-hover:text-[#4169E1] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4169E1] font-semibold font-mono">
                    Target: {service.forWho}
                  </p>

                  <p className="text-sm text-[#525252] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#E5E5E0]">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#171717] block mb-2.5 font-bold">
                      Verified Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#525252]">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual CTA link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#4169E1] hover:text-[#3154C4] transition-colors pt-2 group-hover:translate-x-1 duration-200"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
