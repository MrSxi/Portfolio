"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { projects, projectCategories, type Project } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaDownload } from "react-icons/fa";

/** Maps a project category to its CSS colour variable (see globals.css). */
function categoryVar(category: string) {
  const slug = category.toLowerCase().replace(/\s+/g, "-");
  return `var(--cat-${slug}, var(--n-600))`;
}

function CategoryDot({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: `rgb(${categoryVar(category)})` }}
        aria-hidden="true"
      />
      <span className="label">{category}</span>
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("scroll-locked");
      const t = setTimeout(() => closeButtonRef.current?.focus(), 80);
      return () => {
        clearTimeout(t);
        document.body.classList.remove("scroll-locked");
      };
    }
    document.body.classList.remove("scroll-locked");
  }, [modalOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) setModalOpen(false);
    },
    [modalOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="card card-hover flex cursor-pointer flex-col p-6"
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setModalOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${project.title}`}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <CategoryDot category={project.category} />
          <span className="label">{project.period}</span>
        </div>

        <h3 className="serif text-lg leading-snug text-ink">{project.title}</h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-soft">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag">+{project.technologies.length - 4}</span>
          )}
        </div>

        {project.downloadUrl && (
          <a
            href={project.downloadUrl}
            download
            onClick={(e) => e.stopPropagation()}
            className="btn btn-sm mt-5 self-start"
            aria-label={`Download ${project.title} (${project.downloadType?.toUpperCase()})`}
          >
            <FaDownload size={11} aria-hidden="true" />
            Check It Out
          </a>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title}: Project details`}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[82vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-line/70 bg-bg p-7 sm:p-9"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 rounded-md p-2 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                aria-label="Close project details"
              >
                <FaTimes size={14} aria-hidden="true" />
              </button>

              <div className="flex items-center gap-4 pr-10">
                <CategoryDot category={project.category} />
                <span className="label">{project.period}</span>
              </div>

              <h3 className="serif mt-4 text-2xl text-ink">{project.title}</h3>

              <p className="mt-5 leading-relaxed text-soft">{project.longDescription}</p>

              <div className="mt-8">
                <h4 className="label mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-soft">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="label mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="btn btn-primary btn-sm"
                  >
                    <FaDownload size={12} aria-hidden="true" />
                    Check It Out
                    <span className="uppercase opacity-70">({project.downloadType})</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                  >
                    <FaGithub size={13} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                  >
                    <FaExternalLinkAlt size={11} aria-hidden="true" />
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

  const categoryCounts = projectCategories.reduce(
    (acc, cat) => {
      acc[cat] =
        cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <section id="projects" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Selected Work" index="05" />

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={isActive}
                className={`rounded-md border px-3 py-1.5 font-mono text-[0.6875rem] tracking-wider uppercase transition-colors ${
                  isActive
                    ? "border-accent/40 bg-accent-soft text-accent"
                    : "border-line/70 text-muted hover:border-line hover:text-ink"
                }`}
              >
                {cat}
                <span className="ml-1.5 opacity-60">{categoryCounts[cat]}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
