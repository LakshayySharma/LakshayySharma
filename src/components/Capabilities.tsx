"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

interface Spec {
  name: string;
  level: number;
  detail: string;
}

const specs: Spec[] = [
  {
    name: "FRONTEND SYSTEMS",
    level: 95,
    detail: "React / Next.js / TypeScript",
  },
  {
    name: "PERFORMANCE",
    level: 92,
    detail: "Core Web Vitals / memory / profiling",
  },
  { name: "PRODUCT THINKING", level: 88, detail: "A/B / flags / UX" },
  {
    name: "ARCHITECTURE",
    level: 85,
    detail: "Scalable frontends / API design",
  },
  { name: "AI INTEGRATION", level: 82, detail: "OpenAI / Gemini / Whisper" },
  { name: "BACKEND", level: 72, detail: "Node.js / PostgreSQL / Prisma" },
];

const extras = [
  "Service Workers",
  "WebSockets",
  "SSE",
  "WebRTC",
  "Accessibility",
  "SEO",
  "GCP",
  "Tailwind CSS",
];

function SpecRow({ spec, i }: { spec: Spec; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const filled = Math.round(spec.level / 10);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
      className="group py-4"
    >
      {/* Datasheet row: NAME ······················· 95% */}
      <div className="flex items-baseline">
        <span className="font-mono text-xs font-semibold tracking-[0.14em] text-foreground sm:text-sm">
          {spec.name}
        </span>
        <span aria-hidden className="leader" />
        <span className="font-mono text-xs tabular-nums text-neon-cyan sm:text-sm">
          {spec.level}%
        </span>
      </div>

      {/* Detail + segmented meter */}
      <div className="mt-2.5 flex items-center gap-4">
        <span className="font-mono text-[10px] text-subtle sm:text-[11px]">
          {spec.detail}
        </span>
        <div
          className="ml-auto flex gap-[3px]"
          role="meter"
          aria-label={`${spec.name} proficiency: ${spec.level} percent`}
          aria-valuenow={spec.level}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {Array.from({ length: 10 }).map((_, j) => (
            <span
              key={j}
              className={`h-2 w-4 sm:w-5 ${
                j < filled
                  ? "bg-neon-cyan shadow-[0_0_6px_rgba(34,211,238,0.35)]"
                  : "bg-border"
              }`}
              style={{
                transition: "background-color 400ms ease",
                transitionDelay: inView ? `${i * 50 + j * 25}ms` : "0ms",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="002"
          label="SPECIFICATIONS"
          title="Spec sheet"
          headingId="capabilities-heading"
          blurb="Honest, time-tested proficiency across the stack I ship in daily."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative border border-border bg-card/70"
        >
          {/* Datasheet header strip */}
          <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-xs">
              Doc. LS-SPEC-002
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase sm:text-xs">
              Self-assessed
            </p>
          </div>

          {/* Spec rows */}
          <div className="divide-y divide-border px-5 sm:px-7">
            {specs.map((spec, i) => (
              <SpecRow key={spec.name} spec={spec} i={i} />
            ))}
          </div>

          {/* Footnote — the human touch */}
          <div className="border-t border-border bg-surface/40 px-5 py-4 sm:px-7">
            <p className="font-mono text-[11px] leading-relaxed text-subtle sm:text-xs">
              * Values self-assessed, validated in production. Additional
              protocols: {extras.join(" / ")}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
