"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Two-digit section number shown in the mono eyebrow, e.g. "02". */
  index?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  index,
  align = "left",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="label block">
          {index ? `${index} — ` : ""}
          {subtitle || title}
        </span>

        <h2 className="serif mt-3 text-3xl text-ink sm:text-4xl">{title}</h2>

        <div
          className={`mt-5 h-px w-full max-w-xl bg-line/60 ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      </motion.div>
    </div>
  );
}
