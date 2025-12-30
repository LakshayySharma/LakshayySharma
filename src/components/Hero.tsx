"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span
        className={`${showCursor ? "opacity-100" : "opacity-0"} text-neon-cyan`}
      >
        _
      </span>
    </span>
  );
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform values for different layers
  const backgroundX = useTransform(x, [-0.5, 0.5], ["-2%", "2%"]);
  const backgroundY = useTransform(y, [-0.5, 0.5], ["-2%", "2%"]);

  const orbsX = useTransform(x, [-0.5, 0.5], ["-5%", "5%"]);
  const orbsY = useTransform(y, [-0.5, 0.5], ["-5%", "5%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
      const mouseYRelative = (e.clientY - rect.top) / height - 0.5;

      mouseX.set(mouseXRelative);
      mouseY.set(mouseYRelative);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508]"
    >
      {/* Vignette & Color Grading */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80" />
      <div className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

      {/* Background Image with Parallax */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-[-5%] z-0"
      >
        <Image
          src="/hero.png"
          alt="Operator Background"
          fill
          className="object-cover opacity-90 contrast-125 brightness-95"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/60 mix-blend-multiply" />
      </motion.div>

      {/* Animated gradient orbs with parallax (Subtle overlay) */}
      <motion.div
        style={{ x: orbsX, y: orbsY }}
        className="absolute inset-0 z-0 overflow-hidden mix-blend-screen"
      >
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,240,255,0.2) 0%, transparent 70%)",
            top: "-20%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Grid overlay with perspective */}
      <div
        className="absolute inset-0 opacity-[0.05] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "perspective(500px) rotateX(20deg)",
          transformOrigin: "center 80%",
        }}
      />

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl">
        {/* System status indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neon-teal/10 border border-neon-teal/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-teal animate-pulse shadow-[0_0_10px_rgba(15,240,176,0.8)]" />
            <span className="text-neon-teal text-xs tracking-[0.2em] uppercase font-mono">
              System Online
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter"
        >
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            I build interfaces
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple neon-glow-subtle">
            that feel alive.
          </span>
        </motion.h1>

        {/* Subtitle with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-400 mb-12 font-mono h-8"
        >
          {isLoaded && (
            <TypewriterText
              text="Frontend Architect • AI Builder • Product Thinker"
              delay={2000}
            />
          )}
        </motion.div>

        {/* CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="text-sm text-gray-500 font-mono"
        >
          <span className="text-neon-cyan/70">Press</span>{" "}
          <kbd className="px-2 py-1 bg-dark-card border border-dark-border rounded text-xs text-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            ⌘K
          </kbd>{" "}
          <span className="text-neon-cyan/70">to navigate</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.5 : 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-9 border border-gray-600 rounded-full flex justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 bg-neon-cyan rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
