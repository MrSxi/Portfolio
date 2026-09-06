"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => document.body.classList.remove("scroll-locked");
  }, [mobileOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    },
    [mobileOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line/60 bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <button
            onClick={() => handleClick("#home")}
            className="serif text-lg text-ink"
            aria-label="Go to homepage"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-accent" aria-hidden="true">
              .
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md p-2 text-muted transition-colors hover:bg-accent-soft hover:text-accent sm:block"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={16} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-sm hidden sm:inline-flex"
            >
              Résumé
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="btn btn-primary btn-sm hidden whitespace-nowrap sm:inline-flex lg:hidden xl:inline-flex"
            >
              Get in Touch
            </a>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-md p-2 text-muted transition-colors hover:text-ink lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenuAlt4 size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg pt-20 lg:hidden"
          >
            <nav className="mx-auto max-w-6xl px-6 pb-10" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`block w-full border-b border-line/50 py-4 text-left text-lg transition-colors ${
                      isActive ? "text-accent" : "text-body hover:text-ink"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="mt-8 flex flex-col gap-3">
                <a href={personalInfo.resumeUrl} download className="btn">
                  Download Résumé
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
                <button onClick={() => handleClick("#contact")} className="btn btn-primary">
                  Get in Touch
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
