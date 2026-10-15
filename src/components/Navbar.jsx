import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'work', 'about', 'services', 'process', 'contact'];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 80;
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

  // Keyboard navigation & lock scroll for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        buttonRef.current?.focus();
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
          ? 'bg-[#F5F2EB]/95 dark:bg-[#121210]/95 backdrop-blur-md border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Wordmark */}
          <a
            href="#home"
            className="group flex items-baseline gap-2.5 text-left focus:outline-none"
            aria-label="Yash Tank - Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#171714] dark:text-[#F5F2EB] group-hover:text-[#8C734B] dark:group-hover:text-[#D9C8A5] transition-colors">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden md:flex items-center gap-7 font-sans text-xs sm:text-sm tracking-wider uppercase font-semibold"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`editorial-link text-xs sm:text-sm transition-colors py-1 ${
                    isActive
                      ? 'text-[#8C734B] dark:text-[#D9C8A5] font-bold'
                      : 'text-[#423F39] dark:text-[#C4C0B6] hover:text-[#171714] dark:hover:text-[#F5F2EB]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle (Ivory / Noir) */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'Warm Ivory' : 'Noir Luxury'} mode`}
              className="w-10 h-10 flex items-center justify-center border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] text-[#171714] dark:text-[#F5F2EB] hover:border-[#8C734B] dark:hover:border-[#D9C8A5] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D9C8A5]" /> : <Moon className="w-4 h-4 text-[#423F39]" />}
            </button>

            {/* Resume Link */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs sm:text-sm border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] text-[#171714] dark:text-[#F5F2EB] hover:bg-[#E8E4DB] dark:hover:bg-[#1E1E1A] transition-colors min-h-[40px]"
            >
              <FileText className="w-4 h-4 text-[#8C734B] dark:text-[#D9C8A5]" />
              <span>Resume</span>
            </a>

            {/* Contact Action */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs sm:text-sm bg-[#171714] dark:bg-[#F5F2EB] text-[#F5F2EB] dark:text-[#171714] hover:bg-[#8C734B] dark:hover:bg-[#D9C8A5] transition-colors font-semibold min-h-[40px]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[#171714] dark:text-[#F5F2EB]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D9C8A5]" /> : <Moon className="w-4 h-4 text-[#5A574F]" />}
            </button>

            <button
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="w-10 h-10 flex items-center justify-center border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[#171714] dark:text-[#F5F2EB]"
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
          ref={menuRef}
          className="fixed inset-0 top-[73px] bg-[#F5F2EB] dark:bg-[#121210] border-t border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-6 z-50 flex flex-col justify-between overflow-y-auto md:hidden"
        >
          <nav className="space-y-6 pt-4 text-left" aria-label="Mobile Navigation Links">
            {navItems.map((item, idx) => (
              <div key={item.label} className="border-b border-[#D8D3C8]/60 dark:border-[rgba(245,242,235,0.1)] pb-4">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left flex items-center justify-between font-serif text-3xl text-[#171714] dark:text-[#F5F2EB] hover:text-[#8C734B] dark:hover:text-[#D9C8A5] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#8C734B] dark:text-[#D9C8A5]">
                    0{idx + 1}
                  </span>
                </button>
              </div>
            ))}
          </nav>

          <div className="pt-8 space-y-3 font-mono text-xs">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] flex items-center justify-center gap-2 text-[#171714] dark:text-[#F5F2EB]"
            >
              <FileText className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#171714] dark:bg-[#F5F2EB] text-[#F5F2EB] dark:text-[#171714] flex items-center justify-center gap-2 font-medium"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-[10px] text-[#5A574F] dark:text-[#A8A49A] pt-4">
              {portfolioData.personal.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
