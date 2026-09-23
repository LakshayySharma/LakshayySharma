const items = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "OPENAI",
  "WEBRTC",
  "CORE WEB VITALS",
  "ELECTRON",
  "NODE.JS",
  "POSTGRESQL",
  "TAILWIND",
  "FRAMER MOTION",
  "SERVICE WORKERS",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center whitespace-nowrap font-mono text-xs tracking-[0.18em] text-muted"
        >
          <span className="px-5">{item}</span>
          <span aria-hidden className="text-neon-cyan/60">
            {"//"}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-border bg-surface/60 py-3 select-none"
    >
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
