"use client";

import { useSyncExternalStore } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

type Theme = "light" | "dark";

/* The <html data-theme> attribute is the source of truth — it is set by the
   inline script in the root layout before first paint. Subscribing to it keeps
   the button in sync without mirroring the value into React state. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

const getServerSnapshot = (): Theme => "light";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode) — the toggle still works for this visit.
    }
  };

  return (
    <button
      onClick={toggle}
      className={`rounded-md p-2 text-muted transition-colors hover:bg-accent-soft hover:text-accent ${className}`}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <HiOutlineSun size={18} aria-hidden="true" />
      ) : (
        <HiOutlineMoon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
