import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Layers } from 'lucide-react';

export default function Services() {
  const capabilities = [
    {
      num: "01",
      title: "Web Applications",
      tag: "Frontend UI",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      description: "Crafting fast, intuitive, and highly responsive user interfaces with modular React component architecture.",
      icon: Layout
    },
    {
      num: "02",
      title: "REST API Systems",
      tag: "Server Services",
      tech: ["Node.js", "Express.js", "REST Endpoints"],
      description: "Designing structured, secure, and maintainable server-side REST APIs and business logic controllers.",
      icon: Server
    },
    {
      num: "03",
      title: "Database Systems",
      tag: "Data Architecture",
      tech: ["MongoDB", "Mongoose ODM", "NoSQL"],
      description: "Structuring flexible NoSQL database collections, document schemas, and data relationships.",
      icon: Database
    },
    {
      num: "04",
      title: "Full-Stack Applications",
      tag: "End-to-End",
      tech: ["MERN Stack", "Git & GitHub", "API Integration"],
      description: "Building complete end-to-end web software connecting client user interfaces with backend databases.",
      icon: Layers
    }
  ];

  return (
    <section className="py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-mono font-medium">
            <span>DEVELOPMENT CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            What I <span className="text-blue-600 dark:text-cyan-400">Build</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering clean, modular, and reliable software solutions across the full stack.
          </p>
        </div>

        {/* Balanced 2x2 Capability Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#080d19]/80 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 space-y-5 text-left shadow-lg overflow-hidden"
              >
                {/* Accent line */}
                <div className="premium-card-accent" />

                {/* Card Header: Number + Icon + Tag */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold font-mono text-cyan-500 dark:text-cyan-400">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Short Explanation */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Relevant Technologies Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
