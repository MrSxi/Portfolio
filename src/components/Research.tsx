"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { research } from "@/data/portfolio";

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Research" subtitle="Ongoing Work" index="03" />

        <div ref={ref} className="space-y-6">
          {research.map((item, i) => {
            const active = item.status === "In progress";
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card p-6 sm:p-8"
              >
                {/* Status + period */}
                <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] tracking-wider uppercase ${
                      active
                        ? "border-accent/40 bg-accent-soft text-accent"
                        : "border-line/70 text-muted"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        active ? "bg-accent" : "bg-faint"
                      }`}
                      aria-hidden="true"
                    />
                    {item.status}
                  </span>
                  <span className="label">{item.period}</span>
                  <span className="label">{item.statusNote}</span>
                </div>

                <h3 className="serif text-xl leading-snug text-ink sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-body">{item.center}</p>
                <p className="mt-0.5 text-sm text-muted">
                  Supervisor: {item.supervisor}
                </p>

                <p className="mt-5 max-w-3xl text-[0.9375rem] leading-relaxed text-soft">
                  {item.description}
                </p>

                <div className="mt-6">
                  <h4 className="label mb-3">What I work on</h4>
                  <ul className="space-y-2.5">
                    {item.contributions.map((c, ci) => (
                      <li
                        key={ci}
                        className="flex gap-3 text-sm leading-relaxed text-soft"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {item.buildsOn && (
                  <p className="mt-6 border-t border-line/50 pt-4 text-xs leading-relaxed text-muted">
                    <span className="label">Builds on</span>{" "}
                    <span className="italic">{item.buildsOn}</span>
                  </p>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
