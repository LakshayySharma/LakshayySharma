"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

export default function Hero() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setNow(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden"
    >
      {/* Background — faint image + blueprint graph paper */}
      <div className="absolute inset-0 -z-20 blueprint-grid">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.14] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,transparent_0%,var(--background)_80%)]" />
      </div>

      {/* ===== Top annotation bar — technical drawing metadata ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative flex items-start justify-between px-5 pt-6 font-mono text-[10px] tracking-[0.18em] text-subtle uppercase sm:px-10 sm:text-xs"
      >
        <div className="space-y-1.5">
          <p>
            <span className="text-neon-cyan">FIG. 01</span> — OPERATOR INTRO
          </p>
          <p>REV 2026.09 / DELHI NCR</p>
        </div>
        <div className="space-y-1.5 text-right">
          <p>28.61°N / 77.20°E</p>
          <p aria-live="off" className="tabular-nums">
            {now}
          </p>
        </div>
      </motion.div>

      {/* ===== Main composition — broken grid, left-aligned ===== */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-16 sm:px-10">
        {/* Terminal prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-4 font-mono text-sm text-neon-cyan sm:text-base"
        >
          <span className="text-muted">$</span> i build
        </motion.p>

        {/* Massive display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          className="font-display text-[17vw] leading-[0.9] font-bold tracking-[-0.03em] text-white uppercase sm:text-[13vw] lg:text-[9.5rem]"
        >
          interfaces
          <br />
          that feel
          <br />
          <span
            className="glitch-hover cursor-default text-neon-cyan"
          >
            alive
          </span>
          <span
            aria-hidden
            className="cursor-blink ml-2 inline-block w-[0.08em] text-neon-cyan"
            style={{ fontSize: "0.6em", verticalAlign: "baseline" }}
          >
            _
          </span>
        </motion.h1>

        {/* Subhead + stamp + CTAs — offset row */}
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
            className="max-w-md"
          >
            {/* Availability stamp — rubber stamp */}
            <p className="stamp mb-5 text-neon-teal">
              <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-neon-teal" />
              Open to work
            </p>
            <p className="text-balance text-sm leading-relaxed text-muted sm:text-base">
              Frontend architect and AI builder. I design and ship fast,
              accessible web apps — currently focused on AI-native product
              experiences and real-time interfaces.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.7}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="brutal-hover inline-flex items-center gap-2 border border-neon-cyan bg-neon-cyan px-6 py-3.5 font-mono text-sm font-semibold tracking-wide text-background uppercase"
            >
              View work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="brutal-hover inline-flex items-center gap-2 border border-border-strong bg-surface/70 px-6 py-3.5 font-mono text-sm font-semibold tracking-wide text-foreground uppercase backdrop-blur"
            >
              Contact
              <span aria-hidden className="text-neon-cyan">
                ⌘K
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ===== Bottom annotation bar — index + scroll cue ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative flex items-center justify-between border-t border-border/70 px-5 py-4 font-mono text-[10px] tracking-[0.18em] text-subtle uppercase sm:px-10 sm:text-xs"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 transition-colors hover:text-neon-cyan"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll
        </a>
        <p aria-hidden className="hidden sm:block">
          Index 001 — 004
        </p>
        <p aria-hidden>Spec: LS-2026</p>
      </motion.div>
    </section>
  );
}
