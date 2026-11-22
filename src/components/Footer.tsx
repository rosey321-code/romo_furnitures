"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E3525] text-[#F5F2EB] border-t border-white/10 overflow-hidden select-none">
      
      {/* ========================================================
          1. TOP TEASER BAR: BUTTONS SIDE-BY-SIDE ON MOBILE
          ======================================================== */}
      <div className="border-b border-white/10 px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block">
              MILL-DIRECT WHOLESALE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] tracking-tight">
              Partner with Pakistan’s premier textile house.
            </h3>
            <p className="text-xs text-[#F5F2EB]/70 font-sans">
              Supplying wholesale rolls of Curtains and Sofa fabrics directly to your showroom.
            </p>
          </div>

          {/* ✨ DONO BUTTONS SIDE-BY-SIDE ON MOBILE & DESKTOP */}
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
            {/* Button 1: WhatsApp */}
            <a
              href="https://wa.me/923135288233?text=Hi%20ROMO,%20I%20would%20like%20to%20inquire%20about%20wholesale%20fabric%20orders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#C75A28] hover:bg-[#b04f22] text-[#F5F2EB] text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span className="truncate">WhatsApp Us</span>
            </a>

            {/* Button 2: Request Quote (Links to /contact) */}
            <Link
              href="/contact"
              className="flex-1 sm:flex-initial border border-white/30 hover:border-white text-[#F5F2EB] text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all hover:bg-white/10 text-center truncate"
            >
              Request Quote
            </Link>
          </div>

        </div>
      </div>

      {/* ========================================================
          2. MAIN 4-COLUMN FOOTER NAVIGATION
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-14">
        
        {/* Col 1: Brand & Identity (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="inline-block group">
            <span className="font-serif text-3xl font-bold tracking-tight text-[#F5F2EB] block">
              ROMO
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans uppercase font-semibold text-[#C75A28] block -mt-1 group-hover:text-[#F5F2EB] transition-colors">
              FURNISHERS
            </span>
          </Link>

          <p className="text-xs text-[#F5F2EB]/75 font-sans leading-relaxed max-w-sm">
            Direct mill wholesale supply of Mosha velvet, fleece-backed textures, heavy bouclé, and burnout drapery for furnishing showrooms and commercial projects.
          </p>

          <div className="pt-1 flex items-center gap-4 text-xs font-mono text-[#F5F2EB]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C75A28]" />
              Ready Warehouse Lots
            </span>
           
           
          </div>
        </div>

        {/* Col 2: REAL FABRICS FROM SHEET (4 Cols) */}
        <div className="lg:col-span-4 space-y-3.5">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C75A28]">
            Fabric Collections
          </h4>
          <ul className="space-y-2 text-xs text-[#F5F2EB]/80 font-sans">
            <li>
              <Link href="/products#sofa" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Double Mosha Velvet (280 GSM)
              </Link>
            </li>
            <li>
              <Link href="/products#sofa" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Heavy Mosha Velvet (300 GSM)
              </Link>
            </li>
            <li>
              <Link href="/products#sofa" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Bouclé White with Pongee (340+50 GSM)
              </Link>
            </li>
            <li>
              <Link href="/products#cushions" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Mosha Velvet Printed Knitted (250 GSM)
              </Link>
            </li>
            <li>
              <Link href="/products#cushions" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Nebby Design Velvet with Fleece (240+120 GSM)
              </Link>
            </li>
            <li>
              <Link href="/products#curtains" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Milky Velvet Burnout with Pongee (260+50 GSM)
              </Link>
            </li>
            <li>
              <Link href="/products#curtains" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                Polyester Dyed Sheers & Lining (80–110 GSM)
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: TRADE DESK & CONTACT (4 Cols) */}
        <div className="lg:col-span-4 space-y-3.5">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C75A28]">
            Trade Desk & Contact
          </h4>
          
          <div className="space-y-2.5 text-xs text-[#F5F2EB]/80 font-sans leading-relaxed">
            <p>
              <strong className="text-white block font-medium">Direct WhatsApp & Calls:</strong>
              <a href="https://wa.me/923135288233" target="_blank" rel="noopener noreferrer" className="hover:text-[#C75A28] transition-colors font-mono font-bold text-sm text-[#F5F2EB]">
                0313 5288233
              </a>
            </p>

            <p>
              <strong className="text-white block font-medium">Official Email:</strong>
              <a href="mailto:info@romofurnishers.com" className="hover:text-[#C75A28] transition-colors underline underline-offset-4">
                info@romofurnishers.com
              </a>
            </p>

            <p className="pt-1">
              <strong className="text-white block font-medium">Lahore Central Showroom:</strong>
             
            </p>

            <p>
              <strong className="text-white block font-medium">Karachi Hub:</strong>
             </p>
          </div>
        </div>

      </div>

      {/* ========================================================
          3. BOTTOM COPYRIGHT BAR
          ======================================================== */}
      <div className="border-t border-white/10 px-6 lg:px-12 py-5 bg-black/15">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F5F2EB]/60 font-sans">
          <p>© 2025 ROMO Furnishers. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px]">
            <span>Wholesale Mill Supply</span>
            <span>•</span>
            <span>Contract Velvet & Bouclé</span>
            <span>•</span>
            <span>Curtain Drapery</span>
          </div>
        </div>
      </div>

    </footer>
  );
}