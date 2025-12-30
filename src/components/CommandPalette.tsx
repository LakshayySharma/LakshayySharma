"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Command, User, Briefcase, Cpu, Mail, X, Terminal } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  command: string;
  icon: React.ReactNode;
  section: string;
}

const commands: CommandItem[] = [
  {
    id: "projects",
    label: "Projects",
    command: "open projects",
    icon: <Briefcase className="w-4 h-4" />,
    section: "projects",
  },
  {
    id: "capabilities",
    label: "Capabilities",
    command: "view capabilities",
    icon: <Cpu className="w-4 h-4" />,
    section: "capabilities",
  },
  {
    id: "profile",
    label: "Operator Profile",
    command: "operator profile",
    icon: <User className="w-4 h-4" />,
    section: "profile",
  },
  {
    id: "contact",
    label: "Contact",
    command: "contact --secure",
    icon: <Mail className="w-4 h-4" />,
    section: "contact",
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.command.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setSearch("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
      }

      // Close on escape
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
        setSelectedIndex(0);
      }

      // Navigate with arrows
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
        }
        if (e.key === "Enter" && filteredCommands.length > 0) {
          e.preventDefault();
          scrollToSection(filteredCommands[selectedIndex].section);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, scrollToSection]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <>
      {/* Trigger button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 flex items-center gap-2 px-3 py-2 bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-lg text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300 group"
      >
        {/* <Command className="w-4 h-4" /> */}
        <span className="text-sm font-mono hidden sm:inline">⌘K</span>
      </motion.button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50 p-4"
            >
              <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden shadow-2xl neon-border">
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-dark-border">
                  <Terminal className="w-5 h-5 text-neon-cyan" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a command..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none font-mono text-sm"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-500 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Commands list */}
                <div className="py-2 max-h-[300px] overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="px-4 py-8 text-center text-gray-500 font-mono text-sm">
                      No commands found
                    </div>
                  ) : (
                    filteredCommands.map((cmd, index) => (
                      <motion.button
                        key={cmd.id}
                        onClick={() => scrollToSection(cmd.section)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                          selectedIndex === index
                            ? "bg-neon-cyan/10 text-neon-cyan"
                            : "text-gray-400 hover:bg-dark-surface"
                        }`}
                      >
                        <span
                          className={
                            selectedIndex === index
                              ? "text-neon-cyan"
                              : "text-gray-500"
                          }
                        >
                          {cmd.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{cmd.label}</div>
                          <div className="text-xs text-gray-500 font-mono mt-0.5">
                            {`> ${cmd.command}`}
                          </div>
                        </div>
                        {selectedIndex === index && (
                          <span className="text-xs text-neon-cyan/70 font-mono">
                            ↵ enter
                          </span>
                        )}
                      </motion.button>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-dark-border text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-4">
                    <span>
                      <kbd className="px-1.5 py-0.5 bg-dark-surface rounded">
                        ↑↓
                      </kbd>{" "}
                      navigate
                    </span>
                    <span>
                      <kbd className="px-1.5 py-0.5 bg-dark-surface rounded">
                        ↵
                      </kbd>{" "}
                      select
                    </span>
                  </div>
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-dark-surface rounded">
                      esc
                    </kbd>{" "}
                    close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
