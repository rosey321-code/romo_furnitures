"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 🏢 SHOWROOM FLOOR GALLERY PHOTOS
const SHOWROOM_SLIDES = [
  {
    id: 1,
    tag: "THE FABRIC WALL",
    title: "Over 200+ running rolls displayed in true daylight.",
    image: "/showroom/warehouse/showroom1.webp",
  },
  {
    id: 2,
    tag: "THE SEATING BAY",
    title: "Double Mosha Velvet & Bouclé upholstered silhouettes.",
    image: "/showroom/warehouse/showroom2.webp",
  },
  {
    id: 3,
    tag: "DRAPERY DROP GALLERY",
    title: "300cm extra-width ceiling drops hanging live.",
    image: "/showroom/warehouse/showroom3.webp",
  },
  {
    id: 4,
    tag: "SWATCH ATELIER",
    title: "Physical hardbound books, color swatches, and GSM lab scales.",
    image: "/showroom/warehouse/showroom4.webp",
  },
  {
    id: 5,
    tag: "WAREHOUSE VAULT",
    title: "Uncut roll inspection ready for continuous dispatch.",
    image: "/showroom/warehouse/showroom5.webp",
  },
];

export default function ShowroomPage() {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <>
      <Navbar />

      <main className="bg-[#F5F2EB] text-[#2B2C2A] overflow-hidden select-none">
        
        <style jsx global>{`
          @keyframes subtlePulse {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.02); }
          }
          .animate-logo-pulse {
            animation: subtlePulse 6s ease-in-out infinite;
          }
        `}</style>

        {/* ========================================================
            1. HERO: WATERMARK (Responsive: 35vw on mobile, 95vw on desktop)
            ======================================================== */}
        <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 px-6 text-center overflow-hidden bg-[#F5F2EB] border-b border-[#C7B89A]/30">
          
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-15 pointer-events-none select-none translate-y-6 px-4">
<span className="font-serif text-[35vw] sm:text-[500px] lg:text-[320px] font-black text-[#484F39] leading-none uppercase tracking-tighter whitespace-nowrap">
              ROMO
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#484F39] block">
              VISIT · LAHORE & KARACHI HUBS
            </span>

            <div className="space-y-1 select-none">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[100px] font-bold tracking-tight text-[#2B2C2A] leading-none uppercase animate-logo-pulse">
                The ROMO Flagship.
              </h1>
              <span className="block text-xs sm:text-sm font-sans font-semibold tracking-[0.4em] uppercase text-[#C75A28] pt-2">
                E X P E R I E N C E • H U B S
              </span>
            </div>

            <p className="text-xs sm:text-base text-[#2B2C2A]/80 font-sans leading-relaxed max-w-2xl mx-auto font-light pt-2">
              A fabric is a multi decade decision. Don’t make it from a phone screen. Walk our floor run your hand along a double mosha weave, lift a roll of textured bouclé. Inspect swatches under calibrated daylight. Talk to textile engineers who supply hundreds of showrooms across Pakistan.
            </p>
          </div>
        </section>

        {/* ========================================================
            2. INTERACTIVE SHOWROOM FLOOR 
            ======================================================== */}
        <section className="px-4 sm:px-8 lg:px-12 py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            
            {/* 📱 MOBILE VIEW */}
            <div className="block lg:hidden space-y-4">
              
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                {activeSlide === null ? (
                  <>
                    <video
                      id="mobile-showroom-video"
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      onEnded={() => setIsVideoEnded(true)}
                      onPlay={() => setIsVideoEnded(false)}
                      className="w-full h-full object-cover"
                    >
                      <source src="/showroom/warehouse/showroom6.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>

                    {isVideoEnded && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 backdrop-blur-[2px] transition-all">
                        <button
                          onClick={() => {
                            const videoEl = document.getElementById("mobile-showroom-video") as HTMLVideoElement;
                            if (videoEl) {
                              videoEl.currentTime = 0;
                              videoEl.play();
                              setIsVideoEnded(false);
                            }
                          }}
                          className="flex items-center gap-2 bg-[#484F39] hover:bg-[#C75A28] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl border border-white/20 active:scale-95 transition-all"
                        >
                          <span>↻</span>
                          <span>Replay Video</span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    src={SHOWROOM_SLIDES[activeSlide].image}
                    alt={SHOWROOM_SLIDES[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none text-white z-10">
                  <span className="text-[8px] uppercase tracking-wider text-[#E6C687] font-bold block">
                    {activeSlide === null ? "LIVE WALKTHROUGH" : SHOWROOM_SLIDES[activeSlide].tag}
                  </span>
                  <h4 className="font-serif text-xs font-medium line-clamp-1">
                    {activeSlide === null ? "Romo Central Distribution Hub" : SHOWROOM_SLIDES[activeSlide].title}
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => {
                    setActiveSlide(null);
                    setIsVideoEnded(false);
                  }}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 bg-neutral-900 flex items-center justify-center text-white ${
                    activeSlide === null ? "border-white" : "border-transparent opacity-60"
                  }`}
                >
                  <span className="text-[10px] font-bold text-[#E6C687]">▶ Video</span>
                </button>

                {SHOWROOM_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 ${
                      activeSlide === idx ? "border-white" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={slide.image} alt={slide.tag} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </div>

            {/* 💻 DESKTOP VIEW */}
            <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
              
              <div className="col-span-6 grid grid-cols-3 gap-3.5">
                
                <button
                  onClick={() => {
                    setActiveSlide(null);
                    setIsVideoEnded(false);
                  }}
                  className={`relative aspect-[503/896] rounded-2xl overflow-hidden transition-all duration-300 border-2 bg-neutral-900 flex items-center justify-center text-white shadow-md ${
                    activeSlide === null
                      ? "border-white scale-[1.02] ring-2 ring-white/50"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="text-center p-2">
                    <span className="block text-xs uppercase tracking-wider font-bold text-[#E6C687]">▶ Video</span>
                  </div>
                </button>

                {SHOWROOM_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative aspect-[503/896] rounded-2xl overflow-hidden transition-all duration-300 border-2 shadow-md ${
                      activeSlide === idx
                        ? "border-white scale-[1.02] ring-2 ring-white/50"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.tag}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}

              </div>

              <div className="col-span-6 relative w-full max-w-sm mx-auto aspect-[503/896] max-h-[500px] -translate-y-10 rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/15 flex items-center justify-center">                
                {activeSlide === null ? (
                  <>
                    <video
                      id="desktop-showroom-video"
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      onEnded={() => setIsVideoEnded(true)}
                      onPlay={() => setIsVideoEnded(false)}
                      className="w-full h-full object-cover"
                    >
                      <source src="/showroom/warehouse/showroom6.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>

                    {isVideoEnded && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 backdrop-blur-[2px] transition-all">
                        <button
                          onClick={() => {
                            const videoEl = document.getElementById("desktop-showroom-video") as HTMLVideoElement;
                            if (videoEl) {
                              videoEl.currentTime = 0;
                              videoEl.play();
                              setIsVideoEnded(false);
                            }
                          }}
                          className="flex items-center gap-2 bg-[#00000000] hover:bg-[#484F39] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl border border-white/20 hover:scale-105 transition-all"
                        >
                          <span>↻</span>
                          <span>Replay Video</span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    src={SHOWROOM_SLIDES[activeSlide].image}
                    alt={SHOWROOM_SLIDES[activeSlide].title}
                    className="w-full h-full object-cover transition-all duration-500 ease-out"
                  />
                )}

                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none text-white z-10">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E6C687] font-bold block mb-0.5">
                    {activeSlide === null ? "LIVE WALKTHROUGH" : SHOWROOM_SLIDES[activeSlide].tag}
                  </span>
                  <h3 className="font-serif text-sm font-medium leading-tight drop-shadow line-clamp-1">
                    {activeSlide === null ? "Romo Central Distribution Hub" : SHOWROOM_SLIDES[activeSlide].title}
                  </h3>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            3. THE STORY OF THE FLOOR
            ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#F5F2EB] px-6 lg:px-12 border-b border-[#C7B89A]/30">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-[15px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block">
                B2B WHOLESALE SHOWROOM ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2C2A] leading-tight tracking-tight">
                Designed as a working trade atelier <span className="italic font-normal text-[#484F39]">engineered for B2B procurement.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#2B2C2A]/70 font-sans tracking-wide pt-1">
                Direct mill supply for furniture makers, interior architects, and contract projects across Pakistan.
              </p>
            </div>

            <div className="relative mb-6">
              <div className="absolute top-1/2 inset-x-0 h-[1.5px] bg-[#C7B89A]/40 -translate-y-1/2 z-0 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-3 relative z-10">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="hidden md:flex items-center">
                    <span className="w-4 h-4 rounded-full bg-[#C75A28] border-2 border-[#F5F2EB] shadow-md inline-block ring-2 ring-[#C75A28]/20" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              
              <div className="space-y-3">
                <span className="text-[15px] font-mono font-bold text-[#484F39] uppercase tracking-wider block">
                  01 · TRADE SPECIFICATION
                </span>
                <p className="text-xs sm:text-sm text-[#2B2C2A]/80 font-sans leading-relaxed">
                  Bring your commercial schedules, project yardages, and room mood boards. We cross-reference rub counts, Martindale durability, and fire retardant contract requirements tailored for bulk furniture manufacturing.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[15px] font-mono font-bold text-[#484F39] uppercase tracking-wider block">
                  02 · LIVE ROLL INSPECTION
                </span>
                <p className="text-xs sm:text-sm text-[#2B2C2A]/80 font-sans leading-relaxed">
                  Every running volume is physically stocked on the floor 101 Mosha Velvet, 201 Double Mosha, Boucle, and Drapery Sheers. Inspect full 50 meter rolls under 5000K calibrated daylight to verify continuous dye-lots.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[15px] font-mono font-bold text-[#C75A28] uppercase tracking-wider block">
                  03 · DIRECT B2B PRICING & LOGISTICS
                </span>
                <p className="text-xs sm:text-sm text-[#2B2C2A]/80 font-sans leading-relaxed">
                  Direct consultation with senior mill partners. Benefit from verified wholesale tier pricing, on the-spot physical swatches, continuous roll reserves, and immediate freight dispatch from our central warehouse.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            4. ADDRESSES & TIMINGS
            ======================================================== */}
        <section className="py-20 lg:py-24 bg-[#292B27] text-[#F5F2EB] px-6 lg:px-12 border-y border-[#3E4334]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
            
            {/* COLUMN 1: ADDRESSES */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#D8C3A5]/40 bg-[#484F39]/30 text-[#D8C3A5] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[15px] uppercase tracking-[0.2em] text-[#D8C3A5] font-bold block">
                    ADDRESSES
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5F2EB]/60">CENTRAL HUBS</span>
                </div>
              </div>

              <div className="space-y-5 pt-1">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#F5F2EB] tracking-tight">
                    Lahore
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#D8C3A5] mt-1 leading-relaxed">
                    Full fabric rolls & swatch archive available. Walk-ins & trade consultations welcome.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#484F39]/60">
                  <h3 className="font-serif text-3xl font-bold text-[#C75A28] tracking-tight">
                    Karachi
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#D8C3A5] mt-1 leading-relaxed">
                    Commercial distribution & live fabric inspection desk open for bulk orders.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2: HOURS */}
            <div className="space-y-6 md:border-l border-[#484F39]/50 md:pl-10 lg:pl-14">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#D8C3A5]/40 bg-[#484F39]/30 text-[#D8C3A5] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[15px] uppercase tracking-[0.2em] text-[#D8C3A5] font-bold block">
                    HOURS
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5F2EB]/60">TRADE DESK</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#D8C3A5] tracking-tight">
                  24 / 7
                </h3>
                <h4 className="font-sans font-bold text-sm sm:text-base text-[#F5F2EB] uppercase tracking-wide">
                  Always Available For B2B Support
                </h4>
                <p className="text-xs sm:text-sm text-[#F5F2EB]/75 font-sans leading-relaxed pt-1">
                  Direct roll dispatches, continuous wholesale bookings, and private showroom viewings open round the clock.
                </p>
              </div>
            </div>

            {/* COLUMN 3: REACH US */}
            <div className="space-y-6 md:border-l border-[#484F39]/50 md:pl-10 lg:pl-14">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#C75A28]/50 bg-[#C75A28]/20 text-[#C75A28] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[15px] uppercase tracking-[0.2em] text-[#C75A28] font-bold block">
                    REACH US
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5F2EB]/60">COMMERCIAL LINE</span>
                </div>
              </div>

              <div className="space-y-4 pt-1">
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-wider text-[#D8C3A5] font-bold block mb-1">
                    WHATSAPP DIRECT
                  </span>
                  <a
                    href="https://wa.me/923135288233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-2xl font-bold text-[#F5F2EB] hover:text-[#C75A28] transition-colors block"
                  >
                    0313 5288233
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase font-mono tracking-wider text-[#D8C3A5] font-bold block mb-1">
                    OFFICIAL MAIL
                  </span>
                  <a
                    href="mailto:info@romofurnitures.com"
                    className="text-sm sm:text-base font-sans text-[#F5F2EB]/90 hover:text-[#C75A28] transition-colors font-medium block"
                  >
                    info@romofurnitures.com
                  </a>
                </div>

                {/* Social Icons */}
                <div className="pt-2 flex items-center gap-3">
                  
                  {/* WhatsApp Icon */}
                  <a
                    href="https://wa.me/923135288233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#D8C3A5]/40 text-[#D8C3A5] hover:bg-[#C75A28] hover:border-[#C75A28] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <svg className="w-7 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.764.966-.937 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/romofurnishers?rpxt=MWlpaWJwejI4NHB0ag=="
                    className="w-11 h-11 rounded-full border border-[#D8C3A5]/40 text-[#D8C3A5] hover:bg-[#C75A28] hover:border-[#C75A28] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@romo.furnishers?_r=1&_t=ZS-9BAqF8yVZ8E"
                    className="w-11 h-11 rounded-full border border-[#D8C3A5]/40 text-[#D8C3A5] hover:bg-[#C75A28] hover:border-[#C75A28] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.34 22a6.33 6.33 0 006.33-6.32V8.92a8.28 8.28 0 005.17 1.83V7.27a4.83 4.83 0 01-1.25-.58z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            5. WHAT YOU'LL SEE
            ======================================================== */}
        <section className="py-16 lg:py-24 bg-white px-6 lg:px-12 border-b border-[#C7B89A]/30">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="max-w-3xl space-y-2">
              <span className="text-[15px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block">
                B2B WHOLESALE
              </span>
              
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2C2A] leading-tight tracking-tight">
                What you will see in our showroom
              </h2>

              <p className="text-sm sm:text-base text-[#2B2C2A]/75 font-sans pt-1">
                Bring photos of your room and sofa size our experts will help you pick the exact matching fabric.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              <div className="space-y-2 pl-4 border-l-2 border-[#484F39]">
                <span className="text-xs font-mono font-bold text-[#484F39] uppercase tracking-wider block">
                  01 · COLOR MATCH
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2C2A]">
                  Room & Color Match
                </h4>
                <p className="text-sm text-[#2B2C2A]/75 font-sans leading-relaxed">
                  Show us your wall paint or room photos, and we will pair the best sofa and curtain weaves for your space.
                </p>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-[#484F39]">
                <span className="text-xs font-mono font-bold text-[#484F39] uppercase tracking-wider block">
                  02 · SWATCH BOOKS
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2C2A]">
                  Feel It In Person
                </h4>
                <p className="text-sm text-[#2B2C2A]/75 font-sans leading-relaxed">
                  Never buy from a screen. Flip through our sample books and feel the real weight, softness, and velvet quality.
                </p>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-[#C75A28]">
                <span className="text-xs font-mono font-bold text-[#C75A28] uppercase tracking-wider block">
                  03 · REAL STOCK
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2C2A]">
                  2 Lac+ Meters Ready
                </h4>
                <p className="text-sm text-[#2B2C2A]/75 font-sans leading-relaxed">
                  More than 200,000 meters available in our warehouse. Whatever quantity you need is ready for fast dispatch.
                </p>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-[#484F39]">
                <span className="text-xs font-mono font-bold text-[#484F39] uppercase tracking-wider block">
                  04 · DIRECT PRICE
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2C2A]">
                  Factory Wholesale Rate
                </h4>
                <p className="text-sm text-[#2B2C2A]/75 font-sans leading-relaxed">
                  No middleman margin. Enjoy direct factory pricing and receive your itemized wholesale quote right away.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            6. THE INVITATION BANNER
            ======================================================== */}
        <section className="py-12 lg:py-16 bg-[#F5F2EB] text-[#2B2C2A] px-6 text-center relative overflow-hidden border-t border-[#C7B89A]/30">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="text-[15px] uppercase tracking-[0.3em] text-[#C75A28] font-bold block">
              THE INVITATION
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#2B2C2A] leading-tight font-bold">
              Feel it before you order.
            </h2>

            <p className="text-xs sm:text-base text-[#2B2C2A]/80 font-sans leading-relaxed max-w-xl mx-auto font-light">
              Out-of-town visits, designer consultations, and private appointments are available on request. Walk-ins always welcome.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923135288233?text=Hi%20ROMO,%20I%20would%20like%20to%20inquire%20about%20fabrics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#484F39] hover:bg-[#C75A28] text-[#F5F2EB] text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
              >
                WHATSAPP US
              </a>

              <Link
                href="/contact"
                className="border-2 border-[#2B2C2A] text-[#2B2C2A] hover:bg-[#2B2C2A] hover:text-[#F5F2EB] text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-full transition-all"
              >
                CONTACT US
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/share/1Ei4gigcF4/"
                className="w-11 h-11 rounded-full border border-[#2B2C2A]/30 text-[#2B2C2A] hover:bg-[#484F39] hover:border-[#484F39] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/romofurnishers?rpxt=MWlpaWJwejI4NHB0ag=="
                className="w-11 h-11 rounded-full border border-[#2B2C2A]/30 text-[#2B2C2A] hover:bg-[#484F39] hover:border-[#484F39] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@romo.furnishers?_r=1&_t=ZS-9BAqF8yVZ8E"
                className="w-11 h-11 rounded-full border border-[#2B2C2A]/30 text-[#2B2C2A] hover:bg-[#484F39] hover:border-[#484F39] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.34 22a6.33 6.33 0 006.33-6.32V8.92a8.28 8.28 0 005.17 1.83V7.27a4.83 4.83 0 01-1.25-.58z" />
                </svg>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}