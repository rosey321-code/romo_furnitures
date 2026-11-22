"use client";

// Short & Crisp wholesale phrases (No tall height):
const TICKER_ITEMS = [
  "Curtains Drapery",
  "Cushion Upholstery",
  "50,000m Ready Stock",
  "Mill-Direct Rates",
  "24H Fast Dispatch",
  "Batch Consistency",
  "Bouclé & Raw Linens",
  "Contract Grade Weaves",
];

export default function Ticker() {
  return (
    <div className="bg-[#5c614a] py-2 overflow-hidden border-y border-[#363c2b] select-none relative">
      
      {/* Self-contained 100% guaranteed animation style */}
      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollMarquee 27s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Marquee Track: whitespace-nowrap ensures slim height */}
      <div className="marquee-track flex items-center whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-[#F5F2EB] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase px-5">
              {item}
            </span>
            <span className="text-[#C75A28] text-xs font-serif opacity-90">
              ✦
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}