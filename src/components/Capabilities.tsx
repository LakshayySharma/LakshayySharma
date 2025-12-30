"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Capability {
  name: string;
  level: number; // 0-100
  description: string;
}

const capabilities: Capability[] = [
  {
    name: "Frontend Systems",
    level: 95,
    description: "React, Next.js, TypeScript",
  },
  {
    name: "Performance Optimization",
    level: 90,
    description: "Core Web Vitals, Memory Management",
  },
  {
    name: "AI Integration",
    level: 80,
    description: "OpenAI, Gemini, Whisper",
  },
  {
    name: "Product Thinking",
    level: 85,
    description: "A/B Testing, Feature Flags, UX",
  },
  {
    name: "System Architecture",
    level: 88,
    description: "Scalable Frontend, API Design",
  },
  {
    name: "Backend Development",
    level: 75,
    description: "Node.js, PostgreSQL, Prisma",
  },
];

function CapabilityBar({
  capability,
  index,
}: {
  capability: Capability;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Create block visualization (10 blocks total)
  const totalBlocks = 10;
  const filledBlocks = Math.round(capability.level / 10);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-200 font-mono text-sm">
          {capability.name}
        </span>
        <span className="text-gray-500 font-mono text-xs">
          {capability.description}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
            }
            transition={{
              duration: 0.3,
              delay: index * 0.1 + i * 0.05,
            }}
            className={`h-4 flex-1 rounded-sm transition-colors duration-300 ${
              i < filledBlocks
                ? "bg-neon-cyan group-hover:bg-neon-teal"
                : "bg-dark-surface border border-dark-border"
            }`}
            style={{
              boxShadow:
                i < filledBlocks ? "0 0 10px rgba(0, 240, 255, 0.3)" : "none",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-24 px-6 relative bg-dark-surface/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-sm">&gt;</span>
            <span className="text-gray-500 font-mono text-sm">
              capabilities --list
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            System Capabilities
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm">
            Technical proficiency matrix
          </p>
        </motion.div>

        {/* Terminal-style container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-lg overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-border bg-dark-surface/50">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-gray-500 text-xs font-mono">
              system://capabilities
            </span>
          </div>

          {/* Capabilities list */}
          <div className="p-6 space-y-6">
            {capabilities.map((capability, index) => (
              <CapabilityBar
                key={capability.name}
                capability={capability}
                index={index}
              />
            ))}
          </div>

          {/* Terminal footer */}
          <div className="px-4 py-3 border-t border-dark-border bg-dark-surface/30">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="text-neon-cyan">$</span>
              <span className="cursor-blink">_</span>
            </div>
          </div>
        </motion.div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <p className="text-gray-500 font-mono text-xs mb-4">
            &gt; Additional protocols:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Service Workers",
              "WebSockets",
              "SSE",
              "Accessibility",
              "SEO",
              "Git",
              "GCP",
              "Razorpay",
              "Tailwind CSS",
              "Material UI",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-mono text-gray-400 bg-dark-card border border-dark-border rounded hover:border-neon-cyan/30 hover:text-neon-cyan transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
