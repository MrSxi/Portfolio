"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal-style prefix */}
        <span
          className="text-xs tracking-[0.3em] uppercase text-neon-magenta mb-3 block"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {"// "}
          {subtitle || title}
        </span>

        {/* Main heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-text-primary"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {title}
        </h2>

        {/* Neon underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: align === "center" ? "80px" : "60px" } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`h-[2px] mt-4 ${align === "center" ? "mx-auto" : ""}`}
          style={{
            background: "linear-gradient(90deg, #00f0ff, #ff00e5)",
            boxShadow: "0 0 10px #00f0ff66",
          }}
        />
      </motion.div>
    </div>
  );
}
