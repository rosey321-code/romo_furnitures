"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F5F2EB] text-[#2B2C2A] font-sans transition-opacity duration-300">
      <div className="flex flex-col items-center space-y-4">
        {/* Brand Subtitle */}
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C75A28] font-bold animate-pulse">
          B2B Wholesale & Showroom
        </span>

        {/* Brand Name */}
        <h1 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#2B2C2A]">
          ROMO <span className="italic font-normal">Furnishers</span>
        </h1>

        {/* Smooth Loader Line */}
        <div className="w-56 h-[2px] bg-[#C7B89A]/30 relative overflow-hidden mt-6 rounded-full">
          <div className="absolute inset-0 bg-[#484F39] w-full origin-left animate-[shimmer_1.2s_infinite_ease-in-out]" 
               style={{
                 animation: 'indeterminate 1.2s infinite cubic-bezier(0.65, 0.815, 0.735, 0.395)'
               }}
          />
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-[#2B2C2A]/50 pt-2 font-medium">
          Loading Curated Experience...
        </p>
      </div>

      <style jsx>{`
        @keyframes indeterminate {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}