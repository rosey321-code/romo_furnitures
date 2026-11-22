"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Master list of catalog books (Future mein yahan 106, 107 add hongi)
const CATALOG_BOOKS = [
  {
    id: "105",
    catNo: "CAT No. 105",
    name: "Mosha Velvet",
    gsm: "220 GSM",
    application: "Sofa and Curtains Fabrics",
    shadesCount: "36 Colors Available",
    coverImage: "/catalog105/105book.webp", // Yahan aap catalog book ka real cover image dal sakti hain
    link: "/digital-catalog/105",
  },
];

export default function DigitalCatalogHub() {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#2B2C2A] font-sans selection:bg-[#484F39] selection:text-[#F5F2EB] flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header */}
        <section className="w-full px-5 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-4">
          <div className="max-w-7xl mx-auto">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block mb-1.5">
              THE TEXTILE ARCHIVE
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#2B2C2A] tracking-tight leading-[1.1]">
              Digital Catalogs. <br />
              <span className="italic font-normal text-[#484F39]">
                Select a catalog book to explore shades.
              </span>
            </h1>
          </div>
        </section>

        {/* Books Grid */}
        <section className="w-full px-5 sm:px-10 lg:px-16 pt-4 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto">
            {/* Mobile pe chote boxes aur 2 columns (ya max-w constraint), Desktop pe grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 justify-start">
              {CATALOG_BOOKS.map((book) => (
                <Link
                  key={book.id}
                  href={book.link}
                  className="group flex flex-col bg-transparent cursor-pointer w-full max-w-[340px]"
                >
                  {/* Clean Book Cover Box */}
                  <div className="relative w-full aspect-[4/4.7] bg-[#EFECE6] rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-3 shadow-sm group-hover:shadow-md transition-all duration-300 border border-[#C7B89A]/30">
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-white/90 backdrop-blur-sm text-[#2B2C2A] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-xs">
                      {book.gsm}
                    </span>

                    <img
                      src={book.coverImage}
                      alt={book.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details underneath */}
                  <div className="flex flex-col gap-0.5 sm:gap-1 px-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold text-[#484F39]">
                      <span>{book.application}</span>
                      <span className="text-[#C75A28] font-semibold tracking-normal normal-case text-[11px] sm:text-xs">
                        {book.shadesCount}
                      </span>
                    </div>

                    <h3 className="font-serif text-base sm:text-2xl text-[#2B2C2A] group-hover:text-[#C75A28] transition-colors leading-tight">
                      {book.catNo} — {book.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer with proper gap */}
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}