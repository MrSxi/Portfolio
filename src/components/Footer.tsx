"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const pageLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope,
} as const;

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <button
              onClick={() => handleNavClick("#home")}
              className="serif text-lg text-ink"
              aria-label="Go to homepage"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent" aria-hidden="true">
                .
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-soft">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="label mb-5">Pages</h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {pageLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-sm text-soft transition-colors hover:text-accent"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="label mb-5">Connect</h3>
            <nav className="space-y-3" aria-label="Social links">
              {socialLinks.map(({ platform, href }) => {
                const Icon = socialIcons[platform];
                const external = !href.startsWith("mailto");
                return (
                  <a
                    key={platform}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-sm text-soft transition-colors hover:text-accent"
                  >
                    <Icon size={13} aria-hidden="true" />
                    {platform}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row">
          <p className="label">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="label">Designed &amp; built by {personalInfo.name}</p>
        </div>
      </div>
    </footer>
  );
}
