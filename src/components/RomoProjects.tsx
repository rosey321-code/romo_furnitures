"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const CLIENT_PROJECTS = [
  { id: 1, name: "Silaj", image: "/projects/project1.webp" },
  { id: 2, name: "Sheikh Jee", image: "/projects/project2.webp" },
  { id: 3, name: "Classic Interior", image: "/projects/project3.webp" },
  { id: 4, name: "Raheem Interiors", image: "/projects/project4.webp" },
  { id: 5, name: "Mr. Barry", image: "/projects/project5.webp" },
  { id: 6, name: "Bilal Interior", image: "/projects/project6.webp" },
];

export default function ColorVibrancy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full bg-[#2E3525] py-20 min-h-[400px]"></div>;
  }

  return (
    <section className="w-full bg-[#2E3525] overflow-hidden py-16 md:py-24 border-t border-white/10 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">

        {/* 1. CENTER CONTENT */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#dd6526] mb-3">
            OUR CLIENTS & PARTNERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.15] text-[#F5F2EB] mb-4">
            Chosen by leading interior & furniture brands
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#F5F2EB]/75 max-w-xl mx-auto">
            Top furniture makers and interior designers choose Romo fabrics for their luxury sofas, curtains, and living projects.
          </p>
        </div>

        {/* 2. LOGOS GRID (Desktop) & SLIDER (Mobile) */}
        <div>
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-6 gap-8 items-center justify-center">
            {CLIENT_PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="relative w-full max-w-[150px] mx-auto aspect-square flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority={true}
                  loading="eager"
                  sizes="150px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>

          {/* Tablet Grid (3 columns) */}
          <div className="hidden sm:grid lg:hidden grid-cols-3 gap-6 items-center justify-center">
            {CLIENT_PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="relative w-full max-w-[150px] mx-auto aspect-square flex items-center justify-center"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority={true}
                  loading="eager"
                  sizes="150px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>

          {/* Mobile Sliding Marquee */}
          <div className="block sm:hidden w-full overflow-hidden relative">
            <div className="flex w-max animate-[slideLogos_18s_linear_infinite] hover:[animation-play-state:paused]">
              {[...CLIENT_PROJECTS, ...CLIENT_PROJECTS, ...CLIENT_PROJECTS].map((project, idx) => (
                <div 
                  key={idx} 
                  className="w-[100px] h-[100px] mr-6 flex items-center justify-center relative flex-shrink-0"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes slideLogos {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}