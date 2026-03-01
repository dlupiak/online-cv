"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  end,
  suffix = "",
  label,
  duration = 1500,
}: {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.unobserve(el);

          const start = performance.now();
          function step(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="stat-item text-center">
      <div className="stat-number text-2xl sm:text-3xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
        {label}
      </div>
    </div>
  );
}
