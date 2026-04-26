"use client";

import { useEffect, useRef, useState } from "react";

export type TypewriterLine = {
  text: string;
  /** characters per second */
  speed?: number;
  /** delay before this line starts, ms */
  delay?: number;
  /** css color class for the line */
  className?: string;
  /** prompt prefix (e.g. "$ ") rendered instantly without typing */
  prompt?: string;
};

export function useTypewriter(lines: TypewriterLine[], startDelay = 200) {
  const [rendered, setRendered] = useState<string[]>(() => lines.map(() => ""));
  const [activeIndex, setActiveIndex] = useState(0);
  const [done, setDone] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    let cumulative = startDelay;
    timeouts.current.push(
      setTimeout(() => {
        setRendered(lines.map(() => ""));
        setActiveIndex(0);
        setDone(false);
      }, 0),
    );

    lines.forEach((line, lineIdx) => {
      const speed = line.speed ?? 55;
      const charDelay = 1000 / speed;
      cumulative += line.delay ?? 0;

      const lineStart = cumulative;
      timeouts.current.push(
        setTimeout(() => setActiveIndex(lineIdx), lineStart),
      );

      for (let i = 1; i <= line.text.length; i++) {
        const t = setTimeout(() => {
          setRendered((prev) => {
            const next = [...prev];
            next[lineIdx] = line.text.slice(0, i);
            return next;
          });
        }, lineStart + i * charDelay);
        timeouts.current.push(t);
      }

      cumulative = lineStart + line.text.length * charDelay + 120;

      if (lineIdx === lines.length - 1) {
        timeouts.current.push(setTimeout(() => setDone(true), cumulative));
      }
    });

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [lines, startDelay]);

  return { rendered, activeIndex, done };
}
