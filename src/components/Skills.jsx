import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Palette, FileCode2, Atom, Sparkles, 
  Server, Cpu, Network, Database, Layers, 
  GitBranch, Terminal, Send
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Code2, Palette, FileCode2, Atom, Sparkles,
  Server, Cpu, Network, Database, Layers,
  GitBranch, Github, Terminal, Send
};

const categoryTitles = {
  frontend: { title: "Frontend Engineering", color: "from-cyan-500 to-blue-500", badge: "UI / Client" },
  backend: { title: "Backend Architecture", color: "from-blue-500 to-indigo-500", badge: "Server / Logic" },
  database: { title: "Database Systems", color: "from-emerald-500 to-teal-500", badge: "Data Persistence" },
  tools: { title: "Tools & Environment", color: "from-purple-500 to-pink-500", badge: "Workflow" }
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  const allSkills = [
    { name: "React.js", category: "frontend", icon: Atom, level: "Advanced", x: 18, y: 25 },
    { name: "Node.js", category: "backend", icon: Cpu, level: "Advanced", x: 82, y: 25 },
    { name: "MongoDB", category: "database", icon: Database, level: "Intermediate", x: 18, y: 75 },
    { name: "Express.js", category: "backend", icon: Server, level: "Advanced", x: 82, y: 75 },
    { name: "JavaScript", category: "frontend", icon: Code2, level: "Advanced", x: 35, y: 15 },
    { name: "REST APIs", category: "backend", icon: Network, level: "Advanced", x: 65, y: 15 },
    { name: "Git & GitHub", category: "tools", icon: GitBranch, level: "Advanced", x: 35, y: 85 },
    { name: "Postman", category: "tools", icon: Send, level: "Intermediate", x: 65, y: 85 }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 relative bg-slate-100/60 dark:bg-slate-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-mono font-medium">
            <span>INTERACTIVE NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Skills & <span className="text-blue-600 dark:text-cyan-400">Technology Ecosystem</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Hover over any technology node to illuminate its connected architecture within the MERN stack pipeline.
          </p>
        </div>

        {/* Technology Network: Mobile Responsive Grid (below md) / Radial Graph (md+) */}
        
        {/* Mobile View (Grid Cards) */}
        <div className="block md:hidden space-y-4">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-md">
              <Layers className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-extrabold text-lg tracking-wider uppercase font-heading">MERN STACK</h3>
            <p className="text-xs font-mono text-cyan-200">Core Architecture & Tech Ecosystem</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {allSkills.map((skill) => {
              const Icon = skill.icon || Code2;
              return (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-2 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{skill.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-white/5">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{skill.level}</span>
                    <span className="capitalize">{categoryTitles[skill.category]?.badge.split('/')[0] || skill.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View (Interactive Network Diagram) */}
        <div className="hidden md:flex relative min-h-[440px] p-8 rounded-3xl bg-white/70 dark:bg-[#0c1220]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden items-center justify-center">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-300 dark:stroke-white/15" strokeWidth="1.5">
            {allSkills.map((skill) => (
              <line
                key={skill.name}
                x1="50%"
                y1="50%"
                x2={`${skill.x}%`}
                y2={`${skill.y}%`}
                className={`transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? 'stroke-cyan-400 stroke-2 opacity-100'
                    : hoveredSkill
                    ? 'opacity-20'
                    : 'opacity-50'
                }`}
              />
            ))}
          </svg>

          {/* Central Hub Node: MERN STACK */}
          <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/30 border-4 border-white/20">
            <Layers className="w-8 h-8 mb-1 animate-pulse" />
            <span className="font-extrabold text-sm tracking-wider uppercase font-heading">MERN STACK</span>
            <span className="text-[10px] font-mono text-cyan-200">Core Architecture</span>
          </div>

          {/* Connected Peripheral Nodes */}
          {allSkills.map((skill) => {
            const Icon = skill.icon || Code2;
            const isHovered = hoveredSkill === skill.name;
            const isDimmed = hoveredSkill && !isHovered;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute z-30 group cursor-pointer transition-all duration-300 ${
                  isDimmed ? 'opacity-30 scale-90' : 'opacity-100 scale-100'
                }`}
              >
                <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border backdrop-blur-md shadow-lg transition-all duration-300 ${
                  isHovered
                    ? 'bg-blue-600 text-white border-cyan-400 scale-110 shadow-cyan-500/30 shadow-xl'
                    : 'bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-white/15 hover:border-blue-500'
                }`}>
                  <Icon className={`w-4 h-4 ${isHovered ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`} />
                  <span className="text-xs sm:text-sm font-bold font-heading whitespace-nowrap">{skill.name}</span>
                </div>

                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-[11px] font-mono shadow-xl border border-white/10 whitespace-nowrap z-40 animate-fade-in">
                    <span className="text-cyan-400 font-bold">{skill.level}</span> • {categoryTitles[skill.category]?.badge || 'Tech'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Category Breakdown Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mt-8">
          {Object.entries(categoryTitles).map(([catKey, meta]) => (
            <div key={catKey} className="p-3.5 sm:p-4 rounded-2xl bg-white/50 dark:bg-[#0c1220]/50 border border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${meta.color} shrink-0`} />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{meta.title}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0 ml-2">{meta.badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
