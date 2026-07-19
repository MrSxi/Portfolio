"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/data/portfolio";
import { HiShieldCheck } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const issuerColors: Record<string, string> = {
  Coursera: "#0056D2",
  "UC San Diego (Coursera)": "#0056D2",
  "BITS Pilani (Coursera)": "#0056D2",
  "Huawei ICT Academy": "#CF0A2C",
  Fortinet: "#EE3124",
  GMetrix: "#5CB85C",
  Accenture: "#A100FF",
};

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Certifications" subtitle="Professional Development" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 group"
            >
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{
                    backgroundColor: `${issuerColors[cert.issuer] || "#00f0ff"}15`,
                    border: `1px solid ${issuerColors[cert.issuer] || "#00f0ff"}30`,
                  }}
                >
                  <HiShieldCheck
                    size={18}
                    style={{ color: issuerColors[cert.issuer] || "#00f0ff" }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-neon-cyan transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
                  <span className="inline-block mt-2 text-[0.6rem] px-2 py-0.5 rounded-full bg-neon-violet/10 text-neon-violet border border-neon-violet/20"
                        style={{ fontFamily: "var(--font-jetbrains)" }}>
                    {cert.category}
                  </span>
                  {cert.downloadUrl && (
                    <div className="mt-3">
                      <a
                        href={cert.downloadUrl}
                        download
                        className="cyber-button text-[0.65rem]"
                        aria-label={`Download ${cert.name} certificate`}
                      >
                        <FaDownload size={10} aria-hidden="true" />
                        Check It Out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
}
