"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(totalHeight > 0 ? (current / totalHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #00f0ff, #b400ff, #ff00e5)",
          boxShadow: "0 0 10px #00f0ff88, 0 0 20px #b400ff44",
        }}
      />
    </div>
  );
}
