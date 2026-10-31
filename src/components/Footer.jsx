import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E5E0]/60 dark:border-white/10 bg-[#FAFAF8]/60 dark:bg-[#0F1115]/80 backdrop-blur-md text-[#171717] dark:text-[#F3F4F6] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E5E5E0] dark:border-white/10">
          
          {/* Identity */}
          <div className="space-y-1 text-left">
            <span className="font-extrabold text-xl tracking-tight text-[#171717] dark:text-[#F3F4F6] block">
              {portfolioData.personal.name}
            </span>
            <p className="text-xs sm:text-sm text-[#737373] dark:text-[#9CA3AF]">
              {portfolioData.personal.role} • {portfolioData.personal.location}
            </p>
          </div>

          {/* Navigation Links */}
          <nav 
            className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm font-semibold text-[#737373] dark:text-[#9CA3AF]"
            aria-label="Footer Navigation"
          >
            {footerNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#4169E1] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Yash Tank GitHub Profile"
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#E5E5E0] dark:border-white/10 bg-white dark:bg-[#1C2029] text-[#737373] dark:text-[#9CA3AF] hover:text-[#4169E1] hover:border-[#4169E1] transition-all shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Yash Tank LinkedIn Profile"
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#E5E5E0] dark:border-white/10 bg-white dark:bg-[#1C2029] text-[#737373] dark:text-[#9CA3AF] hover:text-[#4169E1] hover:border-[#4169E1] transition-all shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label={`Send direct email to ${portfolioData.personal.email}`}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#E5E5E0] dark:border-white/10 bg-white dark:bg-[#1C2029] text-[#737373] dark:text-[#9CA3AF] hover:text-[#4169E1] hover:border-[#4169E1] transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Return to top of page"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#171717] text-white dark:bg-white dark:text-[#171717] hover:bg-[#4169E1] dark:hover:bg-[#4169E1] dark:hover:text-white transition-all shadow-xs ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373] dark:text-[#9CA3AF] text-center sm:text-left">
          <span>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
          <span className="font-mono text-[11px]">
            Engineered with React.js &amp; Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}
