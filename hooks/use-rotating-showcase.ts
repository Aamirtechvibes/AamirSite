"use client";

import { useEffect, useState } from "react";

export function useRotatingShowcase(length: number, delay = 5000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((current) => {
      if (length <= 0) {
        return 0;
      }

      return current % length;
    });
  }, [length]);

  useEffect(() => {
    if (length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, length]);

  return { activeIndex, setActiveIndex };
}
