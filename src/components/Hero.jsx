import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Code2, Terminal, Database, Check, Copy, Sparkles, Activity, Cpu, Server, Layers } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const tabs = [
  { id: 'code', label: 'developer.js', icon: Code2 },
  { id: 'api', label: 'api_status.json', icon: Terminal },
  { id: 'db', label: 'schema.js', icon: Database }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMousePos({ x, y, rawX: e.clientX - rect.left, rawY: e.clientY - rect.top });
  };

  const codeSnippet = `const developer = {
  name: "Yash Tank",
  degree: "BCA",
  role: "MERN Stack Developer",
  status: "Available for Opportunities",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  architecture: "RESTful APIs & Responsive UI",
  builds: function() {
    return "Clean, Functional, User-Centric Web Apps";
  }
};`;

  const apiSnippet = `{
  "status": 200,
  "developer": "Yash Tank",
  "stack": "MERN",
  "api_ready": true,
  "endpoints": ["/api/v1/projects", "/api/v1/contact"]
}`;

  const dbSnippet = `const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "Developer" },
  skills: [{ type: String }],
  available: { type: Boolean, default: true }
});`;

  const handleCopy = () => {
    let content = codeSnippet;
    if (activeTab === 'api') content = apiSnippet;
    if (activeTab === 'db') content = dbSnippet;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Clean High-Contrast Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-mono font-medium tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>FULL-STACK MERN DEVELOPER • BCA GRADUATE</span>
            </div>

            {/* Greetings & Headline */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium font-heading tracking-tight text-slate-700 dark:text-slate-300">
                Hi, I'm <span className="text-blue-600 dark:text-cyan-400 font-semibold">Yash Tank</span>
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-slate-100 leading-[1.15]">
                Building Modern Web Experiences with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-400">MERN</span>
              </h1>
            </div>

            {/* Bio Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              I specialize in turning complex requirements into clean, functional, user-centric web applications using React, Node.js, Express, and MongoDB with structured REST API design.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 active:scale-[0.98] transition-all border border-blue-400/30"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-cyan-300 border border-slate-300 dark:border-white/10 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Let's Connect</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-white dark:bg-[#0c1220] hover:bg-slate-100 dark:hover:bg-[#11192d] text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/15 transition-all shadow-md"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Horizontal Social Connect Links */}
            <div className="pt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">
              <span className="text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono text-xs font-semibold">Connect:</span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Github className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Mail className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Clean Static Technical Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            style={{
              transform: `translate3d(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px, 0)`
            }}
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#080d19]/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6 text-left">
              {/* Header Label */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase">
                    System Architecture
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  MERN Stack
                </span>
              </div>

              {/* Stack Architecture Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* 1. Client Layer */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100">Frontend Layer</div>
                      <div className="text-[11px] text-slate-400 font-sans">React.js & Tailwind CSS</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">Client</span>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-slate-500 py-0.5">
                  <span className="text-cyan-400/80 font-bold">↓</span>
                </div>

                {/* 2. API Services Layer */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100">API Layer</div>
                      <div className="text-[11px] text-slate-400 font-sans">Node.js & Express REST Endpoints</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">Server</span>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-slate-500 py-0.5">
                  <span className="text-indigo-400/80 font-bold">↓</span>
                </div>

                {/* 3. Database Layer */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100">Database Layer</div>
                      <div className="text-[11px] text-slate-400 font-sans">MongoDB & Mongoose ODM</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">Database</span>
                </div>
              </div>

              {/* Quiet Footer Detail */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Architecture</span>
                <span className="text-slate-300 font-sans">Modular & Scalable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

