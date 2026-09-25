import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Palette, FileCode2, Atom, Sparkles, 
  Server, Cpu, Network, Database, Layers, 
  GitBranch, Terminal, Send, UserCheck, ArrowDown
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      badge: "Client UI",
      skills: portfolioData.skills.frontend,
      accent: "border-cyan-500/30 text-cyan-400"
    },
    {
      title: "Backend Architecture",
      badge: "Server Services",
      skills: portfolioData.skills.backend,
      accent: "border-indigo-500/30 text-indigo-400"
    },
    {
      title: "Database Systems",
      badge: "Data Layer",
      skills: portfolioData.skills.database,
      accent: "border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Tools & Environment",
      badge: "Workflow",
      skills: portfolioData.skills.tools,
      accent: "border-purple-500/30 text-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-14 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Technical <span className="text-blue-600 dark:text-cyan-400">Architecture & Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Core technologies and full-stack software development tools used in building my applications.
          </p>
        </div>

        {/* 1. TECHNICAL ARCHITECTURE FLOW (User -> Frontend -> API -> Database) */}
        <div className="mb-16 p-4 sm:p-6 lg:p-8 rounded-3xl bg-white/70 dark:bg-[#080d19]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl text-left space-y-6">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 gap-2">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0" />
              <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-slate-100">
                MERN Technical Architecture Flow
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
              End-to-End System Design
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center font-mono text-xs">
            
            {/* Step 1: User */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-left space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-blue-600 dark:text-cyan-400 font-bold">
                <span>01. USER</span>
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="text-slate-900 dark:text-slate-100 font-sans font-semibold text-sm">Client Request</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Browser interaction & form data</div>
            </div>

            {/* Step 2: Frontend */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-left space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-blue-600 dark:text-cyan-400 font-bold">
                <span>02. FRONTEND</span>
                <Atom className="w-4 h-4" />
              </div>
              <div className="text-slate-900 dark:text-slate-100 font-sans font-semibold text-sm">React.js & Tailwind</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Dynamic state & UI rendering</div>
            </div>

            {/* Step 3: API Layer */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-indigo-500/30 text-left space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-bold">
                <span>03. API LAYER</span>
                <Server className="w-4 h-4" />
              </div>
              <div className="text-slate-900 dark:text-slate-100 font-sans font-semibold text-sm">Node.js & Express</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">RESTful API routes & business logic</div>
            </div>

            {/* Step 4: Database */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/30 text-left space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                <span>04. DATABASE</span>
                <Database className="w-4 h-4" />
              </div>
              <div className="text-slate-900 dark:text-slate-100 font-sans font-semibold text-sm">MongoDB & Mongoose</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Persistent JSON document storage</div>
            </div>

          </div>
        </div>

        {/* 2. CATEGORIZED TECH SYSTEM (Clean cards, no skill percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/70 dark:bg-[#080d19]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg space-y-5 text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100">
                  {cat.title}
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border bg-slate-100 dark:bg-slate-900 ${cat.accent}`}>
                  {cat.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
