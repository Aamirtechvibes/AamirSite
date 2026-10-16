"use client";

import { useEffect, useState } from "react";

export function useScrollFade(distance = 400) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let frame = 0;

    const updateOpacity = () => {
      frame = 0;

      const scrollY = window.scrollY;
      const fade = Math.max(1 - scrollY / distance, 0);

      setOpacity((current) => (Math.abs(current - fade) < 0.01 ? current : fade));
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateOpacity);
    };

    updateOpacity();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [distance]);

  return opacity;
}
