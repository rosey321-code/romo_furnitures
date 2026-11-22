"use client";
import React, { useState } from "react";

// 1. Categories Section
export function Categories() {
  const categories = [
    { title: "Curtain & Drapery", desc: "Pure linens, sheers, & room darkening velours." },
    { title: "Sofa & Upholstery", desc: "High rub-count chenilles, bouclés, and textured weaves." },
    { title: "Cushions & Accents", desc: "Intricate embroideries and jacquard damasks." },
    { title: "Contract & Hospitality", desc: "Fire-retardant and stain-resistant certified weaves." },
  ];

  return (
    <section id="categories" className="py-24 bg-[#F5F2EB] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#5A6249] font-bold">Catalog / 01</p>
            <h2 className="font-serif text-4xl text-[#2B2C2A] mt-1">Core Collections</h2>
          </div>
          <span className="text-xs text-[#2B2C2A]/60 hidden md:block">B2B Specifications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="border border-[#C7B89A] p-8 rounded-xl bg-[#F5F2EB] hover:bg-[#C7B89A]/10 transition-colors">
              <span className="text-xs font-mono text-[#C75A28] mb-4 block">0{i + 1}</span>
              <h3 className="font-serif text-2xl text-[#2B2C2A] mb-2">{cat.title}</h3>
              <p className="text-xs text-[#2B2C2A]/70 leading-relaxed mb-6">{cat.desc}</p>
              <a href="#quote" className="text-xs uppercase tracking-widest font-semibold text-[#C75A28] hover:underline">
                Request Samples →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Color Palette Filter Strip
export function Shades() {
  const [active, setActive] = useState("All");
  const palettes = ["All", "Warm Ivory", "Earth Terracotta", "Textile Sage", "Deep Charcoal"];

  return (
    <section id="shades" className="py-20 bg-[#C7B89A]/20 border-y border-[#C7B89A]/40 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#5A6249] font-bold">Dealer Tool / 02</p>
        <h2 className="font-serif text-4xl text-[#2B2C2A] mt-2 mb-8">Filter by Color Scheme</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {palettes.map((shade) => (
            <button
              key={shade}
              onClick={() => setActive(shade)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                active === shade
                  ? "bg-[#2B2C2A] text-[#F5F2EB]"
                  : "bg-[#F5F2EB] text-[#2B2C2A] border border-[#C7B89A] hover:bg-[#C7B89A]/30"
              }`}
            >
              {shade}
            </button>
          ))}
        </div>

        <div className="p-10 border border-dashed border-[#C7B89A] rounded-2xl bg-[#F5F2EB]/50">
          <p className="text-sm text-[#2B2C2A]/70">
            Showing fabric swatches matched for: <strong className="text-[#C75A28]">{active}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// 3. Story Section
export function Story() {
  return (
    <section id="story" className="py-24 bg-[#F5F2EB] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#5A6249] font-bold">Legacy & Craft / 03</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2B2C2A] leading-tight">
            Rooted in quality, <br />
            <span className="italic">engineered for heavy contract use.</span>
          </h2>
          <p className="text-sm md:text-base text-[#2B2C2A]/80 leading-relaxed">
            ROMO Furnishers bridges the gap between boutique European aesthetics and industrial reliability. We supply wholesale lots directly to design studios and commercial hospitality projects.
          </p>
        </div>
        <div className="h-80 bg-[#C7B89A]/40 rounded-2xl flex items-center justify-center border border-[#C7B89A]">
          <span className="font-serif italic text-xl text-[#2B2C2A]/60">Editorial Image Placement</span>
        </div>
      </div>
    </section>
  );
}

// 4. Warehouses Section (Textile Sage panel)
export function Warehouses() {
  return (
    <section id="warehouses" className="py-24 bg-[#5A6249] text-[#F5F2EB] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest text-[#C7B89A] font-bold">Cutting Edge Infrastructure / 04</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-2 text-[#F5F2EB]">Massive Ready Stock. Zero Delays.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#F5F2EB]/20 p-8 rounded-xl bg-white/5">
            <span className="font-serif text-5xl text-[#C75A28] font-bold block mb-3">01</span>
            <h3 className="font-serif text-2xl mb-2">Central Depots</h3>
            <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">Ready inventories for top 200 high-demand SKUs.</p>
          </div>
          <div className="border border-[#F5F2EB]/20 p-8 rounded-xl bg-white/5">
            <span className="font-serif text-5xl text-[#C75A28] font-bold block mb-3">02</span>
            <h3 className="font-serif text-2xl mb-2">Batch Precision</h3>
            <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">Guaranteed dye-lot consistency across large volume orders.</p>
          </div>
          <div className="border border-[#F5F2EB]/20 p-8 rounded-xl bg-white/5">
            <span className="font-serif text-5xl text-[#C75A28] font-bold block mb-3">03</span>
            <h3 className="font-serif text-2xl mb-2">Express Dispatch</h3>
            <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">Logistics partner network ensuring next-day dealer shipments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Bulk Order Process & Quote Form
export function Process() {
  return (
    <section id="quote" className="py-24 bg-[#F5F2EB] px-6">
      <div className="max-w-5xl mx-auto bg-white border border-[#C7B89A] p-8 md:p-14 rounded-2xl shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-[#5A6249] font-bold">Trade Enquiries</p>
          <h2 className="font-serif text-4xl text-[#2B2C2A] mt-2">Request Wholesale Pricing</h2>
          <p className="text-xs text-[#2B2C2A]/70 mt-2">Share your fabric requirements and meterage for custom dealer pricing.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2B2C2A] font-medium mb-2">Business Name</label>
              <input type="text" placeholder="Design Studio / Firm" className="w-full border border-[#C7B89A] rounded-lg p-3 text-sm focus:outline-[#C75A28]" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#2B2C2A] font-medium mb-2">WhatsApp / Phone</label>
              <input type="tel" placeholder="+92 300 0000000" className="w-full border border-[#C7B89A] rounded-lg p-3 text-sm focus:outline-[#C75A28]" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#2B2C2A] font-medium mb-2">Required Quantity & Fabric Type</label>
            <textarea rows={3} placeholder="e.g. 150m Bouclé Sand, 80m Curtain Sheer..." className="w-full border border-[#C7B89A] rounded-lg p-3 text-sm focus:outline-[#C75A28]" />
          </div>
          <button type="submit" className="w-full bg-[#C75A28] hover:bg-[#a6481d] text-[#F5F2EB] py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md">
            Submit Quotation Request
          </button>
        </form>
      </div>
    </section>
  );
}