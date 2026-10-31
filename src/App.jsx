import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FlowBackground from './components/FlowBackground';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] dark:bg-[#0F1115] text-[#171717] dark:text-[#F3F4F6] font-sans antialiased selection:bg-[#E9E5FF] selection:text-[#171717] transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      {/* Google Flow Ambient Animated Background System (z-0, fixed, non-blocking) */}
      <FlowBackground />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
