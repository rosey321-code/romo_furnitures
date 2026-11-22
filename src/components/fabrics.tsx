"use client";
import React, { useState } from "react";

const FABRICS_LIST = [
  { id: "chenille", name: "Chenille", image: "/fabrics/Chenille.webp" },
  { id: "georgette", name: "Georgette", image: "/fabrics/Georgette.webp" },
  { id: "jute", name: "Jute", image: "/fabrics/Jute.webp" },
  { id: "organza", name: "Organza", image: "/fabrics/Organza.webp" },
  { id: "self-textured-velvet", name: "Self Textured Velvet", image: "/fabrics/Self textured Velvet.webp" },
  { id: "sheer", name: "Sheer", image: "/fabrics/sheer.webp" },
  { id: "suede", name: "Suede", image: "/fabrics/Suede.webp" },
  { id: "velvet", name: "Velvet", image: "/fabrics/velvet.webp" },
];

export default function ShadeFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? FABRICS_LIST
      : FABRICS_LIST.filter((item) => item.name === selectedCategory);

  const currentItems = filteredProducts.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < filteredProducts.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleWhatsAppOrder = (fabricName: string) => {
    const phoneNumber = "03135288233";
    const message = encodeURIComponent(`Hi, I want to order/inquire about the fabric: ${fabricName}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="shades" className="py-10 lg:py-14 bg-[#F5F2EB] px-4 sm:px-8 lg:px-12 border-b border-[#C7B89A]/40 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C75A28] font-bold block mb-1.5">
            THE TEXTILE ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2C2A] tracking-tight leading-[1.1]">
            Your colours. <br />
            <span className="italic font-normal text-[#484F39]">
              Your kind of calm.
            </span>
          </h2>
        </div>

        {/* Fabric Filter Tabs */}
        <div className="flex items-center gap-2.5 pb-6 border-b border-[#C7B89A]/30 overflow-x-auto scrollbar-none">
          <button
            onClick={() => { setSelectedCategory("all"); setCurrentIndex(0); }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-serif tracking-wide transition-all shrink-0 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#484F39] text-[#F5F2EB] shadow-md font-semibold"
                : "bg-white text-[#1A1A1A] border border-[#C7B89A]/60 hover:bg-[#EFECE6]"
            }`}
          >
            All Fabrics
          </button>
          
          {FABRICS_LIST.map((fabric) => (
            <button
              key={fabric.id}
              onClick={() => { setSelectedCategory(fabric.name); setCurrentIndex(0); }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-serif tracking-wide transition-all shrink-0 cursor-pointer ${
                selectedCategory === fabric.name
                  ? "bg-[#484F39] text-[#F5F2EB] shadow-md font-semibold"
                  : "bg-white text-[#1A1A1A] border border-[#C7B89A]/60 hover:bg-[#EFECE6]"
              }`}
            >
              {fabric.name}
            </button>
          ))}
        </div>

        {/* Products Grid Section */}
        <div className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {currentItems.map((fabric) => (
              <div 
                key={fabric.id}
                className="group flex flex-col bg-transparent rounded-xl transition-all duration-300"
              >
                
                {/* Image Box using standard <img> tag */}
                <div 
                  onClick={() => setActiveModalImage(fabric.image)}
                  className="relative w-full aspect-[4/3] bg-[#EFECE6] rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-3 shadow-xs cursor-pointer group-hover:shadow-md transition-all flex items-center justify-center"
                >
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details & WhatsApp Button */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-sm sm:text-xl text-[#2B2C2A] group-hover:text-[#C75A28] transition-colors leading-tight truncate">
                    {fabric.name}
                  </h3>

                  <button
                    onClick={() => handleWhatsAppOrder(fabric.name)}
                    className="w-full bg-[#484F39] hover:bg-[#2B2C2A] text-[#F5F2EB] py-1.5 sm:py-2.5 px-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs uppercase tracking-wider font-bold transition-all text-center cursor-pointer shadow-xs"
                  >
                    ORDER NOW
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Controls / Arrows */}
          {filteredProducts.length > 4 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
                  currentIndex === 0 
                    ? "bg-[#D6CFC7] text-[#999] cursor-not-allowed opacity-50" 
                    : "bg-[#484F39] text-[#F5F2EB] hover:bg-[#2B2C2A]"
                }`}
                aria-label="Previous"
              >
                ←
              </button>

              <span className="text-xs font-serif text-[#484F39]">
                Showing {currentIndex + 1} - {Math.min(currentIndex + 4, filteredProducts.length)} of {filteredProducts.length}
              </span>

              <button 
                onClick={handleNext}
                disabled={currentIndex + 4 >= filteredProducts.length}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
                  currentIndex + 4 >= filteredProducts.length 
                    ? "bg-[#D6CFC7] text-[#999] cursor-not-allowed opacity-50" 
                    : "bg-[#484F39] text-[#F5F2EB] hover:bg-[#2B2C2A]"
                }`}
                aria-label="Next"
              >
                →
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Image Popup Modal */}
      {activeModalImage && (
        <div 
          onClick={() => setActiveModalImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-3xl w-full bg-[#F5F2EB] p-3 rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-4 -right-4 bg-[#2B2C2A] text-white w-9 h-9 rounded-full font-bold flex items-center justify-center shadow-md hover:bg-[#C75A28] transition-colors cursor-pointer z-10"
            >
              ✕
            </button>
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <img 
                src={activeModalImage} 
                alt="Fabric Zoom" 
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}