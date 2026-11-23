"use client";
import React from "react";
import Link from "next/link";

/* ============================================================
   SETTINGS
   ============================================================ */
const CATALOG_LINK = "/digital-catalog";
const COLUMN_HEIGHT = "h-[420px] sm:h-[480px] lg:h-[520px]";
const SCROLL_SPEED = "30s";
const BANNER = "/Romo%20books/Romo.webp";

type Item = { tag: string; image: string; fallback: string };

/* ============================================================
   BOOKS
   ============================================================ */
const LEFT_ITEMS: Item[] = [
  {
    tag: "340 GSM",
    image: "/Romo%20books/ROMO1.webp",
    fallback: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    tag: "280 GSM",
    image: "/Romo%20books/ROMO2.webp",
    fallback: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
  },
  {
    tag: "300 GSM",
    image: "/Romo%20books/ROMO3.webp",
    fallback: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=80",
  },
];

const RIGHT_ITEMS: Item[] = [
  {
    tag: "110 GSM",
    image: "/Romo%20books/ROMO4.webp",
    fallback: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    tag: "280 GSM",
    image: "/Romo%20books/ROMO5.webp",
    fallback: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
  },
  {
    tag: "220 GSM",
    image: "/Romo%20books/ROMO6.webp",
    fallback: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
  },
];

/* ============================================================
   Ek scrolling column
   ============================================================ */
function ScrollColumn({
  items,
  direction,
  alt,
  className,
}: {
  items: Item[];
  direction: "up" | "down";
  alt: string;
  className: string;
}) {
  const repeats = Math.ceil(6 / items.length);
  const half = Array.from({ length: repeats }, () => items).flat();
  const track = [...half, ...half];

  return (
    <div className={`${className} ${COLUMN_HEIGHT} overflow-hidden relative z-20`}>
      <div
        className={`${direction === "up" ? "scroll-up-track" : "scroll-down-track"} flex flex-col gap-3`}
      >
        {track.map((item, i) => (
          <Link
            key={i}
            href={CATALOG_LINK}
            className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg group block shrink-0 transition-transform duration-300 hover:scale-[1.02] bg-transparent"
          >
            {/* Mobile: scale-110 as before. Desktop: no zoom, so ROMO at the top is not cut */}
            <img
              src={item.image}
              alt={alt}
              onError={(e) => {
                e.currentTarget.src = item.fallback;
              }}
              className="w-full h-full object-cover object-top scale-110 lg:scale-100 transition-transform duration-700 group-hover:scale-125 lg:group-hover:scale-105 bg-transparent"
            />
            <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md text-[#3d4331] text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full z-10 border border-white/30 shadow-md">
              {item.tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="relative w-full bg-[#3D4331] text-[#F5F2EB] py-8 lg:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none border-b border-[#363c2b]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scrollUp {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            @keyframes scrollDown {
              0% { transform: translateY(-50%); }
              100% { transform: translateY(0); }
            }
            .scroll-up-track { animation: scrollUp ${SCROLL_SPEED} linear infinite; }
            .scroll-down-track { animation: scrollDown ${SCROLL_SPEED} linear infinite; }
            @media (hover: hover) {
              .scroll-up-track:hover,
              .scroll-down-track:hover { animation-play-state: paused; }
            }
          `,
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-8 relative">
        {/* 1. LEFT: books animation */}
        <ScrollColumn
          items={LEFT_ITEMS}
          direction="up"
          alt="Fabric"
          className="col-span-4 sm:col-span-3 lg:col-span-2"
        />

        {/* 2. CENTER: banner */}
        <div className="col-span-8 sm:col-span-9 lg:col-span-8 flex flex-col items-center text-center px-1 sm:px-2">
          <div className="relative w-full max-w-3xl aspect-[4/4.5] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-transparent flex items-center justify-center">
            <img
              src={BANNER}
              alt="Luxury Sofa Fabric"
              className="w-full h-full object-cover object-center bg-transparent"
            />
          </div>

          <div className="mt-3 sm:mt-4 shrink-0 flex flex-col items-center justify-center gap-2 sm:gap-3 z-20">
            <span className="text-[8px] sm:text-xs font-serif italic tracking-[0.3em] sm:tracking-[0.35em] uppercase drop-shadow-md">
              furnishers • wholesale living
            </span>
            <Link
              href={CATALOG_LINK}
              className="border border-[#F5F2EB]/50 bg-transparent hover:bg-[#F2E5CE] text-[#F5F2EB] hover:text-[#292B27] text-[10px] sm:text-xs uppercase tracking-widest font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all shadow-lg hover:scale-105"
            >
              EXPLORE FULL ARCHIVE
            </Link>
          </div>
        </div>

        {/* 3. RIGHT: books */}
        <ScrollColumn
          items={RIGHT_ITEMS}
          direction="down"
          alt="Fabric"
          className="hidden lg:block lg:col-span-2"
        />
      </div>
    </section>
  );
}