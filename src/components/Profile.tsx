"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Solveda Software",
    role: "Software Developer — Frontend",
    period: "2023 — NOW",
    highlights: [
      "Architected core frontend modules for an enterprise e-commerce platform with React and Next.js.",
      "Built a secure wallet system that improved checkout conversion by ~15%.",
      "Led Core Web Vitals initiatives; production pod restarts reduced to near zero.",
      "Partnered with SEO to grow organic traffic by ~22% through structured data and perf wins.",
    ],
  },
  {
    company: "CSC E-Governance Services",
    role: "Software Engineer",
    period: "2022 — 2023",
    highlights: [
      "Built a cross-platform reconciliation app with Electron.js for government data workflows.",
      "Engineered a streaming file-comparison pipeline over 500K+ records.",
      "Cut reconciliation time from 5 minutes to under 10 seconds — 30× faster.",
    ],
  },
];

const operatorSpec: { k: string; v: string }[] = [
  { k: "NAME", v: "Lakshay Sharma" },
  { k: "CLASS", v: "Frontend Architect" },
  { k: "LEVEL", v: "4+ yrs / 10+ ships" },
  { k: "SPEC", v: "AI-native, UX-led" },
  { k: "BASE", v: "Delhi NCR, IN" },
  { k: "EDU", v: "B.Tech — GGSIPU" },
];

export default function Profile() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="003"
          label="OPERATOR"
          title="Operator"
          headingId="profile-heading"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ===== Left: operator spec sheet ===== */}
          <motion.aside
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="brutal-hover relative border border-border bg-card/70">
              {/* Header strip */}
              <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-3">
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-xs">
                  Doc. LS-OPS-003
                </p>
                <span className="stamp text-neon-teal">Verified</span>
              </div>

              <div className="p-5 sm:p-6">
                {/* Avatar — targeting reticle */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    {/* Corner brackets */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-neon-cyan"
                    />
                    <span
                      aria-hidden
                      className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-neon-cyan"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-neon-cyan"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-neon-cyan"
                    />
                    <div className="scanlines flex h-full w-full items-center justify-center bg-surface font-display text-xl font-bold text-neon-cyan">
                      LS
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
                      Target acquired
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-white uppercase">
                      Lakshay S.
                    </p>
                  </div>
                </div>

                {/* Spec rows — dotted leaders */}
                <dl className="space-y-3.5">
                  {operatorSpec.map((row) => (
                    <div key={row.k} className="flex items-baseline">
                      <dt className="font-mono text-[11px] tracking-[0.16em] text-muted sm:text-xs">
                        {row.k}
                      </dt>
                      <span aria-hidden className="leader" />
                      <dd className="text-right font-mono text-xs text-foreground sm:text-sm">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Résumé — brutal button */}
                <a
                  href="/Lakshay_Sharma_Resume.pdf"
                  download="Lakshay_Sharma_Resume.pdf"
                  className="brutal-hover group mt-7 flex items-center justify-center gap-2 border border-neon-cyan bg-neon-cyan px-4 py-3.5 font-mono text-sm font-semibold tracking-wide text-background uppercase"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download résumé
                </a>
              </div>
            </div>
          </motion.aside>

          {/* ===== Right: crosshair timeline ===== */}
          <div className="lg:col-span-7">
            <ol className="relative space-y-8 border-l border-border-strong pl-7 sm:pl-9">
              {experiences.map((exp, index) => (
                <motion.li
                  key={exp.company}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.08,
                  }}
                  className="relative"
                >
                  {/* Crosshair dot */}
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[calc(theme(spacing.7)+0.5ch)] font-mono text-sm leading-none text-neon-cyan select-none sm:-left-[calc(theme(spacing.9)+0.5ch)]"
                  >
                    +
                  </span>

                  <article className="brutal-hover border border-border bg-card/70 p-5 sm:p-6">
                    <header className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold tracking-tight text-white uppercase sm:text-xl">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[11px] tracking-[0.14em] text-neon-cyan sm:text-xs">
                        {exp.period}
                      </span>
                    </header>
                    <p className="mt-1.5 font-mono text-xs text-muted sm:text-sm">
                      @ {exp.company}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-neon-cyan"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
