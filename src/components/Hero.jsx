import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { await navigator.clipboard?.writeText(portfolioData.personal.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-8">
        <div>
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[.2em] text-[var(--accent-cyan)]">Available for junior developer roles</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[.95] text-[var(--text-primary)] sm:text-7xl lg:text-[7.5rem]">Yash<br /><span className="text-[var(--accent-blue)]">Tank.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">BCA graduate and full stack developer building modular interfaces, reliable APIs, and database-driven products with React, Next.js, Node.js, and MongoDB/PostgreSQL.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">Explore selected work <ArrowUpRight className="h-4 w-4" /></a>
            <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">View resume</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-sm text-[var(--text-muted)]">
            <a href={portfolioData.personal.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text-primary)]"><GithubIcon className="h-4 w-4" /> GitHub</a>
            <a href={portfolioData.personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text-primary)]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={`mailto:${portfolioData.personal.email}`} className="inline-flex items-center gap-2 hover:text-[var(--text-primary)]"><Mail className="h-4 w-4" /> Email</a>
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)]" aria-label="Copy email address">{copied ? <Check className="h-4 w-4 text-[var(--accent-cyan)]" /> : <Copy className="h-4 w-4" />}{copied ? 'Copied' : 'Copy email'}</button>
          </div>
        </div>
        <div className="relative lg:pb-4">
          <div className="absolute -inset-8 rounded-full bg-[var(--accent-blue)]/10 blur-3xl" aria-hidden="true" />
          <div className="relative border-l border-t border-[var(--border-strong)] bg-[var(--bg-card)]/70 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.18em] text-[var(--text-muted)]"><span>developer.profile</span><span className="text-[var(--accent-cyan)]">01 / 04</span></div>
            <div className="space-y-5 font-mono text-xs sm:text-sm"><p><span className="text-[var(--accent-blue)]">const</span> focus = <span className="text-[var(--accent-cyan)]">&quot;useful software&quot;</span>;</p><p><span className="text-[var(--accent-blue)]">const</span> stack = [<span className="text-[var(--accent-cyan)]">&quot;React&quot;</span>, <span className="text-[var(--accent-cyan)]">&quot;Node.js&quot;</span>, <span className="text-[var(--accent-cyan)]">&quot;PostgreSQL&quot;</span>];</p><p><span className="text-[var(--accent-blue)]">return</span> {'{'} accessible: <span className="text-[var(--accent-cyan)]">true</span>, shipped: <span className="text-[var(--accent-cyan)]">true</span> {'}'};</p></div>
            <div className="mt-12 flex items-end justify-between border-t border-white/10 pt-4 text-xs text-[var(--text-muted)]"><span>Full stack developer</span><span className="font-mono text-[var(--accent-cyan)]">IST / UTC+5:30</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
