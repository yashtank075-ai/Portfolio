import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-100 dark:from-blue-950/50 dark:via-indigo-950/40 dark:to-slate-900/80 border border-blue-500/30 backdrop-blur-2xl relative overflow-hidden shadow-2xl text-center space-y-6"
        >
          {/* Dynamic Cursor-Following Radial Spotlight */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-90"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x || 300}px ${mousePos.y || 150}px, rgba(59, 130, 246, 0.18), transparent 80%)`
            }}
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-300 text-xs sm:text-sm font-mono font-medium z-10 relative">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>READY TO COLLABORATE?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100 max-w-2xl mx-auto leading-tight z-10 relative">
            Have an idea? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Let's turn it into a real product.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed z-10 relative">
            Whether you are looking for a dedicated MERN stack developer for full-time roles, internships, or web projects, I'd love to help bring your vision to life.
          </p>

          <div className="pt-4 z-10 relative flex justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/30 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all border border-blue-400/30 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
