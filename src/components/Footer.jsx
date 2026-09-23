import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-100 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              {/* <div className="bg-[#192234] border border-white/10 text-slate-200 font-mono text-xs font-bold px-2 py-1 rounded-lg">
                YT
              </div> */}
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Building scalable web applications, one line of code at a time.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center font-medium text-xs sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#101827] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-slate-300" />
            </a>
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#101827] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-slate-300" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-[#101827] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-slate-300" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-[#162238] border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all ml-1 shadow-lg shadow-cyan-500/10"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
          <span className="text-slate-400">Crafted with React.js, Node.js & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}
