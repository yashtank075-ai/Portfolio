import React from 'react';
import { Utensils, BookOpen, Shirt, Lock, Check } from 'lucide-react';

export default function ProjectPreviewGraphic({ projectId }) {
  if (projectId === 'food-ordering') {
    return (
      <div className="w-full bg-slate-50 dark:bg-[#0b101c] rounded-2xl border border-slate-200 dark:border-white/10 p-3.5 sm:p-6 space-y-3.5 font-mono shadow-lg relative overflow-hidden group/graphic text-left">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover/graphic:bg-cyan-500/15 transition-all duration-500" />

        {/* Console Header Bar */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-[#141d2e] border border-blue-500/20 dark:border-white/10 text-blue-600 dark:text-cyan-400 shrink-0">
              <Utensils className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans truncate">
              QuickBite Console Preview
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium">Cart State: Active (2 Items)</span>
          </div>
        </div>

        {/* Dual Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
          {/* Card 1 */}
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-colors shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-[#0d1d18] border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 uppercase font-semibold">
                ARTISAN CHOICE
              </span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">Margherita Pizza</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">Fresh basil, mozzarella, marinara</div>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">$12.99</span>
              <span className="text-[11px] font-mono bg-slate-100 dark:bg-[#192234] border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-lg text-slate-700 dark:text-slate-200 flex items-center gap-1">
                Qty: 1 <Check className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-colors shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 dark:bg-[#0d1828] border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                CHEF SPECIAL
              </span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">Signature Burger</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">Double patty, caramelized onions</div>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">$9.50</span>
              <span className="text-[11px] font-mono bg-slate-100 dark:bg-[#192234] border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-lg text-slate-700 dark:text-slate-200 flex items-center gap-1">
                Qty: 1 <Check className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Order Calculation Bar */}
        <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs relative z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Subtotal</div>
              <div className="font-bold text-slate-900 dark:text-white font-mono text-xs sm:text-sm">$22.49</div>
            </div>
            <div className="h-5 w-px bg-slate-200 dark:bg-white/10" />
            <div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Est. Tax</div>
              <div className="font-bold text-slate-900 dark:text-white font-mono text-xs sm:text-sm">$1.80</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Total</div>
              <div className="font-bold text-blue-600 dark:text-cyan-300 font-mono text-sm sm:text-base">$24.29</div>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-semibold bg-emerald-500/10 dark:bg-[#0a1814] border border-emerald-500/30 px-2 sm:px-3 py-1 rounded-lg">
              <Lock className="w-3 h-3 shrink-0" />
              <span>Mongo Checkout</span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  if (projectId === 'library-management') {
    return (
      <div className="w-full bg-slate-50 dark:bg-[#0b101c] rounded-2xl border border-slate-200 dark:border-white/10 p-3.5 sm:p-6 space-y-3.5 font-mono shadow-lg relative overflow-hidden group/graphic text-left">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover/graphic:bg-blue-500/15 transition-all duration-500" />

        {/* Console Header Bar */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-[#141d2e] border border-blue-500/20 dark:border-white/10 text-blue-600 dark:text-blue-400 shrink-0">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans truncate">
              LibTrack Console Preview
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium">Loans State: Active (184 Books)</span>
          </div>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
          {/* Card 1 */}
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 dark:bg-[#0d1828] border border-blue-500/30 text-blue-600 dark:text-blue-400 uppercase font-semibold">
                FEATURED BOOK
              </span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">Clean Code</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">Robert C. Martin • Student #104</div>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-300">Ref: BK-9201</span>
              <span className="text-[11px] font-mono bg-amber-500/10 dark:bg-[#192234] border border-amber-500/30 text-amber-600 dark:text-amber-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                Issued <Check className="w-3 h-3 text-amber-500 dark:text-amber-400" />
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-[#0d1d18] border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 uppercase font-semibold">
                NEW ARRIVAL
              </span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">Design Patterns</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">Gang of Four • CS Dept</div>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-300">Ref: BK-4012</span>
              <span className="text-[11px] font-mono bg-emerald-500/10 dark:bg-[#192234] border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                Available <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Summary Bar */}
        <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs relative z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Catalog</div>
              <div className="font-bold text-slate-900 dark:text-white font-mono text-xs sm:text-sm">1,240</div>
            </div>
            <div className="h-5 w-px bg-slate-200 dark:bg-white/10" />
            <div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Active Loans</div>
              <div className="font-bold text-blue-600 dark:text-blue-400 font-mono text-xs sm:text-sm">184</div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-semibold bg-emerald-500/10 dark:bg-[#0a1814] border border-emerald-500/30 px-2 sm:px-3 py-1 rounded-lg">
            <Lock className="w-3 h-3 shrink-0" />
            <span>JWT Auth</span>
          </div>
        </div>

      </div>
    );
  }

  // E-Commerce Clothing Website
  return (
    <div className="w-full bg-slate-50 dark:bg-[#0b101c] rounded-2xl border border-slate-200 dark:border-white/10 p-3.5 sm:p-6 space-y-3.5 font-mono shadow-lg relative overflow-hidden group/graphic text-left">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover/graphic:bg-purple-500/15 transition-all duration-500" />

      {/* Console Header Bar */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 gap-2 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-500/10 dark:bg-[#141d2e] border border-purple-500/20 dark:border-white/10 text-purple-600 dark:text-purple-400 shrink-0">
            <Shirt className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans truncate">
            Aura Fashion Console Preview
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium">Cart State: Active (2 Items)</span>
        </div>
      </div>

      {/* Dual Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
        {/* Card 1 */}
        <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 space-y-2 hover:border-purple-500/40 transition-colors shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 dark:bg-[#1d1228] border border-purple-500/30 text-purple-600 dark:text-purple-300 uppercase font-semibold">
              BESTSELLER
            </span>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">Minimalist Hoodie</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">100% Organic Cotton • Black / L</div>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">$49.00</span>
            <span className="text-[11px] font-mono bg-slate-100 dark:bg-[#192234] border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-lg text-slate-700 dark:text-slate-200 flex items-center gap-1">
              Qty: 1 <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 space-y-2 hover:border-purple-500/40 transition-colors shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 dark:bg-[#0d1828] border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
              NEW RELEASE
            </span>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">Oversized Denim</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">Vintage Indigo Wash • Size M</div>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">$65.00</span>
            <span className="text-[11px] font-mono bg-slate-100 dark:bg-[#192234] border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-lg text-slate-700 dark:text-slate-200 flex items-center gap-1">
              Qty: 1 <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Calculation Bar */}
      <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs relative z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Subtotal</div>
            <div className="font-bold text-slate-900 dark:text-white font-mono text-xs sm:text-sm">$114.00</div>
          </div>
          <div className="h-5 w-px bg-slate-200 dark:bg-white/10" />
          <div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Shipping</div>
            <div className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-xs sm:text-sm">FREE</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">Total</div>
            <div className="font-bold text-purple-600 dark:text-purple-300 font-mono text-sm sm:text-base">$114.00</div>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-semibold bg-emerald-500/10 dark:bg-[#0a1814] border border-emerald-500/30 px-2 sm:px-3 py-1 rounded-lg">
            <Lock className="w-3 h-3 shrink-0" />
            <span>Checkout</span>
          </div>
        </div>
      </div>

    </div>
  );
}
