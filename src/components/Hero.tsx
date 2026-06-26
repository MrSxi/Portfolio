"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

/* ── Animated Particles Canvas ── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ── Typewriter Effect ── */
function TypeWriter({ words }: { words: string[] }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(word.substring(0, text.length + 1));
        if (text.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(word.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWord, words]);

  return (
    <span className="neon-text" style={{ fontFamily: "var(--font-jetbrains)" }}>
      {text}
      <span className="animate-pulse text-neon-cyan">|</span>
    </span>
  );
}

/* ── Hero Section ── */
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,240,255,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,0,229,0.05)_0%,_transparent_50%)]" />
      <ParticleField />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl text-center z-10"
      >
        {/* Location Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs rounded-full border border-cyber-border bg-cyber-bg-card/50 text-text-secondary"
               style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            {personalInfo.location}
            <span className="text-text-muted mx-1">·</span>
            Open to Opportunities
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-neon-cyan/30 ring-offset-4 ring-offset-cyber-bg">
            <div className="absolute inset-0 rounded-full animate-neon-pulse z-[-1]" />
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name with Glitch */}
        <motion.div variants={itemVariants}>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] animate-glitch"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {personalInfo.name}
          </h1>
        </motion.div>

        {/* Typewriter Title */}
        <motion.div variants={itemVariants}>
          <p className="mt-4 text-xl sm:text-2xl h-10">
            <TypeWriter words={personalInfo.titles} />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={personalInfo.resumeUrl} download className="cyber-button-filled">
              <FaDownload size={14} />
              Download Resume
            </a>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cyber-button"
            >
              <FaEnvelope size={14} />
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="mt-8 flex items-center justify-center gap-4">
            {[
              { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
              { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-3 rounded-lg text-text-muted hover:text-neon-cyan hover:bg-neon-cyan/5 neon-border transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-text-muted"
        >
          <HiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
