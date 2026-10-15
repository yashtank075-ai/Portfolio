import React from 'react';
import { Utensils, BookOpen, ShoppingBag, Globe } from 'lucide-react';

export default function ProjectVisual({ projectId }) {
  if (projectId === 'orainfotech') {
    return (
      <div className="w-full bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] p-3.5 sm:p-5 space-y-3.5 text-left transition-colors duration-300">
        {/* Browser Frame Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-3 gap-2">
          <div className="flex items-center gap-3">
            {/* Minimal Window Dots */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80" />
            </div>
            {/* Address Bar */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F3] dark:bg-[#121210] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] text-[11px] font-mono text-[#3D3B35] dark:text-[#D4D0C5]">
              <Globe className="w-3 h-3 text-[#8C734B] dark:text-[#D9C8A5] shrink-0" />
              <span className="truncate max-w-[170px] sm:max-w-xs">https://www.orainfotech.com/</span>
            </div>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 bg-[#FAF8F3] dark:bg-[#121210] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] text-[#8C734B] dark:text-[#D9C8A5] uppercase tracking-wider font-semibold">
            Live Production Website
          </span>
        </div>

        {/* Genuine Screenshot Specimen */}
        <div className="relative overflow-hidden border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] bg-[#FAF8F3] dark:bg-[#151512] shadow-sm">
          <img 
            src="/orainfotech-preview.png" 
            alt="Orainfotech Corporate Website Redesign — Official Homepage Screenshot" 
            className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            loading="lazy"
            width="1440"
            height="810"
          />
          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-[#171714]/85 text-[#F5F2EB] font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm pointer-events-none border border-white/10">
            Verified Production Interface
          </div>
        </div>

        {/* Technical Sub-spec */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#423F39] dark:text-[#C4C0B6] pt-0.5 gap-2">
          <span>Engineered with Next.js &amp; Tailwind CSS</span>
          <span className="text-[#8C734B] dark:text-[#D9C8A5]">Client: Orainfotech (Corporate Portal)</span>
        </div>
      </div>
    );
  }

  if (projectId === 'food-ordering') {
    return (
      <div className="w-full bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] p-4 sm:p-6 space-y-4 text-left transition-colors duration-300">
        {/* Masthead Label */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-3 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#171714] text-[#F5F2EB] dark:bg-[#FAF8F3] dark:text-[#171714] flex items-center justify-center text-xs shrink-0">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#171714] dark:text-[#F5F2EB] uppercase block">
                Food-Del Application Specimen
              </span>
              <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
                React Client // Express REST // MongoDB Schema
              </span>
            </div>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 bg-[#FAF8F3] dark:bg-[#121210] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] text-[#8C734B] dark:text-[#D9C8A5] uppercase tracking-wider font-semibold">
            Verified Stack
          </span>
        </div>

        {/* Visual Composition: Menu UI & API Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 pt-1">
          {/* Menu Catalog Wireframe */}
          <div className="sm:col-span-7 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#423F39] dark:text-[#C4C0B6] border-b border-[#D8D3C8]/60 dark:border-[rgba(245,242,235,0.08)] pb-2">
              <span>Catalog State: Filtered</span>
              <span className="text-[#8C734B] dark:text-[#D9C8A5] font-semibold">Filter: All Items</span>
            </div>
            
            {/* Sample Menu Items */}
            <div className="space-y-2.5">
              <div className="p-3 bg-[#EFECE3] dark:bg-[#1E1E1A] border border-[#D8D3C8]/70 dark:border-[rgba(245,242,235,0.1)] flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB] truncate">
                    Artisan Margherita Pizza
                  </div>
                  <div className="font-sans text-xs text-[#423F39] dark:text-[#C4C0B6] truncate">
                    Fresh basil, mozzarella, marinara
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#171714] dark:text-[#F5F2EB] block">
                    $14.00
                  </span>
                  <span className="font-mono text-xs text-[#8C734B] dark:text-[#D9C8A5] font-semibold">
                    Qty: 1 [In Cart]
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#EFECE3] dark:bg-[#1E1E1A] border border-[#D8D3C8]/70 dark:border-[rgba(245,242,235,0.1)] flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB] truncate">
                    Truffle Tagliatelle
                  </div>
                  <div className="font-sans text-xs text-[#423F39] dark:text-[#C4C0B6] truncate">
                    Wild mushroom &amp; shaved parmesan
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#171714] dark:text-[#F5F2EB] block">
                    $19.50
                  </span>
                  <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
                    Qty: 0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Data Flow Column */}
          <div className="sm:col-span-5 bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-4 space-y-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#8C734B] dark:text-[#D9C8A5] uppercase tracking-wider block font-bold mb-2">
                REST Endpoints
              </span>
              <ul className="font-mono text-xs text-[#3D3B35] dark:text-[#D4D0C5] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#171714] dark:text-[#F5F2EB] font-bold text-[11px] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    GET
                  </span>
                  <span className="truncate">/api/food/list</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#171714] dark:text-[#F5F2EB] font-bold text-[11px] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    POST
                  </span>
                  <span className="truncate">/api/cart/update</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#171714] dark:text-[#F5F2EB] font-bold text-[11px] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)]">
                    POST
                  </span>
                  <span className="truncate">/api/order/place</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[#D8D3C8]/60 dark:border-[rgba(245,242,235,0.08)] font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] flex items-center justify-between">
              <span>Database:</span>
              <span className="text-[#171714] dark:text-[#F5F2EB] font-semibold">MongoDB Atlas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'library-management') {
    return (
      <div className="w-full bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] p-4 sm:p-6 space-y-4 text-left transition-colors duration-300">
        {/* Masthead Label */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-3 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#171714] text-[#F5F2EB] dark:bg-[#FAF8F3] dark:text-[#171714] flex items-center justify-center text-xs shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#171714] dark:text-[#F5F2EB] uppercase block">
                Library Inventory &amp; Loan Ledger
              </span>
              <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
                Relational Modeling // Issue &amp; Return Handlers
              </span>
            </div>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 bg-[#FAF8F3] dark:bg-[#121210] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] text-[#8C734B] dark:text-[#D9C8A5] uppercase tracking-wider font-semibold">
            System Specimen
          </span>
        </div>

        {/* Ledger Layout (Responsive cards on mobile, grid on sm+) */}
        <div className="bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-4 space-y-3 font-mono text-xs">
          <div className="hidden sm:grid grid-cols-12 gap-2 text-[#423F39] dark:text-[#C4C0B6] uppercase text-xs font-bold border-b border-[#D8D3C8]/70 dark:border-[rgba(245,242,235,0.08)] pb-2">
            <span className="col-span-5">Book Title &amp; ISBN</span>
            <span className="col-span-4">Borrower Record</span>
            <span className="col-span-3 text-right">Status</span>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1.5 sm:gap-2 items-start sm:items-center py-2 border-b border-[#D8D3C8]/40 dark:border-[rgba(245,242,235,0.06)]">
            <div className="sm:col-span-5">
              <span className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB] block">
                Clean Code by Robert Martin
              </span>
              <span className="text-xs text-[#423F39] dark:text-[#C4C0B6]">ISBN 978-0132350884</span>
            </div>
            <div className="sm:col-span-4 text-xs text-[#3D3B35] dark:text-[#D4D0C5]">
              Member: STD-2024-0419
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <span className="px-2 py-0.5 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#8C734B] dark:text-[#D9C8A5] text-xs font-bold border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] inline-block">
                ISSUED
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1.5 sm:gap-2 items-start sm:items-center py-2 border-b border-[#D8D3C8]/40 dark:border-[rgba(245,242,235,0.06)]">
            <div className="sm:col-span-5">
              <span className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB] block">
                Database System Concepts
              </span>
              <span className="text-xs text-[#423F39] dark:text-[#C4C0B6]">ISBN 978-0078022159</span>
            </div>
            <div className="sm:col-span-4 text-xs text-[#3D3B35] dark:text-[#D4D0C5]">
              Member: STD-2024-0112
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <span className="px-2 py-0.5 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#423F39] dark:text-[#C4C0B6] text-xs font-bold border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] inline-block">
                RETURNED
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1.5 sm:gap-2 items-start sm:items-center py-2">
            <div className="sm:col-span-5">
              <span className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB] block">
                Introduction to Algorithms
              </span>
              <span className="text-xs text-[#423F39] dark:text-[#C4C0B6]">ISBN 978-0262033848</span>
            </div>
            <div className="sm:col-span-4 text-xs text-[#3D3B35] dark:text-[#D4D0C5]">
              Available In Stacks
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <span className="px-2 py-0.5 bg-[#EFECE3] dark:bg-[#1E1E1A] text-[#171714] dark:text-[#F5F2EB] text-xs font-bold border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.15)] inline-block">
                IN STOCK
              </span>
            </div>
          </div>
        </div>

        {/* Technical Sub-detail */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#423F39] dark:text-[#C4C0B6] pt-1 gap-2">
          <span>Concurrency Control: Status Locking</span>
          <span>Records Indexed: MongoDB Collections</span>
        </div>
      </div>
    );
  }

  // E-Commerce Clothing Website
  return (
    <div className="w-full bg-[#EFECE3] dark:bg-[#1A1A16] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] p-4 sm:p-6 space-y-4 text-left transition-colors duration-300">
      {/* Masthead Label */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#D8D3C8] dark:border-[rgba(245,242,235,0.12)] pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#171714] text-[#F5F2EB] dark:bg-[#FAF8F3] dark:text-[#171714] flex items-center justify-center text-xs shrink-0">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#171714] dark:text-[#F5F2EB] uppercase block">
              Apparel E-Commerce Storefront
            </span>
            <span className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
              Curated Cataloging // Persistent Cart // Responsive Flow
            </span>
          </div>
        </div>
        <span className="font-mono text-xs px-2.5 py-1 bg-[#FAF8F3] dark:bg-[#121210] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.18)] text-[#8C734B] dark:text-[#D9C8A5] uppercase tracking-wider font-semibold">
          Commercial App
        </span>
      </div>

      {/* Product Display Mock Wireframe */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-3.5 space-y-2.5">
          <div className="h-24 bg-[#EFECE3] dark:bg-[#1E1E1A] flex items-center justify-center font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] border border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] font-medium">
            [Product Visual]
          </div>
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB]">
              Heavyweight Cotton Tee
            </div>
            <div className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
              Natural Ivory // Size M, L
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 font-mono text-xs sm:text-sm">
            <span className="font-bold text-[#171714] dark:text-[#F5F2EB]">$48.00</span>
            <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5] font-semibold">In Stock</span>
          </div>
        </div>

        <div className="bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-3.5 space-y-2.5">
          <div className="h-24 bg-[#EFECE3] dark:bg-[#1E1E1A] flex items-center justify-center font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] border border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] font-medium">
            [Product Visual]
          </div>
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB]">
              Relaxed Wool Overshirt
            </div>
            <div className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
              Stone Heather // Size S, M
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 font-mono text-xs sm:text-sm">
            <span className="font-bold text-[#171714] dark:text-[#F5F2EB]">$140.00</span>
            <span className="text-xs text-[#8C734B] dark:text-[#D9C8A5] font-semibold">Added to Cart</span>
          </div>
        </div>

        <div className="bg-[#FAF8F3] dark:bg-[#151512] border border-[#D8D3C8] dark:border-[rgba(245,242,235,0.1)] p-3.5 space-y-2.5">
          <div className="h-24 bg-[#EFECE3] dark:bg-[#1E1E1A] flex items-center justify-center font-mono text-xs text-[#423F39] dark:text-[#C4C0B6] border border-[#D8D3C8]/50 dark:border-[rgba(245,242,235,0.06)] font-medium">
            [Product Visual]
          </div>
          <div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-[#171714] dark:text-[#F5F2EB]">
              Pleated Linen Trouser
            </div>
            <div className="font-mono text-xs text-[#423F39] dark:text-[#C4C0B6]">
              Deep Olive // 32W 32L
            </div>
          </div>
          <div className="flex justify-between items-center pt-1 font-mono text-xs sm:text-sm">
            <span className="font-bold text-[#171714] dark:text-[#F5F2EB]">$110.00</span>
            <span className="text-xs text-[#423F39] dark:text-[#C4C0B6]">Low Stock</span>
          </div>
        </div>
      </div>

      {/* Cart & Persistence Spec */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#423F39] dark:text-[#C4C0B6] pt-1 gap-2">
        <span>Cart Storage: LocalStorage Synchronization</span>
        <span>Inventory Model: MongoDB Multi-variant</span>
      </div>
    </div>
  );
}
