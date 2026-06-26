"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Achievements" subtitle="Recognition & Honors" />

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 mb-8 text-center"
          >
            <div className="text-5xl mb-3">🏆</div>
            <h3
              className="text-2xl font-bold neon-text mb-2"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Dean&apos;s List — 4 Semesters
            </h3>
            <p className="text-text-secondary text-sm">
              Consistently recognized for outstanding academic performance at the
              American University of Ras Al Khaimah
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-xl p-5 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{achievement.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
