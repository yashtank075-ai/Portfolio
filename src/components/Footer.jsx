import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050914] text-slate-100 dark:bg-white dark:text-slate-900 border-t border-white/10 dark:border-slate-200 pt-16 pb-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 dark:border-slate-200">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-heading font-extrabold text-2xl tracking-wider text-slate-100 dark:text-slate-900">
                {portfolioData.personal.logo}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-600 font-medium">
              Building the web, one project at a time.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 border border-white/10 dark:border-slate-200 text-slate-300 dark:text-slate-700 hover:text-white dark:hover:text-slate-900 hover:border-white/20 dark:hover:border-slate-300 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 border border-white/10 dark:border-slate-200 text-slate-300 dark:text-slate-700 hover:text-white dark:hover:text-slate-900 hover:border-white/20 dark:hover:border-slate-300 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 border border-white/10 dark:border-slate-200 text-slate-300 dark:text-slate-700 hover:text-white dark:hover:text-slate-900 hover:border-white/20 dark:hover:border-slate-300 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-blue-600/20 dark:bg-blue-50 border border-blue-500/30 dark:border-blue-200 text-blue-400 dark:text-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Yash Tank. All rights reserved.</span>
          <span>Crafted with React, Node.js & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}
