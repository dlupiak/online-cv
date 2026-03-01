"use client";

import { useEffect, useRef, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
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

          let i = 0;
          const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
              clearInterval(interval);
              setDone(true);
            }
          }, 12);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <section className="mb-10" ref={ref}>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed min-h-[4em]">
        {displayed}
        {!done && <span className="typewriter-cursor" />}
      </p>
    </section>
  );
}
