"use client";
import React from "react";
import Link from "next/link";

// Bottom Ticker Phrases
const TICKER_ITEMS = [
  "ROMO Furnishers · Direct Mill Source",
  "CENTRAL WAREHOUSE BULK DISPATCH",
  "MILL-DIRECT WHOLESALE RATES",
  "200,000+ METERS IN-STOCK",
  "24H EXPRESS NATIONWIDE SHIPPING",
  "GUARANTEED DYE-LOT CONSISTENCY",
  "CONTRACT GRADE CURTAINS & SOFAS",
  "ROMO FURNISHERS B2B DESK",
];

export default function BrandPromise() {
  return (
    <section className="bg-white border-b border-[#C7B89A]/40 overflow-hidden font-sans">
      
      {/* ========================================================
          1. BRAND PROMISE SECTION (TIGHT SPACING & CLEAN B2B)
          ======================================================== */}
      <div className="py-14 lg:py-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Photo */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-[#F5F2EB] shadow-sm border border-[#C7B89A]/30">
            <img
              src="/brand promise/brand promise.webp"
              alt="ROMO Quality Craftsmanship & Fabric Inspection"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#2B2C2A]/50 mt-2.5 block text-center lg:text-left">
            Central Warehouse Inspection & QC Desk
          </span>
        </div>

        {/* Right Column: 4 Concise Promises */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Headline + 1-Line AEO Subtext */}
          <div className="space-y-2.5">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block">
              THE ROMO B2B PROMISE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2C2A] leading-[1.12] tracking-tight">
              200,000+ Meters Ready. <br />
              Hundreds of Retailers. <br />
              <span className="italic font-normal text-[#484F39]">
                One Direct Mill Source.
              </span>
            </h2>

            <p className="text-xs sm:text-[13px] font-medium text-[#2B2C2A]/85 leading-relaxed pt-0.5">
              Pakistan’s premier mill-direct textile partner—supplying furnishing showrooms, commercial developers, and interior designers across Lahore, Karachi, Islamabad, and nationwide.
            </p>
          </div>

          {/* 4 Crisp Points with Tight Spacing */}
          <div className="space-y-3.5 pt-2 border-t border-[#C7B89A]/40">
            
            {/* Point 1 */}
            <div className="space-y-0.5">
              <h3 className="font-serif text-base sm:text-lg text-[#2B2C2A] font-semibold">
                1. Pre-dispatch roll inspection
              </h3>
            </div>

            {/* Point 2 */}
            <div className="pt-2.5 border-t border-[#C7B89A]/30 space-y-0.5">
              <h3 className="font-serif text-base sm:text-lg text-[#2B2C2A] font-semibold">
                2. Guaranteed dye-lot continuity
              </h3>
             
            </div>

            {/* Point 3 */}
            <div className="pt-2.5 border-t border-[#C7B89A]/30 space-y-0.5">
              <h3 className="font-serif text-base sm:text-lg text-[#2B2C2A] font-semibold">
                3. Direct mill wholesale rates
              </h3>
             
            </div>

            {/* Point 4 */}
            <div className="pt-2.5 border-t border-[#C7B89A]/30 space-y-0.5">
              <h3 className="font-serif text-base sm:text-lg text-[#2B2C2A] font-semibold">
                4. 24-Hour nationwide dispatch
              </h3>
              
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-3 border-t border-[#C7B89A]/40">
            <Link
              href="/contact"
              className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#484F39] hover:text-[#C75A28] pb-1 border-b-2 border-[#484F39] hover:border-[#C75A28] transition-all"
            >
              REQUEST BULK SWATCHES & CATALOG →
            </Link>
          </div>

        </div>

      </div>

      {/* ========================================================
          2. ANIMATED RUNNING TICKER
          ======================================================== */}
      <div className="bg-[#C75A28] py-3 overflow-hidden border-t border-[#363c2b] select-none relative">
        <style jsx>{`
          @keyframes scrollMarqueeBottom {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .bottom-track {
            display: flex;
            width: max-content;
            animation: scrollMarqueeBottom 28s linear infinite;
          }
          .bottom-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="bottom-track flex items-center whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="text-[#F5F2EB] text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase px-5">
                {item}
              </span>
              <span className="text-[#F5F2EB] text-xs font-serif opacity-70">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}