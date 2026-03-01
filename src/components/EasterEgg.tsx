"use client";

import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === KONAMI[pos]) {
        const next = pos + 1;
        if (next === KONAMI.length) {
          setActive(true);
          setPos(0);
          setTimeout(() => setActive(false), 4000);
        } else {
          setPos(next);
        }
      } else {
        setPos(0);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pos]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center">
      <div className="easter-egg-active text-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-indigo-200 dark:border-indigo-800 max-w-sm mx-4">
        <div className="text-5xl mb-3">🎮</div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          Achievement Unlocked!
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          You found the Konami code easter egg.
        </p>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-2 font-medium">
          +100 respect points 🎯
        </p>
      </div>
    </div>
  );
}
