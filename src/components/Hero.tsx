"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { personalInfo, socialLinks } from "@/data/portfolio";

/* Reduced-motion preference, read as an external store so it needs no mirroring
   state and stays correct if the user flips the setting mid-visit. */
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/* Typewriter.
   The loop is driven by plain locals inside a single effect rather than by
   React state, so a repeated character can never stall it. Exactly one timer
   is live at a time and it is always cleared on cleanup. */
// A separator that cannot appear inside a title, so join/split is lossless.
const SEP = "\u0000";

function useTypewriter(
  words: string[],
  { typeMs = 70, deleteMs = 35, holdMs = 1900, gapMs = 420 } = {},
) {
  // Start fully typed so the server render and first paint show real text.
  const [text, setText] = useState(words[0] ?? "");
  const reducedMotion = usePrefersReducedMotion();

  // Re-derived only when the words themselves change, so an inline array from
  // the caller cannot restart the animation on every render.
  const wordsKey = words.join(SEP);
  const list = useMemo(() => wordsKey.split(SEP), [wordsKey]);

  useEffect(() => {
    if (list.length === 0 || list[0] === "") return;

    // Reduced motion: keep rotating the titles so the line never looks frozen,
    // but swap each one in whole instead of typing it (the caret is hidden too).
    if (reducedMotion) {
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % list.length;
        setText(list[i]);
      }, 3000);
      return () => clearInterval(interval);
    }

    let timer: ReturnType<typeof setTimeout>;
    let wordIndex = 0;
    let charIndex = list[0].length;
    let deleting = true;

    const tick = () => {
      const word = list[wordIndex];

      if (deleting) {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % list.length;
          timer = setTimeout(tick, gapMs);
        } else {
          timer = setTimeout(tick, deleteMs);
        }
        return;
      }

      charIndex += 1;
      setText(word.slice(0, charIndex));
      if (charIndex === word.length) {
        deleting = true;
        timer = setTimeout(tick, holdMs);
      } else {
        timer = setTimeout(tick, typeMs);
      }
    };

    timer = setTimeout(tick, holdMs);
    return () => clearTimeout(timer);
  }, [list, reducedMotion, typeMs, deleteMs, holdMs, gapMs]);

  return { text, showCaret: !reducedMotion };
}

function TypeWriter({ words }: { words: string[] }) {
  const { text, showCaret } = useTypewriter(words);

  return (
    // Fixed line box: only the caret moves, nothing below it reflows.
    <span className="flex min-h-[1.6em] items-center">
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {text}
      </span>
      <span aria-hidden="true" className="font-mono text-accent">
        {text}
        {showCaret && <span className="caret" />}
      </span>
    </span>
  );
}

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope,
} as const;

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const [firstName, ...rest] = personalInfo.name.split(" ");

  return (
    <section
      id="home"
      className="relative px-6 pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-6xl">
        {/* Mono meta strip */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line/50 pb-4">
          <span className="label">Portfolio / {new Date().getFullYear()}</span>
          <span className="label hidden sm:block">{personalInfo.title}</span>
          <span className="label">@ {personalInfo.location}</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16"
        >
          {/* Text column */}
          <div>
            <motion.span variants={item} className="label block">
              01 / Introduction
            </motion.span>

            <motion.h1
              variants={item}
              className="serif mt-5 text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
            >
              {firstName} <span className="text-accent italic">{rest.join(" ")}</span>
            </motion.h1>

            <motion.div variants={item} className="mt-5 text-lg sm:text-xl">
              <TypeWriter words={personalInfo.titles} />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-soft"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
              >
                View Projects
                <HiArrowRight size={15} aria-hidden="true" />
              </button>
              <a href={personalInfo.resumeUrl} download className="btn">
                <FaDownload size={13} aria-hidden="true" />
                Résumé
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaLinkedinIn size={14} aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div variants={item}>
            <div className="card overflow-hidden">
              <div className="relative aspect-4/5 w-full bg-surface-sunken">
                <Image
                  src={personalInfo.photo}
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="flex items-center justify-between border-t border-line/60 px-4 py-3">
                <span className="label">Open to Opportunities</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              </div>

              <div className="grid grid-cols-3 divide-x divide-line/60 border-t border-line/60">
                {socialLinks.map(({ platform, href }) => {
                  const Icon = socialIcons[platform];
                  const external = !href.startsWith("mailto");
                  return (
                    <a
                      key={platform}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center py-3 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                      aria-label={platform}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
