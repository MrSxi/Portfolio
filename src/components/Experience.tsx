"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/data/portfolio";
import { HiBriefcase } from "react-icons/hi";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" subtitle="Professional Journey" />

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="timeline-dot" style={{ top: "4px" }} />

              <div className="glass-card rounded-xl p-6 relative">
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                        style={{ fontFamily: "var(--font-jetbrains)" }}>
                    <HiBriefcase size={10} />
                    {exp.type}
                  </span>
                  <span className="text-xs text-text-muted" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    {exp.period}
                  </span>
                </div>

                {/* Title & Company */}
                <h3
                  className="text-lg font-bold text-text-primary mb-1"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {exp.title}
                </h3>
                <p className="text-neon-cyan text-sm mb-1">{exp.company}</p>
                <p className="text-text-muted text-xs mb-4">{exp.location}</p>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-neon-magenta mt-1 shrink-0">▹</span>
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-[0.6rem]">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
