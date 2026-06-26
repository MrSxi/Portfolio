"use client";

import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const pageLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  { icon: FaGithub, label: "GitHub", href: personalInfo.github },
  { icon: FaLinkedinIn, label: "LinkedIn", href: personalInfo.linkedin },
  { icon: FaEnvelope, label: "Email", href: `mailto:${personalInfo.email}` },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-cyber-border bg-cyber-bg-light/50">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <button
              onClick={() => handleNavClick("#home")}
              className="text-lg font-bold tracking-tight mb-4 block"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <span className="text-text-primary">{personalInfo.name.split(" ")[0]}</span>
              <span className="neon-text">.</span>
            </button>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Pages Column */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Pages
            </h3>
            <nav className="space-y-3">
              {pageLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-sm text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Connect
            </h3>
            <nav className="space-y-3">
              {connectLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-cyber-border">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted" style={{ fontFamily: "var(--font-jetbrains)" }}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted" style={{ fontFamily: "var(--font-jetbrains)" }}>
            Designed & built by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
