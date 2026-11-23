"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ============================================================
   SETTINGS
   LOGO SHIFT: logo ko left karna ho to number barhayein (ml-14 se ml-16)
   Right gap se zyada left gap ho to isko barhayein, kam ho to ghatayein
   ============================================================ */
const LOGO_BOX = "w-[140px] h-[52px] sm:w-[210px] sm:h-[64px] md:w-[260px] md:h-[76px]";
const LOGO_ZOOM = "scale-[2.3] sm:scale-[2.5]";
const LOGO_SHIFT = "-ml-6 sm:-ml-10 md:-ml-14";
const LOGO_DROP = "mt-2 md:mt-3";
const NAV_HEIGHT = "h-[76px] md:h-[96px]";

const DRAWER_LOGO_BOX = "w-[150px] h-[48px]";
const DRAWER_LOGO_ZOOM = "scale-[2.2]";

// Search ke options. Fabric Collection ka link section id par jata hai
const SEARCH_OPTIONS = [
  { label: "Sofa Fabric", href: "/products/sofa" },
  { label: "Curtains Fabric", href: "/products/curtains" },
  { label: "Fabric Collection", href: "/#shades" },
];

export default function Navbar() {
  const [productOpen, setProductOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const filteredOptions = SEARCH_OPTIONS.filter((o) =>
    o.label.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const closeSearch = () => {
    setShowSearchDropdown(false);
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EB] border-b border-[#C7B89A]/50 select-none">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 ${NAV_HEIGHT} flex items-center justify-between gap-4`}
      >
        {/* 1. LEFT: Brand Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            href="/"
            className={`relative block overflow-hidden ${LOGO_DROP} ${LOGO_SHIFT} ${LOGO_BOX}`}
          >
            <Image
              src="/logo.webp"
              alt="ROMO Furnishers"
              fill
              priority
              sizes="260px"
              className={`object-contain ${LOGO_ZOOM}`}
            />
          </Link>
        </div>

        {/* 2. MIDDLE: Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-wider font-medium text-[#2B2C2A]">
          <Link href="/" className="hover:text-[#5A6249] transition-colors py-2">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#5A6249] transition-colors py-2">
            About
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-[#5A6249] transition-colors py-2">
              <span>PRODUCTS</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${productOpen ? "rotate-180 text-[#5A6249]" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productOpen && (
              <div className="absolute top-full left-0 w-52 bg-[#F5F2EB] border border-[#C7B89A] shadow-xl rounded-xl py-2 z-50">
                <Link
                  href="/products/sofa"
                  className="flex items-center justify-between px-5 py-2.5 text-xs tracking-wider text-[#2B2C2A] hover:bg-[#5A6249] hover:text-[#F5F2EB] transition-colors"
                >
                  <span>Sofa Fabric</span>
                  <span className="text-[10px] opacity-60">→</span>
                </Link>
                <Link
                  href="/products/curtains"
                  className="flex items-center justify-between px-5 py-2.5 text-xs tracking-wider text-[#2B2C2A] hover:bg-[#5A6249] hover:text-[#F5F2EB] transition-colors"
                >
                  <span>Curtains Fabric</span>
                  <span className="text-[10px] opacity-60">→</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/digital-catalog" className="hover:text-[#5A6249] transition-colors py-2">
            Digital Catalog
          </Link>
          <Link href="/showroom" className="hover:text-[#5A6249] transition-colors py-2">
            Showroom
          </Link>
          <Link href="/contact" className="hover:text-[#5A6249] transition-colors py-2">
            Contact
          </Link>
        </div>

        {/* 3. RIGHT: Search Bar + WhatsApp Us + Hamburger (Mobile) */}
        <div className="flex items-center space-x-3">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="flex items-center border border-[#C7B89A] rounded-full bg-white px-3 py-1.5 focus-within:border-[#5A6249] transition-all">
              <svg className="w-3.5 h-3.5 text-[#2B2C2A]/60 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search fabric..."
                value={searchQuery}
                onFocus={() => setShowSearchDropdown(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                className="w-28 focus:w-44 text-xs bg-transparent focus:outline-none text-[#2B2C2A] placeholder:text-[#2B2C2A]/50 transition-all duration-300"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-xs text-[#2B2C2A]/50 hover:text-[#2B2C2A]">
                  ✕
                </button>
              )}
            </div>

            {showSearchDropdown && (
              <>
                <div className="fixed inset-0 z-10" onClick={closeSearch} />
                <div className="absolute right-0 top-full mt-2 w-60 bg-[#F5F2EB] border border-[#C7B89A] shadow-xl rounded-xl p-2 z-20">
                  {filteredOptions.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {filteredOptions.map((option) => (
                        <Link
                          key={option.label}
                          href={option.href}
                          onClick={closeSearch}
                          className="flex items-center justify-between text-xs px-3 py-2 rounded-lg text-[#2B2C2A] hover:bg-[#5A6249] hover:text-[#F5F2EB] transition-colors"
                        >
                          <span>{option.label}</span>
                          <span className="text-[10px] opacity-60">→</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs px-3 py-2 text-[#2B2C2A]/60">No match found</p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* WhatsApp Us Button (Desktop) */}
          <a
            href="https://wa.me/923135288233?text=Hi%20ROMO,%20I%20would%20like%20to%20inquire%20about%20wholesale%20fabric"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#5A6249] hover:bg-[#484f39] text-[#F5F2EB] px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.25.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2B2C2A] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ========================================================
          MOBILE SIDEBAR / DRAWER MENU
          ======================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            style={{ backgroundColor: "#F5F2EB" }}
            className="absolute right-0 top-0 bottom-0 w-72 shadow-2xl p-6 flex flex-col justify-between border-l border-[#C7B89A]/50 z-50"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C7B89A]/40">
                <div className={`relative overflow-hidden ${DRAWER_LOGO_BOX}`}>
                  <Image
                    src="/logo.webp"
                    alt="ROMO Furnishers"
                    fill
                    sizes="150px"
                    className={`object-contain ${DRAWER_LOGO_ZOOM}`}
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#2B2C2A]/10 text-[#2B2C2A] hover:bg-[#2B2C2A]/20 flex items-center justify-center font-bold text-sm transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col space-y-4 pt-6 text-sm uppercase tracking-wider font-medium text-[#2B2C2A]">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#5A6249] transition-colors py-1">
                  Home
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#5A6249] transition-colors py-1">
                  About
                </Link>

                {/* Mobile Products Accordion */}
                <div>
                  <button
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                    className="flex items-center justify-between w-full hover:text-[#5A6249] transition-colors py-1"
                  >
                    <span>PRODUCTS</span>
                    <span className={`transform transition-transform text-xs ${mobileProductOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>

                  {mobileProductOpen && (
                    <div className="pl-4 pt-2 flex flex-col space-y-2 text-xs normal-case tracking-normal">
                      <Link
                        href="/products/sofa"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[#2B2C2A]/80 hover:text-[#5A6249] py-1"
                      >
                        → Sofa Fabric
                      </Link>
                      <Link
                        href="/products/curtains"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[#2B2C2A]/80 hover:text-[#5A6249] py-1"
                      >
                        → Curtains Fabric
                      </Link>
                      
                       
                    </div>
                  )}
                </div>

                <Link href="/digital-catalog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#5A6249] transition-colors py-1">
                  Digital Catalog
                </Link>
                <Link href="/showroom" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#5A6249] transition-colors py-1">
                  Showroom
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#5A6249] transition-colors py-1">
                  Contact
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C7B89A]/40">
              <a
                href="https://wa.me/923135288233?text=Hi%20ROMO,%20I%20would%20like%20to%20inquire%20about%20wholesale%20fabric"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#5A6249] hover:bg-[#484f39] text-[#F5F2EB] px-4 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.25.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}