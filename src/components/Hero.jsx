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
      {/* Dynamic Cursor-Following Radial Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.rawX || 400}px ${mousePos.rawY || 300}px, rgba(59, 130, 246, 0.12), transparent 80%)`
        }}
      />

      {/* Background Dark Circuit Pattern & Glows */}
      <div 
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h12v2H16v12h14v-2h-4a2 2 0 1 1 0-4h6a2 2 0 1 1 0 4h-4v2h10v14h-2V28H28v12h-2V28H14v12h-2V28H0v-2h12V16zM6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm22 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-16 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%203b82f6' fill-opacity='0.9' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="absolute top-1/4 left-5 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Clean High-Contrast Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Glowing Cyan Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider shadow-lg shadow-cyan-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Greetings & Main Bold Header */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold font-heading tracking-tight text-slate-800 dark:text-slate-200">
                Hi, I'm <span className="text-blue-600 dark:text-cyan-400 font-bold">Yash Tank</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-slate-100 leading-[1.08]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-slate-100 dark:via-blue-200 dark:to-cyan-400">
                  MERN Stack Developer
                </span>
              </h1>
            </div>

            {/* Bio Text */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              A passionate Full-Stack MERN Developer (BCA) dedicated to turning complex ideas into clean, functional, user-centric web applications with modern architecture.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] transition-all border border-blue-400/30"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-cyan-400 border border-blue-500/30 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Let's Talk</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-white dark:bg-[#0c1220] hover:bg-slate-100 dark:hover:bg-[#11192d] text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/15 hover:border-blue-500/50 transition-all shadow-md"
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
                  className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Github className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs sm:text-sm shadow-sm"
                >
                  <Mail className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Parallax Developer Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
            style={{
              transform: `translate3d(${-mousePos.x * 0.015}px, ${-mousePos.y * 0.015}px, 0)`
            }}
          >
            {/* Floating Glass Tech Icons Orbiting the Code Editor (Hidden on Mobile, Visible sm+) */}
            <div
              className="hidden sm:flex absolute -top-5 -left-4 md:-top-7 md:-left-6 z-30 items-center gap-2 bg-[#0c1322]/90 border border-cyan-400/40 backdrop-blur-2xl px-3.5 py-2 rounded-xl shadow-2xl text-xs font-semibold text-cyan-300 transition-transform duration-100 ease-out pointer-events-none"
              style={{
                transform: `translate3d(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px, 0)`
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>React.js</span>
            </div>

            <div
              className="hidden sm:flex absolute -top-5 -right-3 md:-top-7 md:-right-4 z-30 items-center gap-2 bg-[#0c1322]/90 border border-indigo-400/40 backdrop-blur-2xl px-3.5 py-2 rounded-xl shadow-2xl text-xs font-semibold text-indigo-300 transition-transform duration-100 ease-out pointer-events-none"
              style={{
                transform: `translate3d(${-mousePos.x * 0.025}px, ${mousePos.y * 0.025}px, 0)`
              }}
            >
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Node.js</span>
            </div>

            <div
              className="hidden sm:flex absolute -bottom-5 -left-3 md:-bottom-6 md:-left-4 z-30 items-center gap-2 bg-[#0c1322]/90 border border-emerald-400/40 backdrop-blur-2xl px-3.5 py-2 rounded-xl shadow-2xl text-xs font-semibold text-emerald-300 transition-transform duration-100 ease-out pointer-events-none"
              style={{
                transform: `translate3d(${mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px, 0)`
              }}
            >
              <Database className="w-4 h-4 text-emerald-400" />
              <span>MongoDB</span>
            </div>

            {/* API Health Widget */}
            <div
              className="hidden md:flex absolute -bottom-6 -right-6 z-30 items-center gap-3 bg-[#0a0f1d]/95 border border-blue-500/40 backdrop-blur-2xl px-4 py-3 rounded-2xl shadow-2xl text-xs transition-transform duration-100 ease-out pointer-events-none"
              style={{
                transform: `translate3d(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px, 0)`
              }}
            >
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Activity className="w-4 h-4 animate-pulse" />
              </div>
              <div className="text-left font-mono">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">API Health</div>
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 99.9% Uptime
                </div>
              </div>
            </div>

            {/* Code Editor Box */}
            <div className="bg-[#0b101d]/95 rounded-2xl border border-white/15 shadow-2xl overflow-hidden backdrop-blur-2xl relative">
              <div className="premium-card-accent" />

              {/* Window Header Bar */}
              <div className="bg-[#0f172a] px-3 sm:px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-white/10 overflow-x-auto max-w-[210px] sm:max-w-none no-scrollbar">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono transition-colors shrink-0 ${
                          activeTab === tab.id
                            ? 'bg-blue-600/35 text-blue-300 border border-blue-400/50 font-semibold shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  title="Copy code"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>
              </div>

              {/* Code Snippet Area */}
              <div className="p-4 sm:p-6 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed overflow-x-auto min-h-[240px] sm:min-h-[260px] bg-[#070b14]/95 text-left relative">
                {activeTab === 'code' && (
                  <pre className="text-slate-300">
                    <code>
                      <span className="code-keyword">const</span> <span className="code-property">developer</span> = &#123;{"\n"}
                      {"  "}name: <span className="code-string">"Yash Tank"</span>,{"\n"}
                      {"  "}degree: <span className="code-string">"BCA"</span>,{"\n"}
                      {"  "}role: <span className="code-string">"MERN Stack Developer"</span>,{"\n"}
                      {"  "}status: <span className="code-string">"Available for Opportunities"</span>,{"\n"}
                      {"  "}stack: [<span className="code-string">"MongoDB"</span>, <span className="code-string">"Express.js"</span>, <span className="code-string">"React.js"</span>, <span className="code-string">"Node.js"</span>],{"\n"}
                      {"  "}architecture: <span className="code-string">"RESTful APIs & Responsive UI"</span>,{"\n"}
                      {"  "}builds: <span className="code-keyword">function</span>() &#123;{"\n"}
                      {"    "}<span className="code-keyword">return</span> <span className="code-string">"Clean, Functional, User-Centric Web Apps"</span>;<span className="animate-blinking-cursor text-cyan-400 font-bold ml-1">|</span>{"\n"}
                      {"  "}&#125;{"\n"}
                      &#125;;
                    </code>
                  </pre>
                )}

                {activeTab === 'api' && (
                  <pre className="text-slate-300">
                    <code>{apiSnippet}<span className="animate-blinking-cursor text-cyan-400 font-bold ml-1">|</span></code>
                  </pre>
                )}

                {activeTab === 'db' && (
                  <pre className="text-slate-300">
                    <code>{dbSnippet}<span className="animate-blinking-cursor text-cyan-400 font-bold ml-1">|</span></code>
                  </pre>
                )}
              </div>

              {/* Status footer bar */}
              <div className="bg-[#0f172a]/95 px-3 sm:px-4 py-2 sm:py-2.5 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>UTF-8</span>
                  <span>JavaScript / MERN</span>
                </div>
                <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Ready
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

