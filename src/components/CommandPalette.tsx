"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  Briefcase,
  Cpu,
  Mail,
  Terminal,
  User,
  X,
} from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: React.ComponentType<{ className?: string }>;
  section: string;
}

const commands: CommandItem[] = [
  {
    id: "projects",
    label: "Projects",
    hint: "View selected work",
    icon: Briefcase,
    section: "projects",
  },
  {
    id: "capabilities",
    label: "Capabilities",
    hint: "Skills & proficiency",
    icon: Cpu,
    section: "capabilities",
  },
  {
    id: "profile",
    label: "Profile",
    hint: "About & experience",
    icon: User,
    section: "profile",
  },
  {
    id: "contact",
    label: "Contact",
    hint: "Get in touch",
    icon: Mail,
    section: "contact",
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const titleId = useId();
  const listboxId = useId();

  const filtered = useMemo(
    () =>
      commands.filter(
        (c) =>
          c.label.toLowerCase().includes(searchInput.toLowerCase()) ||
          c.hint.toLowerCase().includes(searchInput.toLowerCase()),
      ),
    [searchInput],
  );

  const handleSearchChange = useCallback((value: string) => {
    setSearchInput(value);
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSearchInput("");
    setSelectedIndex(0);
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      close();
    },
    [close],
  );

  // Global ⌘K + Esc + arrow nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((p) => !p);
        setSearchInput("");
        setSelectedIndex(0);
        return;
      }
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filtered.length > 0)
          setSelectedIndex((p) => (p + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filtered.length > 0)
          setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        scrollToSection(filtered[selectedIndex].section);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, filtered, selectedIndex, close, scrollToSection]);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen]);

  // Focus trap inside modal
  useEffect(() => {
    if (!isOpen) return;
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = [
        inputRef.current,
        ...Array.from(
          listRef.current?.querySelectorAll<HTMLElement>("button") ?? [],
        ),
        document.querySelector<HTMLElement>("[data-cmd-close]"),
      ].filter((el): el is HTMLElement => !!el);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [isOpen, filtered.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[15vh]"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden border border-border bg-surface shadow-[6px_6px_0_0_rgba(34,211,238,0.25)]"
          >
            <h2 id={titleId} className="sr-only">
              Command Palette
            </h2>

            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Terminal className="h-4 w-4 text-neon-cyan" aria-hidden />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls={listboxId}
                aria-activedescendant={
                  filtered[selectedIndex]
                    ? `${listboxId}-opt-${filtered[selectedIndex].id}`
                    : undefined
                }
                value={searchInput}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Jump to a section…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-subtle outline-none"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                data-cmd-close
                onClick={close}
                aria-label="Close command palette"
                className="rounded p-1 text-muted transition-colors hover:bg-card hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul
              ref={listRef}
              id={listboxId}
              role="listbox"
              className="max-h-[60vh] overflow-y-auto p-2"
              aria-label="Sections"
            >
              {filtered.length === 0 ? (
                <li className="px-3 py-8 text-center font-mono text-sm text-muted">
                  No commands found
                </li>
              ) : (
                filtered.map((cmd, i) => {
                  const Icon = cmd.icon;
                  const isActive = i === selectedIndex;
                  return (
                    <li key={cmd.id} role="presentation">
                      <button
                        type="button"
                        role="option"
                        id={`${listboxId}-opt-${cmd.id}`}
                        aria-selected={isActive}
                        onClick={() => scrollToSection(cmd.section)}
                        onMouseEnter={() => setSelectedIndex(i)}
                        className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                          isActive
                            ? "bg-neon-cyan/10 text-foreground"
                            : "text-muted hover:bg-card"
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? "text-neon-cyan" : ""
                          }`}
                        />
                        <span className="flex-1 min-w-0">
                          <span className="block text-sm font-medium">
                            {cmd.label}
                          </span>
                          <span className="block font-mono text-xs text-subtle">
                            {cmd.hint}
                          </span>
                        </span>
                        {isActive && (
                          <ArrowRight className="h-3.5 w-3.5 text-neon-cyan" />
                        )}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>

            <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[11px] text-muted">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd>
                  <span>navigate</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Kbd>↵</Kbd>
                  <span>select</span>
                </span>
              </div>
              <span className="inline-flex items-center gap-1">
                <Kbd>esc</Kbd>
                <span>close</span>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center border border-border bg-card px-1.5 text-[10px] text-foreground">
      {children}
    </kbd>
  );
}
