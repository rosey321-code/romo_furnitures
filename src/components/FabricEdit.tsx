"use client";
import React from "react";
import Link from "next/link";

// 🧵 3 STATIC PLAIN VELVET CUSHION CARDS
const CUSHION_COLLECTIONS = [
  {
    id: "cushion-1",
    name: "CLASSIC PLAIN MOSHA VELVET",
    gsm: "400 GSM • Double-Dyed Pile",
    image: "/Gallery/cushion-plain-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    link: "/cushion-fabrics",
  },
  {
    id: "cushion-2",
    name: "WARM TERRACOTTA PLAIN VELVET",
    gsm: "400 GSM • High-Density Silk Touch",
    image: "/Gallery/cushion-plain-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    link: "/cushion-fabrics",
  },
  {
    id: "cushion-3",
    name: "DEEP FOREST SAGE VELVET",
    gsm: "400 GSM • Contract Grade Finishing",
    image: "/Gallery/cushion-plain-3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    link: "/cushion-fabrics",
  },
];

export default function CushionArchive() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white px-5 sm:px-8 lg:px-12 border-b border-[#C7B89A]/40 font-sans">
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ========================================================
            1. LEFT COLUMN: SEO + AEO OPTIMIZED (BUTTON AT THE END)
            ======================================================== */}
        <div className="lg:col-span-3 space-y-2.5 sm:space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block">
              B2B ACCENT ARCHIVE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2C2A] leading-[1.1] tracking-tight">
            Plush, Tailored, <br className="hidden lg:block" />
            <span className="italic font-normal text-[#484F39]">
              Velvet.
            </span>
          </h2>

          {/* 1-Line AEO & SEO Punchy Subtext */}
          <p className="text-xs sm:text-sm font-medium text-[#2B2C2A]/85 leading-snug max-w-sm">
            Direct mill source for continuous dye-lot plain velvet cushions and bulk rolls.
          </p>

          {/* BUTTON AT THE END (Sab se aakhir me) */}
          <div className="pt-2 sm:pt-3">
            <Link
              href="/cushion-fabrics"
              className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#2B2C2A] hover:text-[#C75A28] pb-1 border-b-2 border-[#2B2C2A] hover:border-[#C75A28] transition-all"
            >
              VIEW ALL CUSHION FABRICS →
            </Link>
          </div>

        </div>

        {/* ========================================================
            2. RIGHT COLUMN: WIDE & NO-BORDER CUSHION CARDS
            ======================================================== */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-6">
            {CUSHION_COLLECTIONS.map((cushion) => (
              <Link
                key={cushion.id}
                href={cushion.link}
                className="group block cursor-pointer w-full max-w-[340px] sm:max-w-none mx-auto text-center sm:text-left"
              >
                {/* Image Container: NO BORDER + WIDER ON MOBILE (aspect-[4/3] to aspect-[4/5]) */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] bg-[#F5F2EB] rounded-2xl sm:rounded-[24px] overflow-hidden mb-2.5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={cushion.image}
                    alt={cushion.name}
                    onError={(e: any) => {
                      e.currentTarget.src = cushion.fallbackImage;
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xs sm:text-sm uppercase tracking-wider text-[#2B2C2A] group-hover:text-[#C75A28] transition-colors leading-snug font-semibold truncate px-1">
                  {cushion.name}
                </h3>

                {/* Specs */}
                <p className="text-[11px] sm:text-xs font-medium text-[#2B2C2A]/70 mt-0.5 truncate px-1">
                  {cushion.gsm}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}