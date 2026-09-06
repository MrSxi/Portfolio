"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { personalInfo, languages } from "@/data/portfolio";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const steps = 50;
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
    <span ref={ref} className="serif text-3xl text-ink">
      {Number.isInteger(target) ? Math.round(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About" subtitle="Who I Am" index="02" />

        <div ref={ref} className="grid gap-12 md:grid-cols-5 md:gap-14">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="md:col-span-3"
          >
            <div className="space-y-5 text-[0.9375rem] leading-[1.75] text-soft">
              {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="label mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span key={interest} className="tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="md:col-span-2"
          >
            <div className="card grid grid-cols-2 divide-x divide-y divide-line/60 overflow-hidden">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="px-5 py-6">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix !== undefined ? stat.suffix : "+"}
                  />
                  <p className="label mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="card mt-4 p-5">
              <h3 className="label mb-4">Languages</h3>
              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between text-sm">
                    <span className="text-body">{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
