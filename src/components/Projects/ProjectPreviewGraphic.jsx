import React from 'react';
import { ShoppingBag, BookOpen, Shirt, Film, Search, Star, Plus, CheckCircle, Database, Server, UserCheck } from 'lucide-react';

export default function ProjectPreviewGraphic({ projectId }) {
  if (projectId === 'food-ordering') {
    return (
      <div className="w-full h-auto min-h-[280px] sm:h-96 bg-[#0b101c] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-all duration-500" />
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shrink-0">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">BiteExpress MERN App</div>
              <div className="text-[10px] sm:text-xs text-amber-400 font-mono">REST API: /api/v1/food/menu</div>
            </div>
          </div>
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
            MongoDB
          </span>
        </div>

        {/* Content Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-3 z-10">
          {[
            { title: "Margherita Pizza", price: "$12.99", tag: "Popular", bg: "bg-amber-500/10 border-amber-500/25" },
            { title: "Special Burger", price: "$9.50", tag: "Fast Delivery", bg: "bg-orange-500/10 border-orange-500/25" },
            { title: "Pasta Primavera", price: "$14.20", tag: "Chef Choice", bg: "bg-amber-500/10 border-amber-500/25" },
            { title: "Fresh Smoothie", price: "$5.99", tag: "Beverage", bg: "bg-orange-500/10 border-orange-500/25" }
          ].map((item, idx) => (
            <div key={idx} className={`p-2.5 sm:p-3.5 rounded-xl border ${item.bg} backdrop-blur-md flex items-center justify-between sm:flex-col sm:justify-between transition-transform group-hover:scale-[1.02] duration-300 shadow-sm gap-2`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full">
                <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate">{item.title}</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-medium self-start sm:self-auto mt-0.5 sm:mt-0">{item.tag}</span>
              </div>
              <div className="flex items-center justify-between w-full mt-0 sm:mt-2">
                <span className="text-xs sm:text-sm font-bold text-amber-400 font-mono">{item.price}</span>
                <button className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs hover:bg-amber-400 transition-colors shadow-sm shrink-0">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Cart Bar */}
        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between z-10 bg-slate-900/80 rounded-xl px-3 sm:px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-sm text-slate-200 font-medium">2 Items in Cart</span>
          </div>
          <span className="text-[11px] sm:text-sm font-mono font-bold text-emerald-400">Total: $22.49</span>
        </div>
      </div>
    );
  }

  if (projectId === 'library-management') {
    return (
      <div className="w-full h-auto min-h-[280px] sm:h-96 bg-[#0b101c] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl group-hover:bg-blue-500/25 transition-all duration-500" />
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">LibTrack Admin</div>
              <div className="text-[10px] sm:text-xs text-blue-400 font-mono">Issued & Returned</div>
            </div>
          </div>
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
            JWT Auth
          </span>
        </div>

        {/* Content list */}
        <div className="space-y-2.5 my-auto py-3 z-10">
          {[
            { title: "Clean Code — Robert Martin", student: "Yash Tank (BCA)", status: "Issued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
            { title: "Design Patterns — GoF", student: "Alex Rivers", status: "Returned", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
            { title: "MongoDB In Action", student: "Sarah Jenkins", status: "Issued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" }
          ].map((book, idx) => (
            <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between transition-transform group-hover:scale-[1.01] duration-300 gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-1.5 h-6 rounded-full bg-blue-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-slate-100 truncate">{book.title}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono truncate">Student: {book.student}</div>
                </div>
              </div>
              <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-mono font-medium border shrink-0 ${book.color}`}>
                {book.status}
              </span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between z-10 bg-slate-900/80 rounded-xl px-3 sm:px-4 py-2 text-[11px] sm:text-xs">
          <span className="text-slate-300">Total Books: <strong className="text-slate-100 font-mono">1,240</strong></span>
          <span className="text-slate-300">Loans: <strong className="text-blue-400 font-mono">184</strong></span>
        </div>
      </div>
    );
  }

  if (projectId === 'ecommerce-clothing') {
    return (
      <div className="w-full h-auto min-h-[280px] sm:h-96 bg-[#0b101c] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-all duration-500" />
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shrink-0">
              <Shirt className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">Aura Fashion E-Commerce</div>
              <div className="text-[10px] sm:text-xs text-purple-400 font-mono">React + Redux State</div>
            </div>
          </div>
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
            Store
          </span>
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-3 z-10">
          {[
            { title: "Minimal Hoodie", tag: "Black / L", price: "$49", rating: "4.9" },
            { title: "Oversized Denim", tag: "Blue / M", price: "$65", rating: "4.8" },
            { title: "Cotton Tee", tag: "White / S", price: "$29", rating: "5.0" },
            { title: "Urban Jacket", tag: "Charcoal / XL", price: "$89", rating: "4.7" }
          ].map((prod, idx) => (
            <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-purple-500/20 flex items-center justify-between sm:flex-col sm:justify-between transition-transform group-hover:scale-[1.02] duration-300 gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full min-w-0">
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-slate-100 truncate">{prod.title}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono mt-0.5">{prod.tag}</div>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-amber-400 font-mono mt-0.5 sm:mt-0 shrink-0">
                  <Star className="w-3 h-3 fill-amber-400" /> {prod.rating}
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-0 sm:mt-2">
                <span className="text-xs sm:text-sm font-bold text-purple-300 font-mono">{prod.price}</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono shrink-0">In Stock</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between z-10 bg-slate-900/80 rounded-xl px-3 sm:px-4 py-2 text-[11px] sm:text-xs">
          <span className="text-slate-300">Category Filter</span>
          <span className="font-mono text-purple-400 font-semibold">MongoDB Product DB</span>
        </div>
      </div>
    );
  }

  // Movie browser default
  return (
    <div className="w-full h-auto min-h-[280px] sm:h-96 bg-[#0b101c] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-all duration-500" />
      
      {/* Header with Search */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shrink-0">
            <Film className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-slate-100">CineSearch Explorer</div>
            <div className="text-[10px] sm:text-xs text-cyan-400 font-mono">External REST API</div>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-lg border border-white/10 shrink-0">
          <Search className="w-3 h-3 text-slate-400" />
          <span className="text-[10px] sm:text-xs text-slate-400 font-mono">Search...</span>
        </div>
      </div>

      {/* Cards preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-3 z-10">
        {[
          { title: "Interstellar", year: "2014", genre: "Sci-Fi", score: "8.7" },
          { title: "The Dark Knight", year: "2008", genre: "Action", score: "9.0" },
          { title: "Inception", year: "2010", genre: "Sci-Fi", score: "8.8" },
          { title: "Oppenheimer", year: "2023", genre: "Drama", score: "8.9" }
        ].map((movie, idx) => (
          <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-center justify-between sm:flex-col sm:justify-between transition-transform group-hover:scale-[1.02] duration-300 gap-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full min-w-0">
              <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate">{movie.title}</span>
              <span className="text-[9px] sm:text-xs px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono shrink-0 self-start sm:self-auto mt-0.5 sm:mt-0">{movie.score} ★</span>
            </div>
            <div className="flex items-center justify-between w-full mt-0 sm:mt-2">
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono">{movie.year}</span>
              <span className="text-[10px] sm:text-xs text-cyan-400 font-medium">{movie.genre}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between z-10 bg-slate-900/80 rounded-xl px-3 sm:px-4 py-2 text-[11px] sm:text-xs">
        <span className="text-slate-300">API Status: <span className="text-emerald-400 font-mono font-bold">200 OK</span></span>
        <span className="font-mono text-cyan-400 font-semibold">Live Search</span>
      </div>
    </div>
  );
}
