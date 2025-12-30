"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Solveda Software",
    role: "Software Developer (Frontend)",
    location: "Delhi NCR",
    period: "Feb 2023 – Present",
    highlights: [
      "Architected core frontend modules for enterprise e-commerce using React.js & Next.js",
      "Built secure Wallet system improving conversion rate by ~15%",
      "Led Core Web Vitals initiatives, reduced pod restarts to near zero",
      "Collaborated with SEO teams to improve organic traffic by ~22%",
    ],
  },
  {
    company: "CSC E-Governance Services",
    role: "Software Engineer",
    location: "Delhi NCR",
    period: "Jun 2022 – Jan 2023",
    highlights: [
      "Built cross-platform reconciliation app with Electron.js",
      "Engineered file comparison processing 500K+ records",
      "Reduced processing time from 5 minutes to under 10 seconds",
    ],
  },
];

export default function Profile() {
  return (
    <section id="profile" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
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
              cat operator.profile
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Operator Profile
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 sticky top-24">
              {/* Decorative corner markers */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan/50 rounded-tl" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan/50 rounded-tr" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-cyan/50 rounded-bl" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan/50 rounded-br" />

              {/* Avatar placeholder */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-neon-cyan/20 rounded-lg blur-md" />
                <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-dark-surface to-dark-card border border-neon-cyan/30 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-bold text-neon-cyan">LS</span>

                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent animate-scan" />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center border-b border-dark-border pb-2">
                  <span className="text-gray-500">ID</span>
                  <span className="text-white">Lakshay Sharma</span>
                </div>
                <div className="flex justify-between items-center border-b border-dark-border pb-2">
                  <span className="text-gray-500">Level</span>
                  <span className="text-white">3+ Years</span>
                </div>
                <div className="flex justify-between items-center border-b border-dark-border pb-2">
                  <span className="text-gray-500">Class</span>
                  <span className="text-neon-teal">Builder / Founder</span>
                </div>
                <div className="flex justify-between items-center border-b border-dark-border pb-2">
                  <span className="text-gray-500">Spec</span>
                  <span className="text-white text-right">AI-native, UX</span>
                </div>

                <div className="pt-4">
                  <span className="text-gray-500 block mb-2 text-xs uppercase tracking-wider">
                    Philosophy
                  </span>
                  <p className="text-gray-300 italic border-l-2 border-neon-cyan/30 pl-3 py-1">
                    &quot;Ship fast. Think deep. Iterate forever.&quot;
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mt-6 pt-6 border-t border-dark-border">
                <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                  Education Protocol
                </span>
                <p className="text-white text-sm mt-2">
                  B.Tech, Guru Gobind Singh Indraprastha University
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience timeline */}
          <div className="lg:col-span-8 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-dark-card/50 border border-dark-border rounded-lg p-6 hover:border-neon-cyan/30 transition-all group hover:bg-dark-card"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-px h-6 bg-dark-border" />
                )}

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-dark-surface border border-dark-border">
                        <Briefcase className="w-3 h-3 text-neon-teal" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-dark-surface border border-dark-border">
                        <MapPin className="w-3 h-3 text-neon-purple" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-neon-cyan font-mono px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 self-start">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <span className="text-neon-cyan mt-1.5 text-[10px]">
                        ▶
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
