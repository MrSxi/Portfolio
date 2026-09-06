"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/data/portfolio";
import { FaDownload } from "react-icons/fa";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Achievements" subtitle="Recognition & Honors" index="08" />

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-8 border-l-2 border-accent pl-6"
        >
          <h3 className="serif text-2xl text-ink">
            President&apos;s List &amp; 4× Dean&apos;s List
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-soft">
            Consistently recognized for outstanding academic performance at the American
            University of Ras Al Khaimah.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-5 sm:grid-cols-2">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`card card-hover flex flex-col p-6 ${
                achievement.featured
                  ? "border-accent/40 bg-accent-soft sm:col-span-2"
                  : ""
              }`}
            >
              {achievement.featured && <span className="label mb-3 text-accent">Highest Honor</span>}

              <h3 className="serif text-lg leading-snug text-ink">{achievement.title}</h3>

              <p className="mt-2.5 text-sm leading-relaxed text-soft">
                {achievement.description}
              </p>

              {achievement.downloadUrl && (
                <a
                  href={achievement.downloadUrl}
                  download
                  className="btn btn-sm mt-5 self-start"
                  aria-label={`Download ${achievement.title} certificate`}
                >
                  <FaDownload size={10} aria-hidden="true" />
                  Check It Out
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
