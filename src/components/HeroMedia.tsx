import { site } from "@/content/site";

// Arch frame, like the booklet. Shows the client's video when one is set in
// content/site.ts, otherwise a light SVG of fabric rolls (no network request).
export default function HeroMedia() {
  const hasVideo = Boolean(site.heroVideoMp4 || site.heroVideoWebm);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-sand" aria-hidden />
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full bg-sand/40">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="none"
            poster={site.heroPoster || undefined}
            aria-hidden
          >
            {site.heroVideoWebm && <source src={site.heroVideoWebm} type="video/webm" />}
            {site.heroVideoMp4 && <source src={site.heroVideoMp4} type="video/mp4" />}
          </video>
        ) : (
          <FabricRolls />
        )}
      </div>
    </div>
  );
}

function FabricRolls() {
  const rolls = [
    { x: 40, fill: "#E9E2D3" },
    { x: 140, fill: "#C7B89A" },
    { x: 240, fill: "#5A6249" },
    { x: 340, fill: "#2B2C2A" },
  ];
  return (
    <svg viewBox="0 0 480 640" className="h-full w-full" role="img" aria-label="Rolls of curtain and sofa fabric">
      <defs>
        <pattern id="weave" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0H6M0 3H6" stroke="#000" strokeOpacity="0.07" strokeWidth="1" />
          <path d="M0 0V6M3 0V6" stroke="#fff" strokeOpacity="0.1" strokeWidth="1" />
        </pattern>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.18" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <rect width="480" height="640" fill="#F5F2EB" />
      {rolls.map((r) => (
        <g key={r.x}>
          <rect x={r.x} y="150" width="90" height="520" rx="10" fill={r.fill} />
          <rect x={r.x} y="150" width="90" height="520" rx="10" fill="url(#weave)" />
          <rect x={r.x} y="150" width="90" height="520" rx="10" fill="url(#shade)" />
        </g>
      ))}
    </svg>
  );
}