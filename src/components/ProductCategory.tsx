"use client";
import React from "react";
import Link from "next/link";

export default function RoomInspirations() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#F5F2EB] px-4 sm:px-6 border-b border-[#C7B89A]/40 font-sans">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-12 lg:space-y-16">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="space-y-2 max-w-3xl text-left">
          <span className="text-[#C75A28] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] block">
            B2B WHOLESALE ARCHIVE
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#2B2C2A] leading-[1.15] tracking-tight">
            Curated collections for every living space.
          </h2>

          <p className="text-xs sm:text-sm text-[#2B2C2A]/75 leading-relaxed">
            Explore Pakistan’s premier contract-grade textile running lines for sofas, luxury drapery, and accent cushions. Direct central warehouse dispatch for showrooms, developers, and studios.
          </p>
        </div>

        {/* ========================================================
            1. DESKTOP BENTO GRID (Sirf Laptop / Desktop par chalega)
            ======================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 1 (LEFT - TALL): SOFA FABRICS */}
          <div className="col-span-6 group relative rounded-[32px] overflow-hidden min-h-[580px] border border-[#C7B89A]/40 shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              src="/Gallery/Romo Sofa.webp"
              alt="ROMO Sofa Fabric Wholesale Collection"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-0"
            />
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <Link
                href="/products/sofa"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-[0.14em] font-medium text-white border border-white/70 bg-white/10 hover:bg-[#C7B89A] hover:text-[#2B2C2A] hover:border-[#C7B89A] backdrop-blur-sm transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: 2 STACKED CARDS */}
          <div className="col-span-6 flex flex-col gap-8">
            
            {/* CARD 2 (TOP RIGHT): CURTAIN FABRICS */}
            <div className="group relative rounded-[32px] overflow-hidden h-[275px] border border-[#C7B89A]/40 shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src="/Gallery/Romo Curtains.webp"
                alt="Curtain and Drapery Fabrics"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-0"
              />
              <div className="absolute top-[43%] left-[15%] z-20 whitespace-nowrap">
                <Link
                  href="/products/curtains"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium text-[#3d4331] border border-[#3d4331] bg-transparent hover:bg-[#80451C] hover:text-white hover:border-[#80451C] backdrop-blur-sm transition-all duration-300 shadow-sm"
                >
                  <span>EXPLORE COLLECTION</span>
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>

            {/* CARD 3 (BOTTOM RIGHT): CUSHION FABRICS */}
            <div className="group relative rounded-[32px] overflow-hidden h-[275px] border border-[#C7B89A]/40 shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src="/Gallery/Romo Cushions.webp"
                alt="Accent Cushion Fabrics"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-0"
              />
              <div className="absolute top-[50%] right-[12%] z-20 whitespace-nowrap">
                <Link
                  href="/products/sofa"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium text-white border border-white/80 bg-white/10 hover:bg-[#80451C] hover:text-[#f4f8fb] hover:border-[#C7B89A] backdrop-blur-sm transition-all duration-300 shadow-sm"
                >
                  <span>EXPLORE COLLECTION</span>
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            2. MOBILE BENTO GRID (Sirf Mobile Par Chalega - lg:hidden)
            ======================================================== */}
        <div className="flex flex-col gap-4 lg:hidden">
          
          {/* ✨ MOBILE CARD 1: SOFA */}
          <div className="group relative rounded-[22px] overflow-hidden aspect-[4/5] border border-[#C7B89A]/40 shadow-sm transition-all duration-500">
            {/* Image with Zoom-In */}
            <img
              src="/Gallery/Romo Sofa.webp"
              alt="ROMO Sofa Fabric"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* 👇 SOFA BUTTON POSITION: 'top-[32%]' ko aap upar/neeche kar sakti hain */}
            <div className="absolute top-[31.5%] left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <Link
                href="/products/sofa"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[9px] uppercase tracking-[0.12em] font-medium text-white border border-white/70 bg-white/10 hover:bg-[#C7B89A] hover:text-[#2B2C2A] hover:border-[#C7B89A] backdrop-blur-sm transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="text-[10px]">→</span>
              </Link>
            </div>
          </div>

          {/* ✨ MOBILE CARD 2: CURTAINS */}
          <div className="group relative rounded-[22px] overflow-hidden aspect-[16/10] border border-[#C7B89A]/40 shadow-sm transition-all duration-500">
            {/* Image with Zoom-In */}
            <img
              src="/Gallery/Romo Curtains.webp"
              alt="Curtain Fabrics"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* 👇 CURTAINS BUTTON POSITION: 'top-[42%]' ko aap upar/neeche kar sakti hain */}
            <div className="absolute top-[42%] left-[6%] z-20 whitespace-nowrap">
              <Link
                href="/products/curtain"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.12em] font-medium text-[#3d4331] border border-[#3d4331] bg-transparent hover:bg-[#80451C] hover:text-white hover:border-[#80451C] backdrop-blur-sm transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="text-[10px]">→</span>
              </Link>
            </div>
          </div>

          {/* ✨ MOBILE CARD 3: CUSHIONS */}
          <div className="group relative rounded-[22px] overflow-hidden aspect-[16/10] border border-[#C7B89A]/40 shadow-sm transition-all duration-500">
            {/* Image with Zoom-In */}
            <img
              src="/Gallery/Romo Cushions.webp"
              alt="Cushion Fabrics"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* 👇 CUSHIONS BUTTON POSITION: 'top-[50%]' ko aap upar/neeche kar sakti hain */}
            <div className="absolute top-[50%] right-[6%] z-20 whitespace-nowrap">
              <Link
                href="/products/sofa"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.12em] font-medium text-white border border-white/80 bg-white/10 hover:bg-[#80451C] hover:text-[#f4f8fb] hover:border-[#C7B89A] backdrop-blur-sm transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="text-[10px]">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}