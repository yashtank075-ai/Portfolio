import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 80;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E5E5E0] py-3.5 shadow-sm'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Yash Tank - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#171717] text-white flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105 shadow-sm">
              {portfolioData.personal.monogram || 'YT'}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#171717] group-hover:text-[#4169E1] transition-colors leading-snug">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-[#737373] leading-none">
                Developer Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-[#F2F3F0]/80 border border-[#E5E5E0] px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal font-sans transition-all ${
                    isActive
                      ? 'bg-white text-[#4169E1] shadow-xs'
                      : 'text-[#737373] hover:text-[#171717]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Yash Tank Resume in PDF format"
              className="btn-secondary !py-2 !px-3.5 !text-xs !rounded-xl"
            >
              <FileText className="w-4 h-4 text-[#4169E1]" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="btn-primary !py-2 !px-4 !text-xs !rounded-xl"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#E5E5E0] text-[#171717] bg-white active:scale-95 transition-all shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation"
          className="fixed inset-x-0 top-[65px] bottom-0 bg-[#FAFAF8] border-t border-[#E5E5E0] p-6 z-50 flex flex-col justify-between overflow-y-auto md:hidden"
        >
          <nav className="space-y-2 pt-2 text-left" aria-label="Mobile Navigation Links">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left flex items-center justify-between p-3.5 rounded-xl font-medium font-sans text-base transition-colors ${
                    isActive 
                      ? 'bg-[#E9E5FF] text-[#4169E1]'
                      : 'text-[#171717] hover:bg-[#F2F3F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#737373]">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#E5E5E0] space-y-3 font-mono text-xs">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Yash Tank Resume in PDF format"
              className="btn-secondary w-full justify-center"
            >
              <FileText className="w-4 h-4 text-[#4169E1]" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs text-[#737373] pt-2">
              {portfolioData.personal.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
