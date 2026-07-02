"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { projects, projectCategories, type Project } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Body scroll lock and focus management when modal opens
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("scroll-locked");
      // Focus the close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => document.body.classList.remove("scroll-locked");
  }, [modalOpen]);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && modalOpen) {
      setModalOpen(false);
    }
  }, [modalOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card rounded-xl p-6 cursor-pointer group"
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setModalOpen(true); }}}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${project.title}`}
      >
        {/* Category Badge */}
        <span
          className="text-[0.65rem] tracking-[0.15em] uppercase text-neon-magenta mb-3 block"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-bold text-text-primary group-hover:text-neon-cyan transition-colors mb-2"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {project.title}
        </h3>

        {/* Period */}
        <p className="text-xs text-text-muted mb-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
          {project.period}
        </p>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag text-[0.6rem]">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag text-[0.6rem]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Hover glow line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" aria-hidden="true" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} — Project details`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                ref={closeButtonRef}
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-neon-cyan transition-colors"
                aria-label="Close project details"
              >
                <FaTimes size={16} aria-hidden="true" />
              </button>

              {/* Category */}
              <span
                className="text-[0.65rem] tracking-[0.15em] uppercase text-neon-magenta mb-2 block"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-text-primary mb-1"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {project.title}
              </h3>

              {/* Period */}
              <p className="text-xs text-text-muted mb-4" style={{ fontFamily: "var(--font-jetbrains)" }}>
                {project.period}
              </p>

              {/* Full Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4
                  className="text-xs tracking-[0.2em] uppercase text-neon-magenta mb-3"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-neon-cyan mt-1 shrink-0" aria-hidden="true">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4
                  className="text-xs tracking-[0.2em] uppercase text-neon-magenta mb-3"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button text-xs"
                  >
                    <FaGithub size={14} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button-filled text-xs"
                  >
                    <FaExternalLinkAlt size={12} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Count projects per category for badges
  const categoryCounts = projectCategories.reduce((acc, cat) => {
    acc[cat] = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="What I've Built" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-4 py-2 text-xs rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/40 shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                  : "text-text-secondary border border-cyber-border hover:border-neon-cyan/20 hover:text-text-primary"
              }`}
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {cat}
              <span className="ml-1.5 opacity-60">({categoryCounts[cat]})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
