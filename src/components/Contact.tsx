"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { personalInfo, socialLinks } from "@/data/portfolio";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

// ═══════════════════════════════════════════════════════════
// HOW TO SET UP DIRECT EMAIL (Web3Forms — free, no backend):
//
// 1. Go to https://web3forms.com
// 2. Enter your email: amirbeshir78@gmail.com
// 3. You'll receive an access key via email
// 4. Replace the ACCESS_KEY below with your key
// ═══════════════════════════════════════════════════════════
const WEB3FORMS_ACCESS_KEY = "680b07f1-e073-4e33-97ef-aaea82b1612c"; // ← Replace with your Web3Forms key

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope,
} as const;

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

  const details = [
    { icon: FaEnvelope, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FaLinkedinIn, text: "linkedin.com/in/amirbeshir", href: personalInfo.linkedin },
    { icon: FaMapMarkerAlt, text: personalInfo.location },
  ];

  return (
    <section id="contact" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Contact" subtitle="Let's Connect" index="09" />

        <div ref={ref} className="grid gap-10 md:grid-cols-5 md:gap-12">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="md:col-span-2"
          >
            <p className="text-[0.9375rem] leading-relaxed text-soft">
              I&apos;m currently seeking entry-level opportunities in software engineering and
              cybersecurity. Feel free to reach out — I&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {details.map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={13} className="shrink-0 text-muted" aria-hidden="true" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-body transition-colors hover:text-accent"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-body">{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              {socialLinks.map(({ platform, href }) => {
                const Icon = socialIcons[platform];
                const external = !href.startsWith("mailto");
                return (
                  <a
                    key={platform}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="rounded-md border border-line/70 p-2.5 text-muted transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                    aria-label={platform}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="card space-y-4 p-6 sm:p-7"
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="label mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="label mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="label mb-1.5 block">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="field"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="label mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="field resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={13} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div
                  className="flex items-center gap-2 rounded-md border border-line/60 bg-surface px-3 py-2.5 text-sm text-body"
                  role="status"
                >
                  <FaCheckCircle size={13} className="text-accent" aria-hidden="true" />
                  {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div
                  className="flex items-center gap-2 rounded-md border border-line/60 bg-surface px-3 py-2.5 text-sm text-body"
                  role="alert"
                >
                  <FaExclamationCircle size={13} className="text-accent" aria-hidden="true" />
                  {statusMessage}
                </div>
              )}

              <p className="label pt-1">Your message will be sent directly to my inbox.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
