"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
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

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-neon-cyan/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <button
            onClick={() => handleClick("#home")}
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-text-primary">{personalInfo.name.split(" ")[0]}</span>
            <span className="neon-text">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "neon-text"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={personalInfo.resumeUrl}
              download
              className="cyber-button text-xs"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-neon-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 glass"
          >
            <nav className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleClick(link.href)}
                  className={`w-full text-center py-3 text-lg rounded-lg transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "neon-text"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="cyber-button-filled mt-4"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
