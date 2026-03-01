"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      el!.style.left = `${e.clientX}px`;
      el!.style.top = `${e.clientY}px`;
      el!.style.opacity = document.documentElement.classList.contains("dark") ? "1" : "0";
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={glowRef} className="cursor-glow" style={{ opacity: 0 }} />;
}
