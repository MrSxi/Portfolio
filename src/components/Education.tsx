"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facts = [
    { label: "CGPA", value: education.cgpa },
    { label: "Expected Graduation", value: education.expectedGraduation },
    { label: "Period", value: education.period },
  ];

  return (
    <section id="education" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education" subtitle="Academic Background" index="03" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="card overflow-hidden"
        >
          <div className="p-7 sm:p-9">
            <h3 className="serif text-2xl text-ink">{education.degree}</h3>
            <p className="mt-2 text-body">{education.university}</p>
            <p className="mt-1 text-sm text-muted">{education.location}</p>
          </div>

          <div className="grid divide-y divide-line/60 border-y border-line/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {facts.map((fact) => (
              <div key={fact.label} className="px-7 py-5 sm:px-6">
                <span className="label block">{fact.label}</span>
                <span className="mt-1.5 block text-base text-ink">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="p-7 sm:p-9">
            <h4 className="label mb-4">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.04, duration: 0.35 }}
                  className="tag"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
