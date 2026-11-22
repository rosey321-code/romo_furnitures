
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    fabricType: "Double Mosha Velvet (280 GSM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage = `*New Inquiry via Website*\n\n` +
      `*Name / Studio:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City:* ${formData.city}\n` +
      `*Fabric:* ${formData.fabricType}\n` +
      `*Message:* ${formData.message || "No additional message"}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/923135288233?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      city: "",
      fabricType: "Double Mosha Velvet (280 GSM)",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#2B2C2A] flex flex-col justify-between select-none">
      <div>
        <Navbar />

        <main className="bg-[#F5F2EB] text-[#2B2C2A] overflow-x-hidden">

          {/* ========================================================
              MAIN CONTACT SECTION
              ======================================================== */}
          <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-12 relative">

            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-full max-w-4xl text-center px-4">
              <span className="font-serif text-[10vw] sm:text-[10vw] font-bold text-[#2B2C2A]/[0.03] tracking-widest uppercase block whitespace-nowrap">
                ROMO
              </span>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

              {/* =========================================
                  LEFT COLUMN: CONTACT DETAILS
                  ========================================= */}
              <div className="lg:col-span-6 space-y-6">

                <div className="space-y-2">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#C75A28] block">
                    B2B TRADE DIRECTORY
                  </span>

                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2C2A] tracking-tight leading-[1.08] font-bold">
                    Contact ROMO
                  </h1>

                  <p className="text-xs sm:text-sm text-[#2B2C2A]/75 font-sans leading-relaxed max-w-md pt-1">
                    Connect with our central textile desks in Lahore & Karachi, or send your trade query directly to our mill team. We respond promptly.
                  </p>
                </div>

                {/* Real Contact Information */}
                <div className="space-y-5 pt-1">

                  {/* Physical Showrooms: Lahore & Karachi */}
                  <div className="space-y-2 font-sans">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#484F39] block">
                      Trade Hubs & Availability
                    </span>

                    <div className="space-y-1.5 pt-0.5">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2C2A]">
                        Lahore Hub
                      </h3>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#C75A28]">
                        Karachi Hub
                      </h3>
                    </div>

                    {/* 24/7 B2B Pill */}
                    <div className="pt-2">
                      <span className="inline-block bg-[#484F39]/10 text-[#484F39] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold tracking-wider">
                        ● 24/7 B2B Trade & Dispatch Desk Available
                      </span>
                    </div>
                  </div>

                  {/* Real WhatsApp Number */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#484F39] block">
                      Direct WhatsApp & Calls
                    </span>
                    <a
                      href="https://wa.me/923135288233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-lg sm:text-2xl font-normal text-[#2B2C2A] hover:text-[#C75A28] transition-colors block tracking-wide"
                    >
                      0313 5288233
                    </a>
                  </div>

                  {/* Real Email */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#484F39] block">
                      Official Email
                    </span>
                    <a
                      href="mailto:info@romofurnitures.com"
                      className="font-sans text-xs sm:text-sm text-[#2B2C2A] hover:text-[#C75A28] transition-colors font-medium underline underline-offset-4 break-all"
                    >
                      info@romofurnitures.com
                    </a>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-1 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#484F39] block">
                      Follow Our Channels
                    </span>

                    <div className="flex items-center gap-3">

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/923135288233"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B2C2A]/30 text-[#2B2C2A] hover:bg-[#484F39] hover:border-[#484F39] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.764.966-.937 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/romofurnishers"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B2C2A]/30 text-[#2B2C2A] hover:bg-[#484F39] hover:border-[#484F39] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>

                      {/* TikTok */}
                      <a
                        href="https://www.tiktok.com/@romo.furnishers"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#2B2C2A]/30 text-[#2B2C2A] hover:bg-[#484F39] hover:border-[#484F39] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.34 22a6.33 6.33 0 006.33-6.32V8.92a8.28 8.28 0 005.17 1.83V7.27a4.83 4.83 0 01-1.25-.58z"/>
                        </svg>
                      </a>

                    </div>
                  </div>

                  {/* Direct WhatsApp Action Button */}
                  <div className="pt-2">
                    <a
                      href="https://wa.me/923135288233?text=Hi%20ROMO,%20I%20would%20like%20to%20inquire%20about%20fabric%20meterage%20and%20swatches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#484F39] hover:bg-[#C75A28] text-white text-xs uppercase tracking-widest font-bold px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg text-center"
                    >
                      WHATSAPP US NOW →
                    </a>
                  </div>

                </div>
              </div>

              {/* =========================================
                  RIGHT COLUMN: BORDERLESS FORM
                  ========================================= */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full max-w-lg bg-white rounded-3xl p-5 sm:p-9 shadow-md space-y-6">

                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2C2A] font-bold">
                      Request a Quote
                    </h2>
                    <p className="text-xs text-[#2B2C2A]/70 font-sans mt-0.5">
                      Share your requirements — our team responds promptly with mill wholesale pricing.
                    </p>
                  </div>

                  {/* Confirmation Feedback */}
                  {submitted && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-sans flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <p className="leading-relaxed">
                        <strong>Your message has been sent to our team.</strong> They will reach out to you shortly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider font-bold text-[#2B2C2A]/70 font-sans">
                        NAME / STUDIO
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name or studio..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F5F2EB]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#2B2C2A] placeholder:text-[#2B2C2A]/40 focus:outline-none focus:bg-white transition-all font-sans"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider font-bold text-[#2B2C2A]/70 font-sans">
                        PHONE / WHATSAPP
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0313 5288233"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F5F2EB]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#2B2C2A] placeholder:text-[#2B2C2A]/40 focus:outline-none focus:bg-white transition-all font-sans"
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider font-bold text-[#2B2C2A]/70 font-sans">
                        CITY
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lahore, Karachi, Islamabad..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#F5F2EB]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#2B2C2A] placeholder:text-[#2B2C2A]/40 focus:outline-none focus:bg-white transition-all font-sans"
                      />
                    </div>

                    {/* Fabric Dropdown */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider font-bold text-[#2B2C2A]/70 font-sans">
                        FABRIC INTEREST
                      </label>
                      <select
                        value={formData.fabricType}
                        onChange={(e) => setFormData({ ...formData, fabricType: e.target.value })}
                        className="w-full bg-[#F5F2EB]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#2B2C2A] focus:outline-none focus:bg-white transition-all font-sans cursor-pointer"
                      >
                        <option value="Double Mosha Velvet (280 GSM)">Double Mosha Velvet (280 GSM)</option>
                        <option value="Heavy Mosha Velvet (300 GSM)">Heavy Mosha Velvet (300 GSM)</option>
                        <option value="Textured Bouclé (340+50 GSM)">Textured Bouclé White (340+50 GSM)</option>
                        <option value="Milky Velvet Burnout Curtains">Milky Velvet Burnout Curtains (260+50 GSM)</option>
                        <option value="300cm Extra Width Sheer Voiles">300cm Extra Width Sheer Voiles</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider font-bold text-[#2B2C2A]/70 font-sans">
                        MESSAGE & METERAGE
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us your required meterage or project timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#F5F2EB]/60 rounded-xl p-3 text-xs text-[#2B2C2A] placeholder:text-[#2B2C2A]/40 focus:outline-none focus:bg-white transition-all font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#2B2C2A] hover:bg-[#C75A28] text-white text-xs uppercase tracking-widest font-bold py-3.5 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer"
                    >
                      SEND QUERY ON WHATSAPP →
                    </button>

                  </form>

                </div>
              </div>

            </div>
          </section>

          {/* ========================================================
              BOTTOM: 3 LOGIC PILLARS
              ======================================================== */}
          <section className="py-14 bg-white px-4 sm:px-6 lg:px-12 border-t border-[#C7B89A]/30">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* 01 · PHYSICAL SAMPLE BOOKS */}
              <div className="space-y-2 pl-4 border-l-2 border-[#484F39]">
                <span className="text-[10px] font-mono font-bold text-[#484F39] uppercase tracking-wider block">01 · PHYSICAL ATELIER</span>
                <h4 className="font-serif text-lg font-bold text-[#2B2C2A]">Hardbound Sample Books</h4>
                <p className="text-xs text-[#2B2C2A]/75 font-sans leading-relaxed">
                  We dispatch physical swatch books and color cards directly to registered studios, architects, and showroom retailers nationwide.
                </p>
              </div>

              {/* 02 · READY WAREHOUSE STOCK */}
              <div className="space-y-2 pl-4 border-l-2 border-[#484F39]">
                <span className="text-[10px] font-mono font-bold text-[#484F39] uppercase tracking-wider block">02 · REAL INVENTORY</span>
                <h4 className="font-serif text-lg font-bold text-[#2B2C2A]">2 Lac+ Meters Ready Stock</h4>
                <p className="text-xs text-[#2B2C2A]/75 font-sans leading-relaxed">
                  Large volumes physically stocked in central depots. Immediate roll reservations with guaranteed zero dye-lot shade variance.
                </p>
              </div>

              {/* 03 · DIRECT MILL WHOLESALE */}
              <div className="space-y-2 pl-4 border-l-2 border-[#C75A28]">
                <span className="text-[10px] font-mono font-bold text-[#C75A28] uppercase tracking-wider block">03 · TRADE ADVANTAGE</span>
                <h4 className="font-serif text-lg font-bold text-[#2B2C2A]">Direct Mill Wholesale Rates</h4>
                <p className="text-xs text-[#2B2C2A]/75 font-sans leading-relaxed">
                  Transparent factory-direct pricing with no middleman markup. Fast nationwide cargo freight directly to your doorstep.
                </p>
              </div>

            </div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}
