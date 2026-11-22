"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==========================================
// CATALOG DATA
// ==========================================

const CATALOGS_DETAIL_DATA: Record<string, any> = {
  "105": {
    id: "105",
    catNo: "CAT No. 105",
    name: "Mosha Velvet",
    gsm: "220 GSM",
    application: "Sofa Upholstery & Drapery",
    image: "/catalog105/Catalog%20105.webp",

    articles: Array.from({ length: 36 }, (_, index) => {
      const artNum = String(index + 1).padStart(2, "0");

      const shades: Record<number, any> = {
        1: { hex: "#D0CDBC", name: "Pearl Cream" },
        2: { hex: "#CBC8B7", name: "Ivory Cream" },
        3: { hex: "#D4B187", name: "Warm Camel" },
        4: { hex: "#CBBCAB", name: "Light Taupe" },
        5: { hex: "#88857E", name: "Medium Grey" },
        6: { hex: "#90887D", name: "Warm Grey" },
        7: { hex: "#A2A395", name: "Sage Grey" },
        8: { hex: "#8E7C64", name: "Tan Brown" },
        9: { hex: "#847464", name: "Cocoa" },
        10: { hex: "#918475", name: "Taupe" },
        11: { hex: "#766858", name: "Earth Brown" },
        12: { hex: "#8B897D", name: "Slate Grey" },
        13: { hex: "#9D8978", name: "Walnut" },
        14: { hex: "#918175", name: "Dark Taupe" },
        15: { hex: "#856B5B", name: "Chocolate" },
        16: { hex: "#6D5B4E", name: "Espresso" },
        17: { hex: "#44170A", name: "Rust Brown" },
        18: { hex: "#4D3437", name: "Burgundy" },
        19: { hex: "#23494A", name: "Deep Teal" },
        20: { hex: "#C7BDB1", name: "Silver Beige" },
        21: { hex: "#6C6D6F", name: "Steel Grey" },
        22: { hex: "#555555", name: "Charcoal" },
        23: { hex: "#27343C", name: "Dark Blue Grey" },
        24: { hex: "#313538", name: "Deep Slate" },
        25: { hex: "#488D83", name: "Turquoise" },
        26: { hex: "#202819", name: "Moss Green" },
        27: { hex: "#081D16", name: "Forest Green" },
        28: { hex: "#0E162A", name: "Midnight Navy" },
        29: { hex: "#0F0E11", name: "Jet Black" },
        30: { hex: "#0D0F0F", name: "Rich Black" },
        31: { hex: "#043037", name: "Petrol Blue" },
        32: { hex: "#180A11", name: "Aubergine" },
        33: { hex: "#3E4838", name: "Army Olive" },
        34: { hex: "#381E13", name: "Dark Bark" },
        35: { hex: "#0E0E1A", name: "Black Blue" },
        36: { hex: "#120E0D", name: "Pure Velvet Black" },
      };

      const shade = shades[index + 1] || { hex: "#88857E", name: `Shade ${artNum}` };

      return {
        id: `art-${artNum}`,
        articleNo: `Article No. ${artNum}`,
        colorHex: shade.hex,
        colorName: shade.name,
      };
    }),
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

function CatalogDetailContent() {
  const params = useParams();
  const id = (params?.id as string) || "105";

  const catalog = CATALOGS_DETAIL_DATA[id] || CATALOGS_DETAIL_DATA["105"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentArticle = catalog.articles[currentIndex];

  const VISIBLE_COUNT = 5;
  const maxIndex = Math.max(0, catalog.articles.length - VISIBLE_COUNT);

  // ==========================================
  // KEYBOARD & MODAL CONTROLS
  // ==========================================

  useEffect(() => {
    if (!isZoomOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomOpen(false);

      if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(4, +(prev + 0.25).toFixed(2)));
      }

      if (e.key === "-") {
        setZoomLevel((prev) => Math.max(1, +(prev - 0.25).toFixed(2)));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomOpen]);

  // ==========================================
  // SWATCH NAVIGATION
  // ==========================================

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleShadeSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // ==========================================
  // ZOOM FUNCTIONS
  // ==========================================

  const openZoom = () => {
    setZoomLevel(1);
    setIsZoomOpen(true);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(4, +(prev + 0.25).toFixed(2)));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(1, +(prev - 0.25).toFixed(2)));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  // ==========================================
  // WHATSAPP
  // ==========================================

  const whatsappMessage = encodeURIComponent(
    `Hello ROMO Furnishings, I want to inquire about ${catalog.catNo} (${catalog.name}) - ${currentArticle.articleNo} (${currentArticle.colorName}) - ${catalog.gsm}.`
  );

  const whatsappUrl = `https://wa.me/923125298233?text=${whatsappMessage}`;

  // ==========================================
  // REUSABLE FABRIC TEXTURE (Exact Color Fix)
  // ==========================================

  const FabricTexture = () => (
    <>
      {!imageFailed ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Base Exact Color Layer */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundColor: currentArticle.colorHex,
            }}
          />

          {/* Article Image Texture Layer with precise opacity */}
          <img
            src={catalog.image}
            alt={`${catalog.name} - ${currentArticle.colorName}`}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: currentArticle.colorHex,
          }}
        />
      )}
    </>
  );

  // ==========================================
  // MAIN UI
  // ==========================================

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F2EB] text-[#2B2C2A] font-sans selection:bg-[#484F39] selection:text-[#F5F2EB]">
      <Navbar />

      {/* ==================================
          HEADER
      ================================== */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-3">
        <Link
          href="/digital-catalog"
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#C75A28] hover:text-[#484F39] transition-colors inline-block mb-3"
        >
          ← Back to Digital Catalogs
        </Link>

        <h1 className="font-serif text-[27px] sm:text-4xl text-[#2B2C2A] tracking-tight leading-tight">
          {catalog.catNo} — {catalog.name}
        </h1>

        <p className="text-[11px] sm:text-xs text-[#2B2C2A]/70 mt-2 leading-relaxed">
          Select a shade from the swatches to inspect the fabric.
        </p>
      </div>

      {/* ==================================
          MAIN SECTION
      ================================== */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-5 sm:pt-6 pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 sm:gap-7 lg:gap-12">
          
          {/* ==================================
              LEFT: FABRIC PREVIEW
          ================================== */}
          <div className="flex flex-col w-full max-w-[560px] lg:max-w-[385px] shrink-0">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[4/3.5] bg-[#EFECE6] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 shadow-sm border border-[#C7B89A]/40"
              style={{ isolation: "isolate" }}
            >
              {/* GSM LABEL */}
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-40 bg-white/90 backdrop-blur-sm text-[#2B2C2A] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-1 sm:px-2.5 sm:py-1 rounded-md shadow-xs">
                {catalog.gsm}
              </span>

              {/* CATALOG LABEL */}
              <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-40 bg-[#484F39] text-[#F5F2EB] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-1 sm:px-2.5 sm:py-1 rounded-md shadow-xs">
                {catalog.catNo}
              </span>

              {/* FABRIC TEXTURE WITH EXACT COLOR */}
              <FabricTexture />

              {/* ARTICLE NAME */}
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white pointer-events-none px-3 drop-shadow-md">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  {currentArticle.articleNo}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-center">
                  {currentArticle.colorName}
                </h3>
              </div>

              {/* ZOOM BUTTON */}
              <button
                onClick={openZoom}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 text-[#484F39] hover:bg-[#484F39] hover:text-white shadow-lg flex items-center justify-center transition-all active:scale-95"
                aria-label="Zoom fabric"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4M11 8v6M8 11h6" />
                </svg>
              </button>
            </div>

            {/* BOTTOM INFO + WHATSAPP */}
            <div className="flex items-center justify-between gap-3 pt-2 px-1">
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-bold text-[#484F39] block leading-relaxed">
                  {currentArticle.articleNo} — {currentArticle.colorName}
                </span>
                <h2 className="font-serif text-lg sm:text-xl text-[#2B2C2A] mt-0.5">
                  {catalog.name}
                </h2>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-bold text-white bg-[#484F39] hover:bg-[#2B2C2A] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all shadow-xs shrink-0 active:scale-95"
              >
                WhatsApp <span>→</span>
              </a>
            </div>
          </div>

          {/* ==================================
              RIGHT: RESPONSIVE SWATCHES
          ================================== */}
          <div className="w-full max-w-[560px] lg:max-w-none flex flex-col items-center lg:items-start lg:mt-[-4px]">
            <div className="w-full lg:w-auto flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-2 py-3 px-2 sm:px-4 lg:px-3 bg-white/60 backdrop-blur-xs rounded-xl sm:rounded-2xl border border-[#C7B89A]/30 shadow-xs">
              
              {/* PREVIOUS / UP */}
              <button
                onClick={handlePrevious}
                className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full bg-white hover:bg-[#484F39] hover:text-white text-[#2B2C2A] font-bold flex items-center justify-center border border-[#C7B89A]/40 transition-colors shadow-xs text-xs"
                aria-label="Previous shades"
              >
                <span className="hidden lg:block">▲</span>
                <span className="lg:hidden text-base">‹</span>
              </button>

              {/* SWATCH CIRCLES */}
              <div className="flex flex-row lg:flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-3 flex-1 min-w-0">
                {catalog.articles
                  .slice(currentIndex, currentIndex + VISIBLE_COUNT)
                  .map((article: any, idx: number) => {
                    const absoluteIdx = currentIndex + idx;
                    const isSelected = currentArticle.id === article.id;

                    return (
                      <button
                        key={article.id}
                        onClick={() => handleShadeSelect(absoluteIdx)}
                        title={`${article.articleNo} - ${article.colorName}`}
                        aria-label={`Select ${article.colorName}`}
                        aria-pressed={isSelected}
                        className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 ${
                          isSelected
                            ? "ring-2 ring-offset-2 ring-[#C75A28] scale-110 z-10 shadow-md"
                            : "hover:scale-110 opacity-90 hover:opacity-100 ring-1 ring-black/10"
                        }`}
                        style={{
                          backgroundColor: article.colorHex,
                        }}
                      />
                    );
                  })}
              </div>

              {/* NEXT / DOWN */}
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full bg-white hover:bg-[#484F39] hover:text-white text-[#2B2C2A] font-bold flex items-center justify-center border border-[#C7B89A]/40 transition-colors shadow-xs text-xs"
                aria-label="Next shades"
              >
                <span className="hidden lg:block">▼</span>
                <span className="lg:hidden text-base">›</span>
              </button>
            </div>

            {/* MOBILE CURRENT SHADE LABEL */}
            <p className="lg:hidden text-[10px] text-[#484F39] mt-3 tracking-wide text-center">
              {currentArticle.articleNo} · {currentArticle.colorName}
            </p>
          </div>
        </div>
      </section>

      {/* ==================================
          FULLSCREEN ZOOM MODAL
      ================================== */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-[#171814]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-11 right-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
              aria-label="Close zoom"
            >
              ×
            </button>

            <div className="relative w-full h-[55vh] sm:h-[75vh] overflow-hidden rounded-xl bg-[#EFECE6]">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${zoomLevel})`,
                }}
              >
                <FabricTexture />
              </div>

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-30 text-white drop-shadow-md pointer-events-none">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  {currentArticle.articleNo}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl">
                  {currentArticle.colorName}
                </h3>
              </div>

              <span className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 bg-[#484F39] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">
                {catalog.catNo}
              </span>
            </div>

            {/* ZOOM CONTROLS */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              <button
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white text-2xl"
                aria-label="Zoom out"
              >
                −
              </button>

              <span className="text-white text-xs min-w-14 text-center tabular-nums">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                onClick={zoomIn}
                disabled={zoomLevel >= 4}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white text-2xl"
                aria-label="Zoom in"
              >
                +
              </button>

              <button
                onClick={resetZoom}
                className="ml-1 sm:ml-2 px-4 py-3 rounded-full bg-[#484F39] hover:bg-[#5B6548] text-white text-[10px] sm:text-xs uppercase tracking-wider transition-all"
              >
                Reset
              </button>
            </div>

            <p className="text-center text-white/60 text-[10px] sm:text-[11px] mt-3 sm:mt-4 tracking-wide">
              {catalog.name} · {currentArticle.colorName}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

// ==========================================
// PAGE EXPORT
// ==========================================

export default function CatalogDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center text-xs uppercase tracking-widest text-[#2B2C2A]">
          Loading Catalog...
        </div>
      }
    >
      <CatalogDetailContent />
    </Suspense>
  );
}