"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

// ═══════════════════════════════════════════════════════════
// HOW TO SET UP DIRECT EMAIL (Web3Forms — free, no backend):
//
// 1. Go to https://web3forms.com
// 2. Enter your email: amirbeshir78@gmail.com
// 3. You'll receive an access key via email
// 4. Replace the ACCESS_KEY below with your key
// ═══════════════════════════════════════════════════════════
const WEB3FORMS_ACCESS_KEY = "cd569882-1249-4403-90e4-4d7a06e0c317"; // ← Replace with your Web3Forms key

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send. Please try emailing me directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Contact" subtitle="Let's Connect" />

        <div ref={ref} className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3
                className="text-sm font-bold tracking-wider uppercase text-text-primary mb-6"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Get in Touch
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                I&apos;m currently seeking entry-level opportunities in software engineering and data science.
                Feel free to reach out — I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                {[
                  { icon: FaEnvelope, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: FaPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: FaMapMarkerAlt, text: personalInfo.location },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
                      <Icon size={14} className="text-neon-cyan" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm text-text-secondary">{text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
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
                    className="p-3 rounded-lg text-text-muted hover:text-neon-cyan neon-border transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-muted block mb-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="cyber-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-muted block mb-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="cyber-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-text-muted block mb-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="cyber-input"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-xs text-text-muted block mb-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="cyber-input resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="cyber-button-filled w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-neon-green p-3 rounded-lg bg-neon-green/10 border border-neon-green/20"
                >
                  <FaCheckCircle size={14} />
                  {statusMessage}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-neon-magenta p-3 rounded-lg bg-neon-magenta/10 border border-neon-magenta/20"
                >
                  <FaExclamationCircle size={14} />
                  {statusMessage}
                </motion.div>
              )}

              <p className="text-[0.65rem] text-text-muted text-center" style={{ fontFamily: "var(--font-jetbrains)" }}>
                Your message will be sent directly to my inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
