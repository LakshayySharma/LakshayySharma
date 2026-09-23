"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "projects", label: "001 Work" },
  { id: "capabilities", label: "002 Spec" },
  { id: "profile", label: "003 Ops" },
  { id: "contact", label: "004 Comm" },
];

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("projects");

  // Show after the user scrolls past the first screen
  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Section navigation"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-40"
        >
          <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
            <div className="flex items-center justify-between border border-border bg-background/85 px-3 py-2 backdrop-blur-md sm:px-4">
              <a
                href="#hero"
                className="font-mono text-xs font-semibold tracking-wider text-white sm:text-sm"
                aria-label="Back to top"
              >
                <span className="text-neon-cyan">LS</span>
                <span className="ml-1.5 hidden text-muted sm:inline">
                  /spec-2026
                </span>
              </a>

              <ul className="hidden items-center gap-0.5 md:flex">
                {sections.map((s) => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`relative inline-flex items-center px-3 py-1.5 font-mono text-xs tracking-wider transition-colors ${
                          isActive
                            ? "text-neon-cyan"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 border border-neon-cyan/40 bg-neon-cyan/10"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                          />
                        )}
                        <span className="relative">{s.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 border border-border-strong bg-surface/60 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-foreground uppercase transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                Hire
                <span aria-hidden className="text-neon-cyan">
                  ⌘K
                </span>
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
