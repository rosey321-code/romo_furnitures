"use client";

import React, { useState, useEffect, useRef } from "react";

const HEADLINE_PART_1 = "Premium Fabrics at";
const HEADLINE_PART_2 = "Our Best Prices.";

const SUBTEXT =
  "Wholesale supply of Sofa, Curtain & Cushion fabrics.";

const COLORS = {
  ivory: "#F2E5CE",
  sand: "#D8C3A5",
  sage: "#484F39",
  charcoal: "#292B27",
};

const features = [
  { title: "2 Lac+", subtitle: "Meters Stock", icon: "stock" },
  { title: "Direct", subtitle: "Mill Pricing", icon: "price" },
  { title: "Verified", subtitle: "B2B Supply", icon: "verified" },
];

function FeatureIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
    >
      {type === "stock" && (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V4h8v3M3 12h18" />
        </>
      )}

      {type === "price" && (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {type === "verified" && (
        <>
          <path d="m12 2 3 2 4-.2.8 4 2.2 3-2.2 3-.8 4-4-.2-3 2-3-2-4 .2-.8-4L2 11l2.2-3 .8-4 4 .2 3-2Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
    </svg>
  );
}

export default function Hero() {
  const [startTyping, setStartTyping] = useState(false);
  const [h1Index, setH1Index] = useState(0);
  const [h2Index, setH2Index] = useState(0);
  const [showH2, setShowH2] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const iconTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActiveRef = useRef(false);

  const showGlassCurtains =
    startTyping &&
    h1Index === HEADLINE_PART_1.length &&
    h2Index === HEADLINE_PART_2.length;

  const resetAnimations = () => {
    setStartTyping(false);
    setH1Index(0);
    setH2Index(0);
    setShowH2(false);
    setShowIcons(false);

    if (iconTimerRef.current) {
      clearTimeout(iconTimerRef.current);
      iconTimerRef.current = null;
    }
  };

  // Play video only while hero is visible
  useEffect(() => {
    const video = videoRef.current;

    if (!video || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isActiveRef.current) return;

          isActiveRef.current = true;
          resetAnimations();

          video.pause();
          video.currentTime = 0;
          video.playbackRate = 1.9;

          video.play().catch(() => {
            setStartTyping(true);
            setShowIcons(true);
          });

          video.onended = () => {
            setStartTyping(true);

            iconTimerRef.current = setTimeout(() => {
              setShowIcons(true);
            }, 500);
          };
        } else {
          if (!isActiveRef.current) return;

          isActiveRef.current = false;
          video.pause();
          video.currentTime = 0;
          video.onended = null;

          resetAnimations();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      video.pause();
      video.onended = null;

      if (iconTimerRef.current) {
        clearTimeout(iconTimerRef.current);
      }

      isActiveRef.current = false;
    };
  }, []);

  // First heading typewriter
  useEffect(() => {
    if (!startTyping || h1Index >= HEADLINE_PART_1.length) return;

    const timer = setTimeout(() => {
      setH1Index((prev) => prev + 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [startTyping, h1Index]);

  // Reveal second heading
  useEffect(() => {
    if (h1Index === HEADLINE_PART_1.length) {
      setShowH2(true);
    }
  }, [h1Index]);

  // Second heading typewriter
  useEffect(() => {
    if (!showH2 || h2Index >= HEADLINE_PART_2.length) return;

    const timer = setTimeout(() => {
      setH2Index((prev) => prev + 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [showH2, h2Index]);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        h-[80svh] min-h-[580px] max-h-[740px]
        md:h-[72vh] md:min-h-[520px] md:max-h-[760px]
        bg-[#292B27]
        overflow-hidden border-b border-black
      "
    >
      {/* ========================================================
          1. 100% CLEAR VIDEO (Zero Filter)
          ======================================================== */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="
          absolute inset-0 z-0
          w-full h-full
          object-cover
          object-center
        "
      >
        <source src="/animation1.webm" type="video/webm" />
      </video>

      {/* Normal subtle overlay */}
      <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />

      {/* ========================================================
          2. SIRF BOTTOM MEIN BLACK SHADOW (Badges ke liye)
          ======================================================== */}
      <div className="md:hidden absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-20" />

      {/* ========================================================
          3. GLASS CURTAIN LINES
          ======================================================== */}
      <div
        className="
          absolute z-20
          top-0 left-0
          h-full w-[88%] md:w-[52%]
          pointer-events-none
          overflow-hidden
        "
        style={{
          clipPath: showGlassCurtains
            ? "inset(0 0 0 0)"
            : "inset(0 50% 0 50%)",
          WebkitClipPath: showGlassCurtains
            ? "inset(0 0 0 0)"
            : "inset(0 50% 0 50%)",
          transition:
            "clip-path 1800ms cubic-bezier(0.22, 1, 0.36, 1), -webkit-clip-path 1800ms cubic-bezier(0.22, 1, 0.36, 1)",
          backgroundColor: "rgba(255,255,255,0.02)",
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.05) 2px,
              transparent 4px,
              transparent 26px,
              rgba(255,255,255,0.09) 27px,
              rgba(255,255,255,0.04) 29px,
              transparent 32px,
              transparent 54px
            )
          `,
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
        }}
      />

      {/* ========================================================
          ✨ 4. MAIN CONTENT: 100% LEFT-ALIGNED ON MOBILE & DESKTOP
          ======================================================== */}
      <div
        className={`
          absolute z-30
          top-[65px] md:top-[6%]
          left-5 sm:left-8 md:left-[4%]
          w-[90%] sm:w-[85%] md:w-[56%]
          max-w-[780px]
          text-left
          transition-opacity duration-1000
          ${startTyping ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Small Label (Left Aligned) */}
        <div className="flex items-center justify-start gap-3 mb-2 md:mb-3">
          <span
            className="
              block
              text-[9.5px] sm:text-[11px] md:text-[10px] lg:text-[11px]
              uppercase tracking-[0.22em] sm:tracking-[0.28em]
              font-extrabold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]
            "
            style={{ color: COLORS.ivory }}
          >
            WHOLESALE FABRIC SOLUTIONS
          </span>
        </div>

        {/* Main Heading (Left Aligned) */}
        <h1
          className="
            font-serif
            text-[34px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            leading-[1.08] tracking-[-0.02em]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          "
          style={{ color: COLORS.ivory }}
        >
          {HEADLINE_PART_1.substring(0, h1Index)}
        </h1>

        {/* Highlighted Heading (Left Aligned) */}
        <div className="mt-2 md:mt-3 flex justify-start">
          <div
            className="
              inline-block
              px-4 sm:px-5 md:px-7
              py-1 sm:py-1.5 md:py-2
              rounded-full
              max-w-full
              shadow-lg
            "
            style={{
              background:
                "linear-gradient(90deg, #DDB978 0%, #F2D9A8 100%)",
            }}
          >
            <span
              className="
                font-serif italic font-bold
                text-[23px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                whitespace-nowrap
              "
              style={{ color: COLORS.sage }}
            >
              {HEADLINE_PART_2.substring(0, h2Index)}
            </span>
          </div>
        </div>

        {/* Subtitle (Left Aligned) */}
        <p
          className="
            text-[13px] sm:text-sm md:text-sm lg:text-base xl:text-lg
            mt-3 md:mt-4
            font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]
          "
          style={{ color: COLORS.ivory }}
        >
          {SUBTEXT}
        </p>

        {/* Explore Button (Left Aligned) */}
        <div className="mt-3.5 md:mt-5 flex justify-start">
          <a
            href="/digital-catalog"
            className="
              inline-flex items-center justify-center gap-2 sm:gap-3
              border border-transparent
              px-6 sm:px-8
              py-2.5 sm:py-3
              rounded-full
              text-[10px] sm:text-xs
              font-bold uppercase tracking-widest
              bg-[#F2E5CE] text-[#484F39]
              hover:bg-transparent
              hover:text-[#F2E5CE]
              hover:border-[#F2E5CE]
              transition-all duration-300
              shadow-md hover:shadow-xl
            "
          >
            Explore Catalogs
            <span className="text-base">→</span>
          </a>
        </div>
      </div>

      {/* ========================================================
          5. BOTTOM 3 BADGES (Pehle Ki Tarah Settle Hain)
          ======================================================== */}
      <div
        className={`
          absolute z-30
          /* Mobile: Screen ke bottom par neat horizontal row */
          bottom-3.5 left-0 w-full px-2.5 flex flex-row items-center justify-center gap-2 overflow-x-auto scrollbar-none
          /* Desktop: Top-right vertical float */
          md:bottom-auto md:top-[8%] md:right-[2.5%] md:left-auto md:w-[220px] md:px-0 md:flex-col md:items-end md:gap-5 lg:gap-7
          transition-opacity duration-1000
          ${showIcons ? "opacity-100" : "opacity-0"}
        `}
      >
        {features.map((item, index) => (
          <div
            key={item.title}
            style={{
              transitionDelay: `${index * 180}ms`,
              background: "rgba(242, 237, 224, 0.28)",
              border: "1px solid rgba(255, 250, 238, 0.65)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.42)",
            }}
            className="
              shrink-0 flex items-center rounded-full
              px-2.5 py-1.5 min-h-[44px] gap-1.5
              md:w-full md:min-h-[64px] md:px-3 md:gap-2.5
            "
          >
            {/* Small Ivory Icon Circle */}
            <div
              className="
                w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10
                shrink-0 rounded-full
                flex items-center justify-center
              "
              style={{
                background: "rgba(248, 244, 232, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                color: "#23452D",
              }}
            >
              <FeatureIcon type={item.icon} />
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div
              className="hidden md:block h-8 w-px shrink-0"
              style={{
                backgroundColor: "rgba(255, 250, 238, 0.82)",
              }}
            />

            {/* White Feature Text */}
            <div className="min-w-0 flex-1 pl-0.5 text-left">
              <h3
                className="
                  font-serif
                  text-[13.5px] sm:text-[15px] md:text-[22px]
                  leading-none whitespace-nowrap
                "
                style={{
                  color: "#FFFDF6",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-0.5
                  text-[8px] sm:text-[9.5px] md:text-[13px]
                  uppercase tracking-[0.06em]
                  whitespace-nowrap
                "
                style={{
                  color: "#FFFDF6",
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                }}
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}