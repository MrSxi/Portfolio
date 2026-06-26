"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/portfolio";
import { HiAcademicCap } from "react-icons/hi";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education" subtitle="Academic Background" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-xl p-8 relative overflow-hidden cyber-corners border-neon-cyan/20">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(0,240,255,0.06)_0%,_transparent_70%)]" />

            <div className="relative">
              {/* Icon + Degree */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
                  <HiAcademicCap size={24} className="text-neon-cyan" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {education.degree}
                  </h3>
                  <p className="text-text-secondary mt-1">{education.university}</p>
                  <p className="text-text-muted text-sm">{education.location}</p>
                </div>
              </div>

              {/* Details Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass rounded-lg p-4 text-center">
                  <span className="text-xs text-text-muted block mb-1" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    CGPA
                  </span>
                  <span className="text-2xl font-bold neon-text" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {education.cgpa}
                  </span>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <span className="text-xs text-text-muted block mb-1" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    GRADUATION
                  </span>
                  <span className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {education.expectedGraduation}
                  </span>
                </div>
                <div className="glass rounded-lg p-4 text-center col-span-2 sm:col-span-1">
                  <span className="text-xs text-text-muted block mb-1" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    PERIOD
                  </span>
                  <span className="text-sm font-medium text-text-secondary">
                    {education.period}
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4
                  className="text-xs tracking-[0.2em] uppercase text-neon-magenta mb-4"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="tech-tag"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
