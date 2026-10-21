import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const footerNav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#services' },
  { label: 'Methodology', href: '#process' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] bg-[#EFECE3] dark:bg-[#0E0E0C] text-[#171714] dark:text-[#F5F2EB] py-10 sm:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)]">
          
          {/* Identity Colophon */}
          <div className="space-y-1.5 text-left">
            <span className="font-serif text-2xl font-normal text-[#171714] dark:text-[#F5F2EB]">
              {portfolioData.personal.name}
            </span>
            <p className="font-mono text-xs sm:text-sm text-[#423F39] dark:text-[#C4C0B6]">
              MERN Stack Developer &amp; Website Developer • Surat, Gujarat, India
            </p>
          </div>

          {/* Navigation Links */}
          <nav 
            className="flex flex-wrap items-center gap-6 font-sans text-xs sm:text-sm uppercase tracking-wider text-[#423F39] dark:text-[#C4C0B6] font-semibold"
            aria-label="Footer Navigation"
          >
            {footerNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#171714] dark:hover:text-[#F5F2EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Yash Tank GitHub Profile (opens in new tab)"
              className="w-10 h-10 flex items-center justify-center border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[#423F39] dark:text-[#C4C0B6] hover:text-[#171714] dark:hover:text-[#F5F2EB] hover:border-[#8C734B] dark:hover:border-[#D9C8A5] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Yash Tank LinkedIn Profile (opens in new tab)"
              className="w-10 h-10 flex items-center justify-center border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[#423F39] dark:text-[#C4C0B6] hover:text-[#171714] dark:hover:text-[#F5F2EB] hover:border-[#8C734B] dark:hover:border-[#D9C8A5] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label={`Send direct email to ${portfolioData.personal.email}`}
              className="w-10 h-10 flex items-center justify-center border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[#423F39] dark:text-[#C4C0B6] hover:text-[#171714] dark:hover:text-[#F5F2EB] hover:border-[#8C734B] dark:hover:border-[#D9C8A5] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Return to top of page"
              className="w-10 h-10 flex items-center justify-center bg-[#171714] text-[#FAF8F3] dark:bg-[#F5F2EB] dark:text-[#171714] hover:bg-[#8C734B] dark:hover:bg-[#D9C8A5] transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Colophon & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] text-center sm:text-left">
          <span>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
          <span>
            Handcrafted with React.js, Node.js &amp; Tailwind CSS.
          </span>
        </div>

      </div>
    </footer>
  );
}
