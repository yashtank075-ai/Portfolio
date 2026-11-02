import React from 'react';
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
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased overflow-x-hidden w-full max-w-full">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Google Flow Ambient Animated Background System (z-0, fixed, non-blocking) */}
      <FlowBackground />

      <Navbar />
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
