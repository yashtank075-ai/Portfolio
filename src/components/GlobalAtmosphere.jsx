import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GlobalAtmosphere() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse position state with lerp
  const mouseRef = useRef({ targetX: 0.5, targetY: 0.3, currentX: 0.5, currentY: 0.3 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });
  const animFrameId = useRef(null);

  // Check screen size and reduced motion settings
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Section Observer for scroll-based atmosphere shift
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lerped Mouse movement loop using requestAnimationFrame
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const updateMouse = () => {
      const { targetX, targetY, currentX, currentY } = mouseRef.current;
      // Smooth linear interpolation (lerp factor 0.04)
      const nextX = currentX + (targetX - currentX) * 0.04;
      const nextY = currentY + (targetY - currentY) * 0.04;

      mouseRef.current.currentX = nextX;
      mouseRef.current.currentY = nextY;

      setMousePos({ x: nextX, y: nextY });

      animFrameId.current = requestAnimationFrame(updateMouse);
    };

    animFrameId.current = requestAnimationFrame(updateMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isMobile, prefersReducedMotion]);

  // Section atmospheric configuration presets
  const sectionAtmosphere = {
    home: {
      light1: 'top-[-10%] right-[-5%] w-[65vw] h-[65vw] opacity-25 rotate-[-12deg]',
      light2: 'bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] opacity-20 rotate-[15deg]',
      planeAccent: 'rgba(56, 189, 248, 0.12)',
      accentX: '75%',
      accentY: '25%',
    },
    about: {
      light1: 'top-[10%] left-[-15%] w-[70vw] h-[60vw] opacity-20 rotate-[20deg]',
      light2: 'bottom-[5%] right-[-5%] w-[45vw] h-[45vw] opacity-15 rotate-[-10deg]',
      planeAccent: 'rgba(99, 102, 241, 0.10)',
      accentX: '20%',
      accentY: '45%',
    },
    skills: {
      light1: 'top-[20%] right-[5%] w-[55vw] h-[55vw] opacity-22 rotate-[-5deg]',
      light2: 'bottom-[10%] left-[5%] w-[60vw] h-[50vw] opacity-18 rotate-[25deg]',
      planeAccent: 'rgba(14, 165, 233, 0.10)',
      accentX: '80%',
      accentY: '50%',
    },
    projects: {
      light1: 'top-[15%] left-[10%] w-[80vw] h-[50vw] opacity-24 rotate-[-15deg]',
      light2: 'bottom-[15%] right-[0%] w-[55vw] h-[55vw] opacity-18 rotate-[10deg]',
      planeAccent: 'rgba(6, 182, 212, 0.12)',
      accentX: '50%',
      accentY: '60%',
    },
    experience: {
      light1: 'top-[5%] right-[-10%] w-[75vw] h-[40vw] opacity-18 rotate-[5deg]',
      light2: 'bottom-[20%] left-[-5%] w-[50vw] h-[50vw] opacity-15 rotate-[-20deg]',
      planeAccent: 'rgba(59, 130, 246, 0.10)',
      accentX: '30%',
      accentY: '40%',
    },
    education: {
      light1: 'top-[25%] left-[-10%] w-[50vw] h-[50vw] opacity-15 rotate-[15deg]',
      light2: 'bottom-[5%] right-[10%] w-[55vw] h-[45vw] opacity-15 rotate-[-12deg]',
      planeAccent: 'rgba(99, 102, 241, 0.08)',
      accentX: '70%',
      accentY: '70%',
    },
    contact: {
      light1: 'top-[10%] right-[10%] w-[60vw] h-[60vw] opacity-25 rotate-[-25deg]',
      light2: 'bottom-[-10%] left-[15%] w-[65vw] h-[50vw] opacity-20 rotate-[18deg]',
      planeAccent: 'rgba(6, 182, 212, 0.14)',
      accentX: '50%',
      accentY: '80%',
    },
  };

  const currentConfig = sectionAtmosphere[activeSection] || sectionAtmosphere.home;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden select-none transition-colors duration-700"
      style={{
        backgroundColor: 'var(--bg-primary, #04060b)',
      }}
    >
      {/* LAYER 1: Deep Atmospheric Tonal Gradient Base */}
      <div 
        className="absolute inset-0 opacity-100 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(120% 120% at ${currentConfig.accentX} ${currentConfig.accentY}, rgba(15, 25, 45, 0.9) 0%, rgba(6, 10, 18, 0.97) 50%, rgba(4, 6, 11, 1) 100%),
            linear-gradient(180deg, rgba(9, 16, 30, 0.7) 0%, rgba(3, 5, 10, 0.95) 100%)
          `
        }}
      />

      {/* LAYER 2: Abstract Architectural Light Planes (Large Blurred 3D Form Surfaces) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Architectural Light Plane 1 (Upper) */}
        <motion.div
          animate={{
            rotate: activeSection === 'projects' ? -18 : activeSection === 'about' ? 12 : -8,
            scale: activeSection === 'skills' ? 1.08 : 1,
            opacity: activeSection === 'home' ? 0.95 : 0.75
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`absolute rounded-[40%] blur-[80px] md:blur-[110px] transition-all duration-1000 ${currentConfig.light1}`}
          style={{
            background: `linear-gradient(135deg, rgba(28, 45, 76, 0.6) 0%, rgba(12, 22, 40, 0.3) 60%, transparent 100%)`,
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        />

        {/* Architectural Light Plane 2 (Lower/Counter Balance) */}
        <motion.div
          animate={{
            rotate: activeSection === 'experience' ? -15 : activeSection === 'contact' ? 22 : 10,
            scale: activeSection === 'contact' ? 1.1 : 1,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`absolute rounded-[45%] blur-[70px] md:blur-[100px] transition-all duration-1000 ${currentConfig.light2}`}
          style={{
            background: `linear-gradient(225deg, ${currentConfig.planeAccent} 0%, rgba(14, 24, 42, 0.35) 50%, transparent 90%)`,
          }}
        />

        {/* Subtle Horizontal Depth Sheet */}
        <div 
          className="absolute top-1/3 left-[-20%] w-[140vw] h-[250px] rotate-[-7deg] opacity-30 blur-[60px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(38, 64, 105, 0.4) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* LAYER 3: Precise Technical Contour Lines SVG */}
      <div className="absolute inset-0 opacity-60 dark:opacity-50">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 900" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural Surface Contours */}
          <g stroke="currentColor" className="text-slate-400/35 dark:text-cyan-300/25" strokeWidth="0.85">
            {/* Curved Surface Flow Line 1 */}
            <path 
              d="M-100 150 C 350 400, 850 -50, 1540 220" 
              strokeDasharray="4 4" 
              opacity="0.8"
            />
            
            {/* Curved Surface Flow Line 2 */}
            <path 
              d="M-50 450 C 400 200, 950 650, 1500 380" 
            />
            
            {/* Curved Surface Flow Line 3 (Lower depth horizon) */}
            <path 
              d="M-150 780 C 500 550, 900 850, 1550 680" 
              strokeDasharray="8 6" 
              opacity="0.7"
            />

            {/* Precision Architectural Grid Coordinates (Minimal Crosses & Ticks) */}
            <g opacity="0.6" strokeWidth="1">
              <path d="M 120 180 L 130 180 M 125 175 L 125 185" />
              <path d="M 1320 240 L 1330 240 M 1325 235 L 1325 245" />
              <path d="M 240 720 L 250 720 M 245 715 L 245 725" />
              <path d="M 1180 680 L 1190 680 M 1185 675 L 1185 685" />
            </g>

            {/* Micro Structural Points */}
            <circle cx="350" cy="400" r="1.5" fill="currentColor" opacity="0.7" />
            <circle cx="850" cy="220" r="1.5" fill="currentColor" opacity="0.7" />
            <circle cx="950" cy="650" r="1.5" fill="currentColor" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* LAYER 4: Interactive Lerped Smooth Mouse Atmospheric Spotlight (Desktop Only) */}
      {!isMobile && !prefersReducedMotion && (
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(750px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(56, 189, 248, 0.045), rgba(15, 23, 42, 0.01) 60%, transparent 80%)`,
          }}
        />
      )}

      {/* LAYER 5: Ultra-fine Tactile Grain Texture Overlay (Prevents banding & adds quiet luxury feel) */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="atmosphere-noise">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#atmosphere-noise)" />
        </svg>
      </div>

      {/* Subtle Bottom Ambient Gradient Anchor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(4, 6, 11, 0.8) 0%, transparent 100%)'
        }}
      />
    </div>
  );
}
