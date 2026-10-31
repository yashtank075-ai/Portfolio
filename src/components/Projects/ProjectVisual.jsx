import React from 'react';
import { 
  Utensils, 
  BookOpen, 
  ShoppingBag, 
  Globe
} from 'lucide-react';

export default function ProjectVisual({ projectId }) {
  if (projectId === 'orainfotech') {
    return (
      <div className="w-full bg-[#F2F3F0] dark:bg-[#161920] p-3.5 sm:p-4 space-y-3 text-left">
        {/* Browser Frame Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-2.5 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            {/* URL bar */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 text-[11px] font-mono text-[#525252] dark:text-[#9CA3AF]">
              <Globe className="w-3 h-3 text-[#4169E1] shrink-0" />
              <span className="truncate max-w-[180px] sm:max-w-xs">https://www.orainfotech.com/</span>
            </div>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-800/40">
            Live Corporate Portal
          </span>
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative overflow-hidden rounded-xl border border-[#E5E5E0] dark:border-white/10 bg-white dark:bg-[#1C2029] aspect-video">
          <img 
            src="/orainfotech-preview.png" 
            alt="Orainfotech Corporate Website Redesign — Official Homepage Screenshot" 
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            width="1440"
            height="810"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-xs font-mono text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded">
              Client: Orainfotech (Corporate IT Services)
            </span>
          </div>
        </div>

        {/* Technical Sub-spec */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9CA3AF] pt-0.5 gap-2">
          <span>Stack: Next.js, React.js &amp; Tailwind CSS</span>
          <span className="text-[#4169E1] font-semibold">Scope: Service &amp; Marketing Pages</span>
        </div>
      </div>
    );
  }

  if (projectId === 'dwarkadhish-car-rent') {
    return (
      <div className="w-full bg-[#F2F3F0] dark:bg-[#161920] p-3.5 sm:p-4 space-y-3 text-left">
        {/* Browser Frame Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-2.5 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            {/* URL bar */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 text-[11px] font-mono text-[#525252] dark:text-[#9CA3AF]">
              <Globe className="w-3 h-3 text-[#4169E1] shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-xs">https://dwarkadhish-car-rent.vercel.app/</span>
            </div>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-800/40">
            Live Business Website
          </span>
        </div>

        {/* Real Vehicle Catalog Banner & Visual Specimen */}
        <div className="relative overflow-hidden rounded-xl border border-[#E5E5E0] dark:border-white/10 bg-[#0B1220] p-4 text-white shadow-inner">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-2 z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#D8B66A]/20 border border-[#D8B66A]/40 text-[#D8B66A] text-[10px] font-mono font-bold uppercase tracking-wider">
                Surat Car Rental Service
              </div>
              <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Dwarkadhish Car Rent
              </h4>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Self-drive car rentals in Surat, Gujarat. Verified fleet options with instant WhatsApp reservation.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[#D8B66A] border border-white/15">
                  12h: ₹2,500
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-emerald-400 border border-white/15">
                  24h: ₹3,500
                </span>
              </div>
            </div>

            <div className="w-full sm:w-1/2 relative aspect-[4/3] sm:aspect-auto sm:h-36 flex items-center justify-center">
              <img 
                src="/dwarkadhish-venue.png" 
                alt="Dwarkadhish Car Rent — Hyundai Venue Fleet Vehicle" 
                className="w-full max-h-32 object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>

        {/* Fleet Inventory Sub-cards */}
        <div className="grid grid-cols-2 gap-2.5 pt-0.5">
          <div className="p-2.5 rounded-lg bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 flex items-center gap-2.5">
            <img 
              src="/dwarkadhish-verna.png" 
              alt="Hyundai Verna" 
              className="w-14 h-10 object-contain shrink-0" 
              loading="lazy"
            />
            <div className="min-w-0">
              <span className="font-bold text-xs text-[#171717] dark:text-[#F3F4F6] block truncate">
                Hyundai Verna
              </span>
              <span className="font-mono text-[10px] text-[#737373] dark:text-[#9CA3AF] block truncate">
                Executive Sedan • ₹3,500 / 12h
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 flex items-center gap-2.5">
            <img 
              src="/dwarkadhish-swift.png" 
              alt="Maruti Suzuki Swift" 
              className="w-14 h-10 object-contain shrink-0" 
              loading="lazy"
            />
            <div className="min-w-0">
              <span className="font-bold text-xs text-[#171717] dark:text-[#F3F4F6] block truncate">
                Maruti Swift
              </span>
              <span className="font-mono text-[10px] text-[#737373] dark:text-[#9CA3AF] block truncate">
                Popular Hatchback • ₹2,500 / 12h
              </span>
            </div>
          </div>
        </div>

        {/* Technical Sub-spec */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9CA3AF] pt-0.5 gap-2">
          <span>Engineered with React 19, Tailwind CSS &amp; Vite</span>
          <span className="text-[#4169E1] font-semibold">Direct WhatsApp Booking Integration</span>
        </div>
      </div>
    );
  }

  if (projectId === 'food-ordering') {
    return (
      <div className="w-full bg-[#F2F3F0] dark:bg-[#161920] p-4 sm:p-5 space-y-3.5 text-left">
        {/* Masthead Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-3 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4169E1] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#171717] dark:text-[#F3F4F6] block">
                Food-Del Application Mockup
              </span>
              <span className="font-mono text-[11px] text-[#737373] dark:text-[#9CA3AF]">
                React Dynamic State // Express Order Flow // MongoDB
              </span>
            </div>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 text-[#4169E1] font-semibold">
            MERN Application
          </span>
        </div>

        {/* High-fidelity interactive UI display */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Menu Catalog Display */}
          <div className="sm:col-span-7 bg-white dark:bg-[#1C2029] rounded-xl border border-[#E5E5E0] dark:border-white/10 p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9CA3AF] border-b border-[#E5E5E0] dark:border-white/10 pb-2">
              <span className="font-bold text-[#171717] dark:text-[#F3F4F6]">Dynamic Menu Catalog</span>
              <span className="text-[#4169E1] font-semibold bg-[#E9E5FF] dark:bg-[#4169E1]/20 px-2 py-0.5 rounded text-[10px]">Filter: All Dishes</span>
            </div>
            
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 flex items-center justify-between gap-2 hover:border-[#4169E1]/40 transition-colors">
                <div className="min-w-0">
                  <div className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] truncate">
                    Artisan Margherita Pizza
                  </div>
                  <div className="text-[11px] text-[#737373] dark:text-[#9CA3AF] truncate">
                    San Marzano tomato, fresh mozzarella, basil
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-xs font-bold text-[#171717] dark:text-[#F3F4F6] block">
                    $14.00
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    In Cart (1)
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#161920] border border-[#E5E5E0] dark:border-white/10 flex items-center justify-between gap-2 hover:border-[#4169E1]/40 transition-colors">
                <div className="min-w-0">
                  <div className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] truncate">
                    Truffle Wild Tagliatelle
                  </div>
                  <div className="text-[11px] text-[#737373] dark:text-[#9CA3AF] truncate">
                    Wild forest mushrooms, parmesan crisp
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-xs font-bold text-[#171717] dark:text-[#F3F4F6] block">
                    $19.50
                  </span>
                  <span className="font-mono text-[10px] text-[#737373] dark:text-[#9CA3AF]">
                    Add +
                  </span>
                </div>
              </div>
            </div>

            {/* Cart preview bar */}
            <div className="pt-2 border-t border-[#E5E5E0] dark:border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#737373] dark:text-[#9CA3AF]">Synchronized Cart:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">$14.00 Total</span>
            </div>
          </div>

          {/* Endpoints & Architecture Column */}
          <div className="sm:col-span-5 bg-white dark:bg-[#1C2029] rounded-xl border border-[#E5E5E0] dark:border-white/10 p-3.5 space-y-2.5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] text-[#4169E1] uppercase tracking-wider block font-bold mb-2">
                REST API Pipeline
              </span>
              <ul className="font-mono text-[11px] text-[#737373] dark:text-[#9CA3AF] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">
                    GET
                  </span>
                  <span className="truncate">/api/food/list</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold text-[10px]">
                    POST
                  </span>
                  <span className="truncate">/api/cart/update</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold text-[10px]">
                    POST
                  </span>
                  <span className="truncate">/api/order/place</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[#E5E5E0] dark:border-white/10 font-mono text-[11px] text-[#737373] dark:text-[#9CA3AF] flex items-center justify-between">
              <span>Database:</span>
              <span className="text-[#171717] dark:text-[#F3F4F6] font-semibold">MongoDB Atlas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'library-management') {
    return (
      <div className="w-full bg-[#F2F3F0] dark:bg-[#161920] p-4 sm:p-5 space-y-3.5 text-left">
        {/* Masthead Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-3 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4169E1] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#171717] dark:text-[#F3F4F6] block">
                Library Ledger &amp; Inventory System
              </span>
              <span className="font-mono text-[11px] text-[#737373] dark:text-[#9CA3AF]">
                Relational Modeling // Issue &amp; Return Handlers
              </span>
            </div>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 text-[#4169E1] font-semibold">
            Administrative Platform
          </span>
        </div>

        {/* Ledger Layout */}
        <div className="bg-white dark:bg-[#1C2029] rounded-xl border border-[#E5E5E0] dark:border-white/10 p-3.5 space-y-2.5 font-mono text-xs">
          <div className="hidden sm:grid grid-cols-12 gap-2 text-[#737373] dark:text-[#9CA3AF] uppercase text-[11px] font-bold border-b border-[#E5E5E0] dark:border-white/10 pb-2">
            <span className="col-span-5">Book Title &amp; ISBN</span>
            <span className="col-span-4">Member Record</span>
            <span className="col-span-3 text-right">Loan Status</span>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-2 items-start sm:items-center py-2 border-b border-[#E5E5E0]/60 dark:border-white/5">
            <div className="sm:col-span-5">
              <span className="font-sans font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] block">
                Clean Code by Robert C. Martin
              </span>
              <span className="text-[10px] text-[#737373] dark:text-[#9CA3AF]">ISBN: 978-0132350884</span>
            </div>
            <div className="sm:col-span-4 text-xs text-[#525252] dark:text-[#9CA3AF]">
              Member: STD-2024-0419
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                ISSUED
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-2 items-start sm:items-center py-2 border-b border-[#E5E5E0]/60 dark:border-white/5">
            <div className="sm:col-span-5">
              <span className="font-sans font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] block">
                Database System Concepts (Silberschatz)
              </span>
              <span className="text-[10px] text-[#737373] dark:text-[#9CA3AF]">ISBN: 978-0078022159</span>
            </div>
            <div className="sm:col-span-4 text-xs text-[#525252] dark:text-[#9CA3AF]">
              Member: STD-2024-0112
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                RETURNED
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-2 items-start sm:items-center py-2">
            <div className="sm:col-span-5">
              <span className="font-sans font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] block">
                Introduction to Algorithms (CLRS)
              </span>
              <span className="text-[10px] text-[#737373] dark:text-[#9CA3AF]">ISBN: 978-0262033848</span>
            </div>
            <div className="sm:col-span-4 text-xs text-[#525252] dark:text-[#9CA3AF]">
              Stack: Available In Stacks
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                IN STOCK
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9CA3AF] pt-0.5 gap-2">
          <span>Concurrency Control: Transactional Locks</span>
          <span>Indexed: MongoDB Collections</span>
        </div>
      </div>
    );
  }

  // E-Commerce
  return (
    <div className="w-full bg-[#F2F3F0] dark:bg-[#161920] p-4 sm:p-5 space-y-3.5 text-left">
      {/* Masthead Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E0] dark:border-white/10 pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#4169E1] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#171717] dark:text-[#F3F4F6] block">
              Contemporary Apparel Storefront
            </span>
            <span className="font-mono text-[11px] text-[#737373] dark:text-[#9CA3AF]">
              Curated Cataloging // Persistent Cart // Responsive Flow
            </span>
          </div>
        </div>
        <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white dark:bg-[#1C2029] border border-[#E5E5E0] dark:border-white/10 text-[#4169E1] font-semibold">
          Commercial App
        </span>
      </div>

      {/* Product Display Mock Wireframe */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white dark:bg-[#1C2029] rounded-xl border border-[#E5E5E0] dark:border-white/10 p-3.5 space-y-2 hover:border-[#4169E1]/40 transition-colors">
          <div className="h-24 rounded-lg bg-[#F2F3F0] dark:bg-[#161920] flex items-center justify-center font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
            👕 [Product Item]
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] truncate">
              Heavyweight Cotton Tee
            </div>
            <div className="font-mono text-[10px] text-[#737373] dark:text-[#9CA3AF]">
              Natural Ivory // Size M, L
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 font-mono text-xs">
            <span className="font-bold text-[#171717] dark:text-[#F3F4F6]">$48.00</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">In Stock</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C2029] rounded-xl border border-[#E5E5E0] dark:border-white/10 p-3.5 space-y-2 hover:border-[#4169E1]/40 transition-colors">
          <div className="h-24 rounded-lg bg-[#F2F3F0] dark:bg-[#161920] flex items-center justify-center font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
            🧥 [Product Item]
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] truncate">
              Relaxed Wool Overshirt
            </div>
            <div className="font-mono text-[10px] text-[#737373] dark:text-[#9CA3AF]">
              Stone Heather // Size S, M
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 font-mono text-xs">
            <span className="font-bold text-[#171717] dark:text-[#F3F4F6]">$140.00</span>
            <span className="text-[10px] text-[#4169E1] font-semibold">Added to Cart</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C2029] rounded-xl border border-[#E5E5E0] dark:border-white/10 p-3.5 space-y-2 hover:border-[#4169E1]/40 transition-colors">
          <div className="h-24 rounded-lg bg-[#F2F3F0] dark:bg-[#161920] flex items-center justify-center font-mono text-xs text-[#737373] dark:text-[#9CA3AF]">
            👖 [Product Item]
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#F3F4F6] truncate">
              Pleated Linen Trouser
            </div>
            <div className="font-mono text-[10px] text-[#737373] dark:text-[#9CA3AF]">
              Deep Olive // 32W 32L
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 font-mono text-xs">
            <span className="font-bold text-[#171717] dark:text-[#F3F4F6]">$110.00</span>
            <span className="text-[10px] text-amber-600 font-semibold">Low Stock</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9CA3AF] pt-0.5 gap-2">
        <span>Cart Storage: LocalStorage Synchronization</span>
        <span>Inventory Model: MongoDB Multi-variant</span>
      </div>
    </div>
  );
}
