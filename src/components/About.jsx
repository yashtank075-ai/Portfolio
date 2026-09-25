import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Layers, Rocket, CheckCircle2, GraduationCap, Server, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const journeyIcons = [BookOpen, Code2, Layers, Rocket];

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleMouseMove}
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Reveal Background */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            About <span className="text-blue-600 dark:text-cyan-400">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Passionate software developer focused on modern web engineering, clean architecture, and building real-world MERN applications.
          </p>
        </div>

        {/* 2-Column Editorial Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Narrative Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed"
          >
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200">
              <p>
                Hello! I'm <strong className="text-slate-900 dark:text-white font-bold">Yash Tank</strong>, a dedicated full-stack developer specializing in the <strong className="text-blue-600 dark:text-cyan-400 font-semibold">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>.
              </p>
              <p>
                With a solid academic foundation in <strong className="text-slate-900 dark:text-slate-100 font-semibold">Bachelor of Computer Applications (BCA)</strong>, I have cultivated a thorough understanding of computer science fundamentals, object-oriented programming, database management, and modern web application development.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                I am driven by turning complex ideas into intuitive, responsive, and fully functional web products. My practical experience comes from building complete end-to-end applications from designing dynamic React client interfaces to architecting REST APIs and MongoDB data models.
              </p>
            </div>

            {/* Core Competencies Row List */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Engineering Focus Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  "React.js Component Architecture",
                  "Node.js & Express REST APIs",
                  "MongoDB & Mongoose Schema Design",
                  "Responsive UI & Tailwind CSS",
                  "Git Version Control & Workflows",
                  "Continuous Learning Mindset"
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-center gap-3 py-1 text-slate-800 dark:text-slate-200 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Highlights Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-slate-100 flex items-center gap-2.5 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <span>Key Highlights</span>
            </h3>

            <div className="space-y-3.5">
              {portfolioData.highlights.map((fact, idx) => {
                // Distinct icons for each highlight card
                const highlightIcons = [GraduationCap, Layers, Server, Code2];
                const IconComponent = highlightIcons[idx % highlightIcons.length];

                return (
                  <div
                    key={fact.title}
                    className={`group relative pl-5 pr-4 py-4 rounded-2xl bg-white/60 dark:bg-[#0c1220]/70 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 backdrop-blur-md transition-all duration-300 ${
                      idx === 0
                        ? 'hover:-translate-y-1 hover:shadow-amber-500/10'
                        : idx === 1
                        ? 'hover:translate-x-1.5 hover:shadow-cyan-500/10'
                        : idx === 2
                        ? 'hover:scale-[1.015] hover:shadow-indigo-500/10'
                        : 'hover:-translate-y-1 hover:shadow-emerald-500/10'
                    }`}
                  >
                    {/* Unique Side Line Accent per Card */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      idx === 0 ? 'bg-amber-400' : idx === 1 ? 'bg-cyan-400' : idx === 2 ? 'bg-indigo-500' : 'bg-emerald-400'
                    }`} />

                    <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-1.5 mb-1">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`p-1.5 rounded-lg text-slate-700 dark:text-slate-300 transition-transform duration-300 shrink-0 ${
                          idx === 0 ? 'group-hover:rotate-12 group-hover:text-amber-400' :
                          idx === 1 ? 'group-hover:scale-110 group-hover:text-cyan-400' :
                          idx === 2 ? 'group-hover:-translate-y-0.5 group-hover:text-indigo-400' :
                          'group-hover:rotate-6 group-hover:text-emerald-400'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                          {fact.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 font-semibold shrink-0">
                        {fact.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {fact.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* DEVELOPER JOURNEY TIMELINE (01 ──── 02 ──── 03 ──── 04) */}
        <div className="space-y-10 pt-10 border-t border-slate-200 dark:border-white/10">
          <div className="text-left space-y-1">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-slate-100">
              Developer Journey
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Structured milestone progression of practical technical growth.
            </p>
          </div>

          {/* Timeline Bar Container */}
          <div className="relative">
            {/* Connecting Horizontal Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-300 dark:bg-white/10 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {portfolioData.journey.map((item, idx) => {
                const Icon = journeyIcons[idx % journeyIcons.length];
                return (
                  <div
                    key={item.step}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-[#0c1220]/70 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 backdrop-blur-md transition-all duration-300 text-left"
                  >
                    {/* Node Dot Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold font-mono text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-300 group-hover:-translate-y-0.5 transition-all">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Progress Indicator Accent */}
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 rounded-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
