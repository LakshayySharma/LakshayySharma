"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  blurb?: string;
  headingId: string;
}

function Crosshair({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute font-mono text-sm leading-none text-neon-cyan/40 select-none ${className}`}
    >
      +
    </span>
  );
}

export default function SectionHeader({
  index,
  label,
  title,
  blurb,
  headingId,
}: SectionHeaderProps) {
  return (
    <div className="relative mb-14 sm:mb-16">
      {/* Cropped editorial numeral — bleeds off the top-right */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 right-0 font-display text-[7rem] leading-none font-bold select-none text-outline sm:-top-12 sm:text-[10rem] lg:text-[12rem]"
      >
        {index}
      </span>

      {/* Crosshair registration marks */}
      <Crosshair className="-top-5 -left-1 hidden sm:block" />
      <Crosshair className="-top-5 left-1/2 hidden md:block" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-neon-cyan">
          <span aria-hidden>{"//"}</span>
          <span>
            {index} — {label}
          </span>
          <span
            aria-hidden
            className="hidden h-px flex-1 bg-neon-cyan/20 sm:block"
          />
        </p>
        <h2
          id={headingId}
          className="mt-4 font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl"
        >
          {title}
        </h2>
        {blurb && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {blurb}
          </p>
        )}
      </motion.div>
    </div>
  );
}
