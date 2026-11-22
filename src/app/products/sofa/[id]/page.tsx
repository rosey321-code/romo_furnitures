"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SHADES: [string, string][] = [
  ["#D0CDBC", "Pearl Cream"], ["#CBC8B7", "Ivory Cream"], ["#D4B187", "Warm Camel"],
  ["#CBBCAB", "Light Taupe"], ["#88857E", "Medium Grey"], ["#90887D", "Warm Grey"],
  ["#A2A395", "Sage Grey"], ["#8E7C64", "Tan Brown"], ["#847464", "Cocoa"],
  ["#918475", "Taupe"], ["#766858", "Earth Brown"], ["#8B897D", "Slate Grey"],
  ["#9D8978", "Walnut"], ["#918175", "Dark Taupe"], ["#856B5B", "Chocolate"],
  ["#6D5B4E", "Espresso"], ["#44170A", "Rust Brown"], ["#4D3437", "Burgundy"],
  ["#23494A", "Deep Teal"], ["#C7BDB1", "Silver Beige"], ["#6C6D6F", "Steel Grey"],
  ["#555555", "Charcoal"], ["#27343C", "Dark Blue Grey"], ["#313538", "Deep Slate"],
  ["#488D83", "Turquoise"], ["#202819", "Moss Green"], ["#081D16", "Forest Green"],
  ["#0E162A", "Midnight Navy"], ["#0F0E11", "Jet Black"], ["#0D0F0F", "Rich Black"],
  ["#043037", "Petrol Blue"], ["#180A11", "Aubergine"], ["#3E4838", "Army Olive"],
  ["#381E13", "Dark Bark"], ["#0E0E1A", "Black Blue"], ["#120E0D", "Pure Velvet Black"],
];

const SOFA_DETAIL_DATA: Record<string, any> = {
  "mosha-velvet": {
    id: "mosha-velvet",
    catNo: "CAT No. 105",
    name: "Mosha Velvet",
    category: "Sofa Upholstery",
    gsm: "220 GSM",
    description:
      "Premium quality Mosha Velvet, crafted for luxurious sofa upholstery. Soft velvety texture with rich color depth.",
    shadesCount: "36 Colors Available",
    image: "/products/Sofa product.webp",
    articles: SHADES.map(([hex, name], i) => {
      const n = String(i + 1).padStart(2, "0");
      return { id: `art-${n}`, articleNo: `Article No. ${n}`, colorHex: hex, colorName: name };
    }),
  },
};

const MAX_CANVAS_WIDTH = 2000;

function parseHex(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

type BaseData = { w: number; h: number; pixels: Uint8ClampedArray; ratio: Float32Array };

function SofaPreview({
  src, color, alt, scale = 1.25, origin = "50% 50%", className = "",
}: {
  src: string; color: string; alt: string;
  scale?: number; origin?: string; className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseRef = useRef<BaseData | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    baseRef.current = null;
    setReady(false);
    setFailed(false);

    const im = new window.Image();
    im.onload = () => {
      if (!alive) return;
      const c = canvasRef.current;
      if (!c) return;
      const k = Math.min(1, MAX_CANVAS_WIDTH / im.naturalWidth);
      const w = Math.round(im.naturalWidth * k);
      const h = Math.round(im.naturalHeight * k);
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      if (!ctx) { setFailed(true); return; }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(im, 0, 0, w, h);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const n = w * h;
      const lum = new Float32Array(n);
      const pixels = new Uint8ClampedArray(data);
      let sum = 0;
      let count = 0;

      for (let p = 0, i = 0; p < n; p++, i += 4) {
        if (data[i + 3] < 15) continue;
        const l = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        lum[p] = l;
        sum += l;
        count++;
      }
      const avg = count ? sum / count : 128;
      const ratio = new Float32Array(n);
      for (let p = 0; p < n; p++) {
        ratio[p] = lum[p] > 0 ? Math.min(2.2, lum[p] / avg) : 1;
      }

      baseRef.current = { w, h, pixels, ratio };
      setReady(true);
    };
    im.onerror = () => { if (alive) setFailed(true); };
    im.src = src;

    return () => { alive = false; };
  }, [src]);

  useEffect(() => {
    const c = canvasRef.current;
    const base = baseRef.current;
    if (!ready || !c || !base) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const [cr, cg, cb] = parseHex(color);
    const out = ctx.createImageData(base.w, base.h);
    const d = out.data;
    const n = base.w * base.h;
    const orig = base.pixels;

    for (let p = 0, i = 0; p < n; p++, i += 4) {
      const a = orig[i + 3];
      if (a < 15) {
        d[i] = 0; d[i + 1] = 0; d[i + 2] = 0; d[i + 3] = 0;
        continue;
      }

      const r = base.ratio[p];
      const shade = r < 1 ? Math.pow(r, 0.85) : 1 + (r - 1) * 0.65;
      const spec = r > 1.15 ? (r - 1.15) * 0.4 : 0;
      const lift = (shade - 1) * 6;

      let v = cr * shade + lift;
      d[i] = Math.min(255, Math.max(0, v + (255 - v) * spec));
      v = cg * shade + lift;
      d[i + 1] = Math.min(255, Math.max(0, v + (255 - v) * spec));
      v = cb * shade + lift;
      d[i + 2] = Math.min(255, Math.max(0, v + (255 - v) * spec));
      d[i + 3] = a;
    }
    ctx.putImageData(out, 0, 0);
  }, [ready, color]);

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center"
        style={{ transform: `scale(${scale})`, transformOrigin: origin }}
      >
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={alt}
          className="max-w-full max-h-full object-contain"
          style={{ display: failed ? "none" : "block", opacity: ready ? 1 : 0, transition: "opacity 200ms" }}
        />
        {failed && (
          <div
            className="absolute inset-0 flex items-center justify-center font-serif text-white text-lg"
            style={{ backgroundColor: color }}
          >
            {alt}
          </div>
        )}
      </div>
    </div>
  );
}

function SofaDetailContent() {
  const params = useParams();
  const id = (params?.id as string) || "mosha-velvet";
  const product = SOFA_DETAIL_DATA[id] || SOFA_DETAIL_DATA["mosha-velvet"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hovering, setHovering] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const swatchRef = useRef<HTMLDivElement>(null);

  const currentArticle = product.articles[currentIndex];

  useEffect(() => {
    if (!isZoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomOpen(false);
      if (e.key === "+" || e.key === "=") setZoomLevel((p) => Math.min(4, +(p + 0.25).toFixed(2)));
      if (e.key === "-") setZoomLevel((p) => Math.max(1, +(p - 0.25).toFixed(2)));
      if (e.key === "ArrowRight") setCurrentIndex((p) => (p + 1) % product.articles.length);
      if (e.key === "ArrowLeft") setCurrentIndex((p) => (p - 1 + product.articles.length) % product.articles.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isZoomOpen, product.articles.length]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const scrollSwatches = (dir: 1 | -1) => {
    swatchRef.current?.scrollBy({ left: dir * 180, behavior: "smooth" });
  };

  const openZoom = () => {
    setZoomLevel(1);
    setHovering(false);
    setOrigin("50% 50%");
    setIsZoomOpen(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ROMO Furnishings, I want to inquire about ${product.catNo} (${product.name}) - ${currentArticle.articleNo} (${currentArticle.colorName}) for Sofa Upholstery.`
  );
  const whatsappUrl = `https://wa.me/923125298233?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#2B2C2A] font-sans selection:bg-[#484F39] selection:text-[#F5F2EB] flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Added proper top margin/padding to separate from Navbar */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-10 w-full">
          <div className="mb-3">
            <Link
              href="/products/sofa"
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C75A28] hover:text-[#484F39] transition-colors inline-block mb-1"
            >
              ← Back to Sofa Fabrics
            </Link>
            <div className="flex items-baseline justify-between gap-3">
              <h1 className="font-serif text-lg sm:text-xl tracking-tight">
                {product.catNo} — {product.name}
              </h1>
              <span className="text-[10px] uppercase tracking-wider text-[#484F39] font-bold shrink-0">
                {product.category}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT: Sofa Image Box */}
            <div className="lg:col-span-6">
              <div className="relative w-full max-w-[470px] mx-auto h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl border border-[#C7B89A]/30 bg-white overflow-hidden shadow-xs">
                <SofaPreview
                  src={product.image}
                  color={currentArticle.colorHex}
                  alt={product.name}
                  scale={1.35}
                  className="w-full h-full p-2"
                />

                <button
                  onClick={openZoom}
                  className="absolute bottom-2.5 right-2.5 z-30 w-8 h-8 rounded-full bg-white/90 text-[#484F39] hover:bg-[#484F39] hover:text-white shadow-sm flex items-center justify-center transition-all cursor-pointer border border-[#C7B89A]/30"
                  aria-label="Open large view"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16 16 4 4M11 8v6M8 11h6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT: Details & Swatches */}
            <div className="lg:col-span-5 flex flex-col pt-0.5">
              <div className="border-b border-[#C7B89A]/30 pb-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C75A28] block mb-0.5">
                  {currentArticle.articleNo}
                </span>
                <h2 className="font-serif text-base sm:text-lg">{currentArticle.colorName}</h2>
              </div>

              <div className="flex flex-col text-[11px] text-[#2B2C2A]/80 mb-3">
                <div className="flex justify-between py-1.5 border-b border-[#C7B89A]/20">
                  <span className="text-gray-500">Material Quality:</span>
                  <span className="font-bold text-[#2B2C2A]">{product.gsm} Velvet</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C7B89A]/20">
                  <span className="text-gray-500">Application:</span>
                  <span className="font-bold text-[#2B2C2A]">Sofa & Curtains Both</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C7B89A]/20">
                  <span className="text-gray-500">Total Shades:</span>
                  <span className="font-bold text-[#484F39]">{product.shadesCount}</span>
                </div>
              </div>

              <p className="text-[10px] text-gray-500 leading-relaxed mb-4">{product.description}</p>

              {/* Color Swatches */}
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#484F39] mb-1.5">
                  Choose Color
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => scrollSwatches(-1)}
                    aria-label="Previous colors"
                    className="w-7 h-7 shrink-0 rounded-full bg-white hover:bg-[#484F39] hover:text-white border border-[#C7B89A]/40 flex items-center justify-center text-xs cursor-pointer transition-colors"
                  >
                    ‹
                  </button>

                  <div
                    ref={swatchRef}
                    className="flex items-center gap-2.5 overflow-x-auto py-2 px-1 flex-1 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {product.articles.map((article: any, i: number) => {
                      const selected = i === currentIndex;
                      return (
                        <button
                          key={article.id}
                          onClick={() => setCurrentIndex(i)}
                          title={`${article.articleNo} ${article.colorName}`}
                          aria-label={article.colorName}
                          aria-pressed={selected}
                          className="shrink-0 w-8 h-8 rounded-full cursor-pointer transition-transform duration-150 hover:scale-110"
                          style={{
                            backgroundColor: article.colorHex,
                            outline: selected ? "2px solid #C75A28" : "1px solid rgba(0,0,0,0.12)",
                            outlineOffset: selected ? "2px" : "0px",
                          }}
                        />
                      );
                    })}
                  </div>

                  <button
                    onClick={() => scrollSwatches(1)}
                    aria-label="Next colors"
                    className="w-7 h-7 shrink-0 rounded-full bg-white hover:bg-[#484F39] hover:text-white border border-[#C7B89A]/40 flex items-center justify-center text-xs cursor-pointer transition-colors"
                  >
                    ›
                  </button>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-white bg-[#484F39] hover:bg-[#2B2C2A] py-3.5 px-4 rounded-xl transition-all active:scale-95 shadow-sm"
              >
                Inquire on WhatsApp <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-[#171814]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close"
              className="absolute -top-10 right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            <div
              className="relative w-full h-[60vh] bg-white rounded-2xl overflow-hidden cursor-zoom-in flex items-center justify-center"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => { setHovering(false); setOrigin("50% 50%"); }}
              onMouseMove={handleMove}
            >
              <SofaPreview
                src={product.image}
                color={currentArticle.colorHex}
                alt={product.name}
                scale={Math.min(6, zoomLevel * (hovering ? 2 : 1))}
                origin={origin}
                className="w-full h-full p-6"
              />
              <div className="absolute top-4 left-4 z-20 bg-white/90 px-3 py-1.5 rounded-lg border border-[#C7B89A]/30 pointer-events-none shadow-sm">
                <p className="text-[10px] uppercase font-bold text-[#C75A28]">{currentArticle.articleNo}</p>
                <h3 className="font-serif text-base">{currentArticle.colorName}</h3>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setZoomLevel((p) => Math.max(1, +(p - 0.25).toFixed(2)))}
                disabled={zoomLevel <= 1}
                aria-label="Zoom out"
                className="w-10 h-10 rounded-full bg-white/10 text-white font-bold cursor-pointer disabled:opacity-40"
              >
                −
              </button>
              <span className="text-white text-xs w-10 text-center">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel((p) => Math.min(4, +(p + 0.25).toFixed(2)))}
                disabled={zoomLevel >= 4}
                aria-label="Zoom in"
                className="w-10 h-10 rounded-full bg-white/10 text-white font-bold cursor-pointer disabled:opacity-40"
              >
                +
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="px-4 py-2 rounded-xl bg-[#484F39] text-white text-xs uppercase cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Added proper top margin/spacing before Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}

export default function SofaDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center text-xs uppercase tracking-widest text-[#2B2C2A]">
          Loading...
        </div>
      }
    >
      <SofaDetailContent />
    </Suspense>
  );
}