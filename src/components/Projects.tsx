"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Project {
  index: string;
  name: string;
  blurb: string;
  description: string;
  status: "LIVE" | "WIP" | "ARCHIVED";
  stack: string[];
  url?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    index: "001",
    name: "LaxMock",
    blurb: "AI interview simulator",
    description:
      "Real-time speech-to-text mock interviews with OpenAI evaluation. WebRTC pipeline, Whisper transcription, and Cloud Run autoscaling. Built end-to-end: auth, streaming, scoring, and deployment.",
    status: "LIVE",
    stack: ["Next.js", "OpenAI", "Whisper", "Cloud Run", "PostgreSQL"],
    url: "https://laxmock.com",
    featured: true,
  },
  {
    index: "002",
    name: "Enterprise E-commerce",
    blurb: "High-traffic commerce platform",
    description:
      "Front-end modules for a production e-commerce platform: wallet system, fast-checkout, GA4-driven A/B testing, and feature-flag rollouts.",
    status: "LIVE",
    stack: ["React.js", "Next.js", "GA4", "Feature Flags"],
  },
  {
    index: "003",
    name: "Reconciliation App",
    blurb: "Desktop data reconciliation",
    description:
      "Electron desktop tool that diffed 500K+ records against external sources. Cut processing time from 5 minutes to under 10 seconds using Service Workers.",
    status: "ARCHIVED",
    stack: ["React.js", "Electron.js", "Service Workers", "Node.js"],
  },
];

const statusColor: Record<Project["status"], string> = {
  LIVE: "text-neon-teal",
  WIP: "text-neon-amber",
  ARCHIVED: "text-muted",
};

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const link = project.url ?? project.github;
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
      className={`brutal-hover group relative border border-border bg-card/70 ${
        isFeatured ? "p-7 sm:p-10 md:col-span-2" : "p-6 sm:p-7"
      }`}
    >
      {/* Index + stamp row */}
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden
          className={`font-mono font-semibold text-subtle ${
            isFeatured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {project.index}
        </span>
        <span className={`stamp ${statusColor[project.status]}`}>
          {project.status === "LIVE" && (
            <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-current" />
          )}
          {project.status === "ARCHIVED" ? "Archived" : project.status}
        </span>
      </div>

      {/* Title + blurb */}
      <h3
        className={`mt-5 font-display font-bold tracking-tight text-white uppercase ${
          isFeatured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
        }`}
      >
        {project.name}
      </h3>
      <p className="mt-1.5 font-mono text-xs text-neon-cyan sm:text-sm">
        {project.blurb}
      </p>

      {/* Description */}
      <p
        className={`mt-4 text-sm leading-relaxed text-foreground/80 ${
          isFeatured ? "max-w-2xl" : ""
        }`}
      >
        {project.description}
      </p>

      {/* Stack — inline mono, no chips */}
      <p className="mt-5 font-mono text-[11px] tracking-wide text-muted sm:text-xs">
        {project.stack.join(" / ")}
      </p>

      {/* Action */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-wide text-foreground uppercase transition-colors hover:text-neon-cyan"
            aria-label={`Visit ${project.name}`}
          >
            Visit
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        ) : (
          <span className="font-mono text-xs text-subtle uppercase">
            Enterprise — NDA
          </span>
        )}
        {project.github && project.url && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted uppercase transition-colors hover:text-neon-cyan"
          >
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="001"
          label="SELECTED WORK"
          title="Deployed"
          headingId="projects-heading"
          blurb="Production systems I've designed, built, and operated. Each one shipped behind real metrics."
        />

        {/* Broken grid — featured spans full width */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
