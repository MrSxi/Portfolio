"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" subtitle="Professional Journey" index="06" />

        <div ref={ref} className="relative">
          <div className="timeline-line" aria-hidden="true" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="card p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="label text-accent">{exp.type}</span>
                  <span className="label">{exp.period}</span>
                </div>

                <h3 className="serif text-xl text-ink">{exp.title}</h3>
                <p className="mt-1.5 text-sm text-body">{exp.company}</p>
                <p className="mt-0.5 text-sm text-muted">{exp.location}</p>

                <p className="mt-5 text-sm leading-relaxed text-soft">{exp.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex gap-3 text-sm leading-relaxed text-soft">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">
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
    </section>
  );
}
