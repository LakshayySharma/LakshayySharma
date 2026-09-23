"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const channels = [
  {
    key: "EMAIL",
    value: "ls199575@gmail.com",
    href: "mailto:ls199575@gmail.com",
    aria: "Email Lakshay Sharma at ls199575@gmail.com",
    external: false,
  },
  {
    key: "LINKEDIN",
    value: "/in/lakshay-sharma",
    href: "https://www.linkedin.com/in/lakshay-sharma-76b487131/",
    aria: "Open Lakshay Sharma's LinkedIn profile",
    external: true,
  },
  {
    key: "GITHUB",
    value: "/LakshayySharma",
    href: "https://github.com/LakshayySharma",
    aria: "Open Lakshay Sharma's GitHub profile",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="004"
          label="TRANSMISSION"
          title="Contact"
          headingId="contact-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ===== Left: massive display type + subhead ===== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
              Let&apos;s
              <br />
              build
              <br />
              <span
                className="glitch-hover cursor-default text-neon-cyan"
              >
                something
              </span>
              <span
                aria-hidden
                className="cursor-blink ml-1 inline-block text-neon-cyan"
                style={{ fontSize: "0.5em", verticalAlign: "baseline" }}
              >
                _
              </span>
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Open to interesting product work, consulting, and AI-native
              experiments. If it ships to users, I&apos;m interested.
            </p>

            {/* Big stamp CTA */}
            <a
              href="mailto:ls199575@gmail.com?subject=Project%20Inquiry"
              className="brutal-hover group mt-9 inline-flex items-center gap-3 border border-neon-cyan bg-neon-cyan px-7 py-4 font-mono text-sm font-semibold tracking-wide text-background uppercase sm:px-8"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 font-mono text-[11px] text-subtle">
              * Replies within 24 hours, usually sooner.
            </p>
          </motion.div>

          {/* ===== Right: spec-row channels ===== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative border border-border bg-card/70"
          >
            {/* Header strip */}
            <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-3">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-xs">
                Doc. LS-COMM-004
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase sm:text-xs">
                3 channels
              </p>
            </div>

            <ul className="divide-y divide-border px-5 sm:px-7">
              {channels.map((c) => (
                <li key={c.key} className="group py-5">
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    aria-label={c.aria}
                    className="flex items-baseline"
                  >
                    <span className="font-mono text-xs font-semibold tracking-[0.16em] text-muted transition-colors group-hover:text-neon-cyan sm:text-sm">
                      {c.key}
                    </span>
                    <span
                      aria-hidden
                      className="leader group-hover:border-neon-cyan/40"
                    />
                    <span className="font-mono text-xs text-foreground transition-colors group-hover:text-neon-cyan sm:text-sm">
                      {c.value}
                    </span>
                    <ArrowUpRight className="ml-2 h-3.5 w-3.5 shrink-0 self-center text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon-cyan" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Footer strip inside the card */}
            <div className="border-t border-border bg-surface/40 px-5 py-4 sm:px-7">
              <p className="font-mono text-[10px] tracking-[0.18em] text-subtle uppercase">
                All channels monitored
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== Footer — transmission sign-off ===== */}
        <footer className="mt-20 border-t border-border pt-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
                End of transmission
                <span
                  aria-hidden
                  className="cursor-blink ml-1 inline-block text-neon-cyan"
                  style={{ fontSize: "0.55em" }}
                >
                  _
                </span>
              </p>
              <p className="mt-2 font-mono text-[11px] text-subtle">
                © {new Date().getFullYear()} Lakshay Sharma — built with
                Next.js, Tailwind v4 & Framer Motion.
              </p>
            </div>
            <div className="font-mono text-[10px] leading-relaxed tracking-[0.18em] text-subtle uppercase sm:text-right">
              <p>28.61°N / 77.20°E</p>
              <p>FIG. 01 — 004 / REV 2026.09</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
