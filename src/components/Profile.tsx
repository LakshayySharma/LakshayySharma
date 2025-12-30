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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark-card border border-dark-border rounded-lg p-6 sticky top-8">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-teal/20 border border-neon-cyan/30 flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-neon-cyan">LS</span>
              </div>

              {/* Info */}
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-gray-500">Operator:</span>
                  <span className="text-white ml-2">Lakshay Sharma</span>
                </div>
                <div>
                  <span className="text-gray-500">Experience:</span>
                  <span className="text-white ml-2">3+ years</span>
                </div>
                <div>
                  <span className="text-gray-500">Mode:</span>
                  <span className="text-neon-teal ml-2">
                    Builder / Solo Founder
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Focus:</span>
                  <span className="text-white ml-2">
                    AI-native products, scalable UX
                  </span>
                </div>
                <div className="pt-4 border-t border-dark-border">
                  <span className="text-gray-500">Philosophy:</span>
                  <p className="text-gray-300 mt-2 italic">
                    &quot;Ship fast. Think deep. Iterate forever.&quot;
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mt-6 pt-6 border-t border-dark-border">
                <span className="text-gray-500 font-mono text-xs">
                  EDUCATION
                </span>
                <p className="text-white text-sm mt-2">
                  B.Tech, Guru Gobind Singh Indraprastha University
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience timeline */}
          <div className="lg:col-span-3 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-dark-card border border-dark-border rounded-lg p-6 hover:border-neon-cyan/30 transition-colors group"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-px h-6 bg-dark-border" />
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="text-neon-cyan mt-1">›</span>
                      {highlight}
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
