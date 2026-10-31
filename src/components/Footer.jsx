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
    <footer className="border-t border-[#E5E5E0] bg-[#FAFAF8] text-[#171714] py-12 sm:py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#E5E5E0]">
          
          {/* Identity & Career Metadata */}
          <div className="space-y-1.5 text-left max-w-md">
            <span className="font-heading font-bold text-2xl sm:text-[26px] tracking-tight text-[#171714] block leading-snug">
              {portfolioData.personal.name}
            </span>
            <p className="text-[15px] sm:text-base text-[#454545] font-medium leading-relaxed">
              {portfolioData.personal.role} • {portfolioData.personal.location}
            </p>
          </div>

          {/* Navigation Links */}
          <nav 
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[15px] sm:text-base font-semibold text-[#454545]"
            aria-label="Footer Navigation"
          >
            {footerNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#4169E1] transition-colors py-1 flex items-center min-h-[44px] focus:outline-none focus:text-[#4169E1] focus:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Channels & Back to Top: guaranteed >= 44x44px touch targets */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Yash Tank GitHub Profile"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-[#E5E5E0] bg-white text-[#171714] hover:text-[#4169E1] hover:border-[#4169E1] hover:bg-[#EEF2FF]/60 transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#4169E1]/40"
            >
              <Github className="w-[18px] h-[18px] shrink-0 fill-current" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Yash Tank LinkedIn Profile"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-[#E5E5E0] bg-white text-[#171714] hover:text-[#4169E1] hover:border-[#4169E1] hover:bg-[#EEF2FF]/60 transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#4169E1]/40"
            >
              <Linkedin className="w-[18px] h-[18px] shrink-0 fill-current" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label={`Send direct email to ${portfolioData.personal.email}`}
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-[#E5E5E0] bg-white text-[#171714] hover:text-[#4169E1] hover:border-[#4169E1] hover:bg-[#EEF2FF]/60 transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#4169E1]/40"
            >
              <Mail className="w-[18px] h-[18px] shrink-0 text-[#171714] hover:text-[#4169E1]" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Return to top of page"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#171714] text-white hover:bg-[#4169E1] hover:scale-105 transition-all shadow-xs ml-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4169E1]/40"
            >
              <ArrowUp className="w-[18px] h-[18px] stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Copyright & Technology Stack Row */}
        <div className="pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#454545] text-center sm:text-left">
          <span className="text-[14px] sm:text-[15px] font-normal leading-relaxed">
            &copy; {new Date().getFullYear()} <strong className="font-semibold text-[#171714]">{portfolioData.personal.name}</strong>. All rights reserved.
          </span>
          <span className="font-mono text-[13px] sm:text-[14px] font-medium text-[#171714] bg-white border border-[#E5E5E0] px-3 py-1 rounded-lg shadow-2xs">
            React.js • Tailwind CSS • Vite
          </span>
        </div>

      </div>
    </footer>
  );
}
