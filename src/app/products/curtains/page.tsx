"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sirf Mosha Velvet (Future mein jab aur fabrics aayen gi toh yahan add hoti jayen gi aur unki apni ID hogi)
const SOFA_PRODUCTS = [
  {
    id: "mosha-velvet", // Ye id detail page ke [id]/page.tsx se match karegi
    catNo: "CAT No. 105",
    name: "Mosha Velvet",
    category: "Mosha Velvet",
    gsm: "220 GSM",
    shadesCount: "36 Colors Available",
    image: "/products/curtain product.webp",
    link: "/products/curtains/mosha-velvet", // Sahi route path
  },
];

export default function CurtainsHubPage() {
  const [activeTab, setActiveTab] = useState("All");
  
  // Abhi sirf All aur Velvet (Mosha Velvet) hain. Future mein yahan aur add ho jayen gi.
  const categories = ["All", "Mosha Velvet"];

  const filteredProducts = activeTab === "All" 
    ? SOFA_PRODUCTS 
    : SOFA_PRODUCTS.filter(item => item.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#2B2C2A] font-sans selection:bg-[#484F39] selection:text-[#F5F2EB]">
      <Navbar />

      {/* Header & Clean Filter Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-10 pb-4">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block mb-2">
          COLLECTION HUB
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2C2A] tracking-tight mb-3">
          Curtain Fabrics
        </h1>
        <p className="text-xs sm:text-sm text-[#2B2C2A]/70 max-w-xl leading-relaxed">
          Explore our exclusive range of premium curtain fabrics. Select a collection below to view all available shade swatches and options.
        </p>

        {/* Clean Filter Tabs (Sirf All aur Velvet) */}
        <div className="flex items-center gap-2 mt-6 pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === cat
                  ? "bg-[#484F39] text-white shadow-sm"
                  : "bg-white/80 text-[#2B2C2A] hover:bg-white border border-[#C7B89A]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 pt-2">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className="group flex flex-col bg-transparent rounded-2xl overflow-hidden transition-all duration-300 block cursor-pointer"
              >
                {/* Larger Sofa Image Box */}
                <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] bg-white rounded-2xl overflow-hidden p-6 sm:p-8 flex items-center justify-center border border-[#C7B89A]/30 shadow-xs group-hover:shadow-md transition-all">
                  <span className="absolute top-3 left-3 z-10 bg-[#484F39] text-[#F5F2EB] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    {product.gsm}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain scale-140 sm:scale-150 translate-y-5"
                  />
                </div>

                {/* Text Details */}
                <div className="pt-4 pb-2 px-2 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-[#484F39]">
                    <span>{product.catNo}</span>
                    <span className="text-[#C75A28]">{product.shadesCount}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2B2C2A] group-hover:text-[#C75A28] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1 pt-2 border-t border-[#C7B89A]/30 text-xs font-bold text-[#484F39]">
                    <span>View Shades & Swatches</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#C7B89A]/30">
            <p className="text-[#2B2C2A]/60 text-xs uppercase tracking-widest font-bold">
              No fabrics found in this category yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}