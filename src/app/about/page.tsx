"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// =========================================================================
// ⚙️ DATA CONFIGURATION
// =========================================================================

const VOLUMES = [
  { id: "101", num: "101", title: "MOSHA VELVET", tagline: "Heavy Knitted Upholstery", image: "/about/101.webp", altImage: "/about/mosha velvet.jpg", fallbackImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85" },
  { id: "201", num: "201", title: "DOUBLE MOSHA", tagline: "280 GSM Pure Velvet", image: "/about/201.webp", altImage: "/about/double mosha.jpg", fallbackImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85" },
  { id: "202", num: "202", title: "SELF PRINT", tagline: "Printed Floral Knitted", image: "/about/202.webp", altImage: "/about/self print mosha.jpg", fallbackImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85" },
  { id: "301", num: "301", title: "SHEER DRAPERY", tagline: "Room Lightening Voiles", image: "/about/301.webp", altImage: "/about/sheer.jpg", fallbackImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85" },
  { id: "401", num: "401", title: "SPECIAL COLLECTION", tagline: "Textured Bouclé & Jacquards", image: "/about/401.webp", altImage: "/about/special collection.jpg", fallbackImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" },
];

const BOTTOM_TICKER_ITEMS = [
  "BATCH CONSISTENCY",
  "BOUCLÉ & RAW LINENS",
  "CONTRACT GRADE WEAVES",
  "CURTAINS DRAPERY",
  "CUSHION UPHOLSTERY",
  "50,000M READY STOCK",
  "MILL-DIRECT PRICING",
  "ROMO FURNISHERS",
];

// =========================================================================
// 🚀 MAIN COMPONENT
// =========================================================================
export default function AboutPage() {
  const [activeVolume, setActiveVolume] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="bg-[#F5F2EB] text-[#2B2C2A]">
        
        {/* Global Keyframes */}
        <style jsx global>{`
          @keyframes scrollAboutMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .about-marquee-track {
            display: flex;
            width: max-content;
            animation: scrollAboutMarquee 25s linear infinite;
          }
          .about-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

         {/* ========================================================
            HERO SECTION
            ======================================================== */}
        <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[550px] flex items-center justify-center lg:justify-start overflow-hidden select-none px-6 sm:px-12">
          
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/about/About us.webp" 
              alt="ROMO Showroom Interior & Fabric Rolls"
              className="w-full h-full object-cover object-center" 
            />
          </div>

          <div className="relative z-10 max-w-lg p-6 sm:p-8 lg:-mt-16 xl:-mt-30 lg:ml-[34%] xl:ml-[45%] bg-white/50 sm:bg-white/40 backdrop-blur-[4px] rounded-2xl shadow-md text-center lg:text-left">
            <span className="text-[10px] sm:text-[11px] tracking-[3px] text-[#C75A28] mb-2 uppercase font-bold block drop-shadow-sm">
              WHO WE ARE
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] mb-3 text-[#2B2C2A] drop-shadow-sm">
              The Fabric Behind <span className="italic text-[#C75A28]">Beautiful Interiors.</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-[#3d4331] font-medium leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0 drop-shadow-sm">
              Partnering with furniture brands and businesses to provide premium fabric collections, quality materials and dependable wholesale supply.
            </p>
            
            <div>
              <Link 
                href="/products" 
                className="inline-block bg-[#C75A28] hover:bg-[#3d4331] text-[#F5F2EB] text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
              >
                Explore Collections →
              </Link>
            </div>
          </div>

        </section>

         {/* ========================================================
            2. OUR MISSION, VISION & APPROACH SECTION
            ======================================================== */}
        <section className="relative py-20 sm:py-28 px-6 lg:px-12 bg-[#F5F2EB] select-none">
          
          {/* ================= DESKTOP VIEW (Aapka set kiya hua layout) ================= */}
          <div className="hidden sm:block max-w-7xl mx-auto text-[#2B2C2A]">
            
            {/* 1. MISSION (LEFT) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:-mt-8 items-stretch">
              <div className="space-y-4 bg-white/80 border border-[#C7B89A]/40 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[4px] text-[#C75A28] font-bold block mb-2">01 / PURPOSE</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2B2C2A] mb-3">Our Mission</h2>
                  <p className="text-sm sm:text-base text-[#2B2C2A]/90 leading-relaxed font-light">
                    To fulfill the evolving needs of Pakistan&apos;s furnishing industry through quality products, efficient sourcing, and lasting business relationships. We bridge the gap between global mills and local craftsmanship.
                  </p>
                </div>
              </div>
              <div></div>
            </div>

            {/* 2. VISION (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 items-stretch lg:-mt-5 lg:-ml-10">
              <div></div>
              <div className="space-y-4 bg-white/80 border border-[#C7B89A]/40 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[4px] text-[#C75A28] font-bold block mb-2">02 / VISION</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2B2C2A] mb-3">Our Vision</h2>
                  <p className="text-sm sm:text-base text-[#2B2C2A]/90 leading-relaxed font-light">
                    To become a leading furnishing solutions brand, expanding our product range and capabilities to serve the industry&apos;s growing needs with uncompromised design, dependable inventory, and future-ready collections.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. APPROACH (LEFT) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:-mt-5 items-stretch">
              <div className="space-y-4 bg-white/80 border border-[#C7B89A]/40 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[4px] text-[#C75A28] font-bold block mb-2">03 / APPROACH</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2B2C2A] mb-3">Our Approach</h2>
                  <p className="text-sm sm:text-base text-[#2B2C2A]/90 leading-relaxed font-light">
                    We believe successful commercial partnerships begin with total transparency, verified specifications, and a deep understanding of market demands to ensure long-term value.
                  </p>
                </div>
              </div>
              <div></div>
            </div>

          </div>

          {/* ================= MOBILE VIEW (Mission & Vision Aamnay-Samnay, Approach Neeche Mid) ================= */}
          <div className="grid sm:hidden grid-cols-2 gap-3 text-[#2B2C2A]">
            
            {/* Mission (Mobile Left) */}
            <div className="bg-white/90 border border-[#C7B89A]/40 p-4 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[9px] tracking-[2px] text-[#C75A28] font-bold block mb-1">01 / PURPOSE</span>
                <h2 className="font-serif text-base font-light text-[#2B2C2A] mb-1">Our Mission</h2>
                <p className="text-[11px] text-[#2B2C2A]/90 leading-relaxed font-light">
                  To fulfill the evolving needs of Pakistan&apos;s furnishing industry through quality products and efficient sourcing.
                </p>
              </div>
            </div>

            {/* Vision (Mobile Right) */}
            <div className="bg-white/90 border border-[#C7B89A]/40 p-4 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[9px] tracking-[2px] text-[#C75A28] font-bold block mb-1">02 / VISION</span>
                <h2 className="font-serif text-base font-light text-[#2B2C2A] mb-1">Our Vision</h2>
                <p className="text-[11px] text-[#2B2C2A]/90 leading-relaxed font-light">
                  To become a leading furnishing solutions brand with uncompromised design and dependable inventory.
                </p>
              </div>
            </div>

            {/* Approach (Mobile Neeche Center / Full Width) */}
            <div className="col-span-2 bg-white/90 border border-[#C7B89A]/40 p-5 rounded-2xl shadow-sm text-center mt-1">
              <span className="text-[9px] tracking-[2px] text-[#C75A28] font-bold block mb-1">03 / APPROACH</span>
              <h2 className="font-serif text-lg font-light text-[#2B2C2A] mb-1">Our Approach</h2>
              <p className="text-xs text-[#2B2C2A]/90 leading-relaxed font-light max-w-xs mx-auto">
                We believe successful commercial partnerships begin with total transparency and verified specifications.
              </p>
            </div>

          </div>

        </section>

       {/* ========================================================
            3. CATALOGUE VOLUMES
            ======================================================== */}
        <section className="pt-16 pb-0 bg-gradient-to-b from-[#1b1c19] via-[#161915] to-[#121311] border-t border-[#C7B89A]/30 relative overflow-hidden select-none">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#5A6249]/10 blur-[140px] pointer-events-none rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C7B89A] font-bold block mb-1">
              CATALOGUE VOLUMES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] font-light">
              Interactive Swatch Volumes
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F2EB]/70 mt-1">
              <span className="hidden sm:inline">Hover across our core fabric volumes to inspect texture profiles.</span>
              <span className="sm:hidden">Tap across our core fabric volumes to inspect texture profiles.</span>
            </p>
          </div>

          {/* Mobile View */}
          <div className="block sm:hidden px-4 space-y-4 pb-8 relative z-10">
            {VOLUMES.map((vol) => (
              <div 
                key={vol.id}
                onClick={() => setActiveVolume(activeVolume === vol.id ? null : vol.id)}
                className="relative rounded-2xl overflow-hidden h-[320px] shadow-lg border border-[#C7B89A]/20 cursor-pointer bg-[#141613]"
              >
                <img
                  src={vol.image}
                  alt={vol.title}
                  onError={(e: any) => {
                    e.currentTarget.src = vol.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#E6C687] uppercase tracking-wider block">VOLUME {vol.num}</span>
                    <h3 className="font-serif text-xl text-white font-medium">{vol.title}</h3>
                  </div>
                  <div className="bg-[#141613]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#C7B89A]/30">
                    <p className="font-serif text-[11px] text-[#E6C687]">{vol.tagline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div
            onMouseLeave={() => setActiveVolume(null)}
            className="hidden sm:block relative w-full h-[450px] lg:h-[62vh] min-h-[420px] overflow-hidden m-0 p-0"
          >
            <div className="w-full h-full flex flex-row items-stretch m-0 p-0">
              {VOLUMES.map((vol) => {
                const isOpen = activeVolume === vol.id;
                return (
                  <div
                    key={vol.id}
                    onClick={() => setActiveVolume(activeVolume === vol.id ? null : vol.id)}
                    onMouseEnter={() => setActiveVolume(vol.id)}
                    className={`relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden border-r border-[#C7B89A]/20 flex flex-col group ${
                      isOpen ? "flex-[4] lg:flex-[1.4]" : activeVolume !== null ? "flex-[0.5] lg:flex-[0.8]" : "flex-1"
                    }`}
                  >
                    <img
                      src={vol.image}
                      alt={vol.title}
                      onError={(e: any) => {
                        if (!e.currentTarget.dataset.triedAlt) {
                          e.currentTarget.dataset.triedAlt = "true";
                          e.currentTarget.src = vol.altImage;
                        } else {
                          e.currentTarget.src = vol.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover object-top block z-0 transition-transform duration-500 ease-out group-hover:scale-102"
                    />
                    <div className={`absolute bottom-5 left-4 right-4 z-20 flex items-center justify-between transition-all duration-300 pointer-events-none ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      <div className="bg-[#141613]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C7B89A]/30 shadow-xl">
                        <p className="font-serif text-xs text-[#E6C687] font-semibold drop-shadow">{vol.tagline}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            BOTTOM TICKER MARQUEE
            ======================================================== */}
        <section className="bg-[#484F39] py-3.5 overflow-hidden select-none border-t border-[#363c2b] relative">
          <div className="about-marquee-track flex items-center whitespace-nowrap">
            {[...BOTTOM_TICKER_ITEMS, ...BOTTOM_TICKER_ITEMS, ...BOTTOM_TICKER_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="text-[#F5F2EB] text-[11px] font-sans font-semibold tracking-[0.22em] uppercase px-6">
                  {item}
                </span>
                <span className="text-[#C75A28] text-xs font-serif opacity-90">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}