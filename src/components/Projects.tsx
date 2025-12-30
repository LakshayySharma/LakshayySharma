"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  status: "LIVE" | "WIP" | "ARCHIVED";
  stack: string[];
  url?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "LAXMOCK",
    description: "AI Interview Simulator with real-time speech processing",
    status: "LIVE",
    stack: ["Next.js", "OpenAI", "Whisper", "Cloud Run", "PostgreSQL"],
    url: "https://laxmock.com",
  },
  {
    name: "E-COMMERCE PLATFORM",
    description: "Enterprise e-commerce with wallet system & fast-checkout",
    status: "LIVE",
    stack: ["React.js", "Next.js", "GA4", "Feature Flags"],
  },
  {
    name: "RECONCILIATION APP",
    description: "Desktop app processing 500K+ records in seconds",
    status: "ARCHIVED",
    stack: ["React.js", "Electron.js", "Service Workers", "Node.js"],
  },
];

const statusColors = {
  LIVE: "text-neon-teal border-neon-teal/30 bg-neon-teal/10",
  WIP: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  ARCHIVED: "text-gray-400 border-gray-400/30 bg-gray-400/10",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className={`relative bg-dark-card border border-dark-border rounded-lg p-6 transition-all duration-500 ${
          isHovered ? "border-neon-cyan/40 neon-border" : ""
        }`}
      >
        {/* Flicker effect on hover */}
        <motion.div
          className="absolute inset-0 bg-neon-cyan/5 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? [0, 0.1, 0.05, 0.1, 0] : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
                isHovered ? "text-neon-cyan neon-glow-subtle" : "text-white"
              }`}
            >
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1 font-mono">
              {project.description}
            </p>
          </div>
          <span
            className={`px-2 py-1 text-xs font-mono rounded border ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-gray-400 bg-dark-surface rounded border border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-dark-border">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
          {!project.url && !project.github && (
            <span className="text-sm text-gray-500 font-mono">
              Enterprise Project
            </span>
          )}
        </div>

        {/* Hover hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute bottom-2 right-4 text-xs text-neon-cyan/70 font-mono"
        >
          ENTER SYSTEM →
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
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
              ls ./projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Deployed Systems
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm">
            Production-ready applications and enterprise solutions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
