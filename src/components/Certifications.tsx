"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/data/portfolio";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials & Coursework"
          index="07"
        />

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.05 }}
              className="card card-hover flex flex-col p-6"
            >
              <span className="label">{cert.category}</span>

              <h3 className="serif mt-3 text-base leading-snug text-ink">{cert.name}</h3>

              <p className="mt-2 text-sm text-body">{cert.issuer}</p>

              {/* Credential metadata, each row renders only when present. */}
              {(cert.issueDate || cert.credentialId) && (
                <dl className="mt-4 space-y-1.5 border-t border-line/50 pt-4">
                  {cert.issueDate && (
                    <div className="flex justify-between gap-3">
                      <dt className="label">Issued</dt>
                      <dd className="font-mono text-[0.6875rem] text-body">
                        {cert.issueDate}
                      </dd>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex justify-between gap-3">
                      <dt className="label">Credential ID</dt>
                      <dd className="truncate font-mono text-[0.6875rem] text-body">
                        {cert.credentialId}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {(cert.downloadUrl || cert.credentialUrl) && (
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {cert.downloadUrl && (
                    <a
                      href={cert.downloadUrl}
                      download
                      className="btn btn-sm"
                      aria-label={`Download ${cert.name} certificate`}
                    >
                      <FaDownload size={10} aria-hidden="true" />
                      Check It Out
                    </a>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      <FaExternalLinkAlt size={10} aria-hidden="true" />
                      Verify
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
