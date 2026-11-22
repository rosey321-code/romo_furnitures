"use client";
import React from "react";
import Link from "next/link";

// 🛋️ LEFT CARDS: Sofa Fabrics (Vertical Cards)
const SOFA_ITEMS = [
  {
    tag: "340 GSM",
    image: "/Romo%20books/ROMO1.webp",
    fallback: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
    link: "/digital-catalog",
  },
  {
    tag: "280 GSM",
    image: "/Romo%20books/ROMO2.webp",
    fallback: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
    link: "/digital-catalog",
  },
  {
    tag: "300 GSM",
    image: "/Romo%20books/ROMO3.webp",
    fallback: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=80",
    link: "/digital-catalog",
  },
];

// 🪟 RIGHT CARDS: Curtains Fabrics (Vertical Cards)
const CURTAIN_ITEMS = [
  {
    tag: "260 GSM",
    image: "/Romo%20books/ROMO3.webp",
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
    link: "/digital-catalog",
  },
  {
    tag: "110 GSM",
    image: "/Romo%20books/ROMO4.webp",
    fallback: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    link: "/digital-catalog",
  },
  {
    tag: "280 GSM",
    image: "/Romo%20books/ROMO5.webp",
    fallback: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
    link: "/digital-catalog",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="relative w-full bg-[#3D4331] text-[#F5F2EB] py-8 lg:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none border-b border-[#363c2b]">
      
      {/* Smooth Infinite Scrolling CSS Keyframes */}
      <style jsx>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-up-track { animation: scrollUp 20s linear infinite; }
        .scroll-down-track { animation: scrollDown 20s linear infinite; }
        .scroll-up-track:hover, .scroll-down-track:hover { animation-play-state: paused; }
      `}</style>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-8 relative">
        
        {/* ========================================================
            1. LEFT COLUMN: SOFA CARDS (Taller / Vertical Height)
            ======================================================== */}
        <div className="col-span-4 sm:col-span-3 lg:col-span-2 h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden relative z-20">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#484F39] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#484F39] to-transparent z-10 pointer-events-none" />

          <div className="scroll-up-track flex flex-col gap-3">
            {[...SOFA_ITEMS, ...SOFA_ITEMS].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/15 group block transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Full Box Image */}
                <img
                  src={item.image}
                  alt="Sofa Fabric"
                  onError={(e) => { e.currentTarget.src = item.fallback; }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* GSM Badge (Top Right) */}
                <span className="absolute bottom-2 right-2 bg-[#ffffff]/90 backdrop-blur-md text-[#3d4331] text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full z-10 border border-white/30 shadow-md">
                {item.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================
            2. CENTER COLUMN: ROMO SOFA CENTERPIECE (Balanced Size)
            ======================================================== */}
        <div className="col-span-8 sm:col-span-9 lg:col-span-8 relative flex flex-col items-center justify-center text-center px-1 sm:px-2">
          <div className="relative w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            
            {/* Background Center Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/Romo%20books/Romo.webp"
                alt="Luxury Sofa Fabric"
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />
              <div className="absolute inset-0 rounded-2xl pointer-events-none" />
            </div>
           
          </div>

          {/* Subtext & Explore Button */}
          <div className="mt-3 sm:mt-4 flex flex-col items-center justify-center gap-2 sm:gap-3 z-20">
            <span className="text-[8px] sm:text-xs font-serif italic text-[#F5F2EB] tracking-[0.3em] sm:tracking-[0.35em] uppercase drop-shadow-md">
              furnishers • wholesale living
            </span>
           <Link href="/DIGITAL-CATALOG"
           className="border border-[#F5F2EB]/50 bg-transparent hover:bg-[#F2E5CE] text-[#F5F2EB] hover:text-[#292B27] text-[10px] sm:text-xs uppercase tracking-widest font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all shadow-lg hover:scale-105">
           EXPLORE FULL ARCHIVE  </Link>
          </div>
        </div>

        {/* ========================================================
            3. RIGHT COLUMN: CURTAIN CARDS (Taller / Vertical Height)
            ======================================================== */}
        <div className="hidden lg:block lg:col-span-2 h-[520px] overflow-hidden relative z-20">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#484F39] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#484F39] to-transparent z-10 pointer-events-none" />

          <div className="scroll-down-track flex flex-col gap-3">
            {[...CURTAIN_ITEMS, ...CURTAIN_ITEMS].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/15 group block transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Full Box Image */}
                <img
                  src={item.image}
                  alt="Curtain Fabric"
                  onError={(e) => { e.currentTarget.src = item.fallback; }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* GSM Badge */}
              <span className="absolute bottom-2 right-2 bg-[#ffffff]/90 backdrop-blur-md text-[#3d4331] text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full z-10 border border-white/30 shadow-md">
              {item.tag}
              </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}