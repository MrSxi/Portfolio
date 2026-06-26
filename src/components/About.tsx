"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold neon-text" style={{ fontFamily: "var(--font-orbitron)" }}>
      {Number.isInteger(target) ? Math.round(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div ref={ref} className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="glass-card rounded-xl p-8 relative cyber-corners border-neon-cyan/20">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h3
                  className="text-sm tracking-[0.2em] uppercase text-neon-magenta mb-4"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest) => (
                    <span key={interest} className="tech-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix !== undefined ? stat.suffix : "+"}
                />
                <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}

            {/* Languages */}
            <div className="glass-card rounded-xl p-6">
              <h3
                className="text-xs tracking-[0.2em] uppercase text-neon-magenta mb-3"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Languages
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-primary">English</span>
                  <span className="text-neon-cyan">Fluent</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-primary">Arabic</span>
                  <span className="text-neon-cyan">Native</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
