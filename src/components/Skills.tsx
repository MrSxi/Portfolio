"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/data/portfolio";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text-primary">{name}</span>
        <span
          className="text-xs text-neon-cyan"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" subtitle="Technical Arsenal" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3
                  className="text-sm font-bold tracking-wider uppercase text-text-primary"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={ci * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
