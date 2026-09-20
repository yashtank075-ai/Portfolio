import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code2, GitCommit, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function GithubSection() {
  const { username, profileUrl, tagline, pinnedRepos } = portfolioData.github;

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl premium-card space-y-10 overflow-hidden"
        >
          <div className="premium-card-accent" />
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Info Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 border-b border-slate-200 dark:border-white/10 pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium">
                <Github className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>GITHUB ECOSYSTEM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
                Code. Build. <span className="text-blue-600 dark:text-blue-400">Improve.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
                {tagline}
              </p>
            </div>

            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-blue-500/40 shadow-lg transition-all group self-start md:self-auto"
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>Visit @{username} Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Repositories Grid */}
          <div className="relative z-10 space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Featured Open-Source Repositories</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pinnedRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="p-5 rounded-2xl premium-card hover-github-card flex flex-col justify-between space-y-4 group overflow-hidden"
                >
                  <div className="premium-card-accent" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                        {repo.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-400">
                        {repo.language}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-white/5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Security & Standards Note */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Clean Code Principles & Git Workflow</span>
            </div>
            <span>Configurable GitHub Data Layer</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
