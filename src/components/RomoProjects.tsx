"use client";

import React from "react";

/* ============================================================
   SETTINGS
   ============================================================ */
const CATALOG_LINK = "/digital-catalog";

const CLIENT_PROJECTS = [
  { id: 1, name: "Silaj", image: "/projects/project1.webp" },
  { id: 2, name: "Sheikh Jee", image: "/projects/project2.webp" },
  { id: 3, name: "Classic Interior", image: "/projects/project3.webp" },
  { id: 4, name: "Nevi Home", image: "/projects/project4.webp" },
  { id: 5, name: "Mr. Barry", image: "/projects/project5.webp" },
  { id: 6, name: "Bilal Interior", image: "/projects/project6.webp" },
];

export default function ColorVibrancy() {
  return (
    <section className="w-full bg-[#2E3525] border-y border-white/10 select-none">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-12 px-6 sm:px-10 py-6 lg:py-14">
        
        {/* LEFT: text */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#DDB978] mb-1.5 lg:mb-3">
            OUR CLIENTS & PARTNERS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl font-medium leading-[1.12] text-[#F5F2EB] mb-2.5 lg:mb-4">
            Chosen by leading interior & furniture brands
          </h2>
          <p className="text-xs sm:text-base leading-relaxed text-[#F5F2EB]/75 max-w-xl mx-auto lg:mx-0 mb-3 lg:mb-6">
            Top furniture makers and interior designers choose Romo fabrics for
            their luxury sofas, curtains, and living projects.
          </p>
        </div>

        {/* RIGHT: logo tiles */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-5 max-w-[420px] lg:max-w-[560px] mx-auto lg:ml-auto lg:mr-0 -mt-2 lg:mt-0 pb-2 lg:pb-8">
            {CLIENT_PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                title={project.name}
                /* Yahan max-w chota kiya hai mobile ke liye aur lg:max-w-none desktop ke liye */
                className={`mx-auto w-full max-w-[100px] sm:max-w-[130px] lg:max-w-none aspect-square rounded-xl sm:rounded-2xl bg-[#F2E5CE] p-[2px] sm:p-1 shadow-lg shadow-black/30 ${
                  idx % 3 === 1 ? "translate-y-2 lg:translate-y-8" : "-translate-y-1 lg:translate-y-0"
                }`}
              >
                <div className="w-full h-full rounded-[10px] sm:rounded-[13px] overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}