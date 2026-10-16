"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useRef, useState } from "react";

type PreludeSlide = {
  title: string;
  status: string;
  image: string;
  href: string;
};

const DEFAULT_SLIDES: PreludeSlide[] = [
  {
    title: "Systems",
    status: "Live Products",
    image: "/systems-preview.svg",
    href: "/systems",
  },
  {
    title: "Research",
    status: "Thinking & Models",
    image: "/research-preview.svg",
    href: "/research",
  },
  {
    title: "Vision",
    status: "Future Direction",
    image: "/vision-preview.svg",
    href: "/vision",
  },
];

type SystemPreludeSliderProps = {
  autoPlay?: boolean;
  interval?: number;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export default function SystemPreludeSlider({
  
  autoPlay = false,
  interval = 8000,
}: SystemPreludeSliderProps) {
  
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const activeSlide = DEFAULT_SLIDES[activeIndex] ?? DEFAULT_SLIDES[0];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay || reduceMotion || isMobile || !isVisible) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % DEFAULT_SLIDES.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, isMobile, isVisible, reduceMotion]);

  useEffect(() => {
  if (!isMobile) return;

  const container = scrollRef.current;
  if (!container) return;

  let isUserInteracting = false;

  const handleTouchStart = () => (isUserInteracting = true);
  const handleTouchEnd = () => (isUserInteracting = false);

  container.addEventListener("touchstart", handleTouchStart);
  container.addEventListener("touchend", handleTouchEnd);

  const interval = setInterval(() => {
    if (isUserInteracting) return;

    const nextIndex = (currentIndex + 1) % DEFAULT_SLIDES.length;
    setCurrentIndex(nextIndex);

    const cardWidth = container.clientWidth * 0.8 + 20;

    container.scrollTo({
      left: nextIndex * cardWidth,
      behavior: "smooth",
    });

  }, 3500);

  return () => {
    clearInterval(interval);
    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchend", handleTouchEnd);
  };
}, [isMobile, currentIndex]);

  const navigate = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  if (isMobile) {
    return (
      <section className="overflow-hidden py-14">
        <div className="mb-6 px-6">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-500">
          System Prelude
        </p>
      </div>

      <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6"
        >

        {DEFAULT_SLIDES.map((slide, index) => (
          <motion.div
            key={slide.title}
            className="min-w-[80%] snap-center"
            initial={{ opacity: 0.6, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <button
              type="button"
              onClick={() => navigate(slide.href)}
              className="w-full text-left"
            >
              <div className="relative h-[180px] rounded-xl overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-medium tracking-[-0.04em] text-slate-950">
                  {slide.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-1">
                  {slide.status}
                </p>
              </div>
            </button>
          </motion.div>
        ))}

      </div>
    </section>
    );
  }
  return (
    <section ref={sectionRef} className="px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-[60vh] min-h-[30rem] overflow-hidden bg-[#f7f8f5]">
          <AnimatePresence mode="wait">
            <motion.button
              key={activeSlide.title}
              type="button"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => navigate(activeSlide.href)}
              className="absolute inset-0 w-full text-left"
            >
              <Image
                src={activeSlide.image}
                alt={`${activeSlide.title} preview`}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8f5]/92 via-[#f7f8f5]/62 to-[#f7f8f5]/16" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f7f8f5]/18 to-transparent" />
            </motion.button>
          </AnimatePresence>

          <div className="relative z-10 flex h-full items-center">
            <div className="max-w-lg pl-8 pr-6 sm:pl-10 lg:pl-14">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-slate-500">
                System Prelude
              </p>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] text-slate-950 lg:text-6xl">
                {activeSlide.title}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-500">
                {activeSlide.status}
              </p>
              <p className="mt-8 max-w-md text-base leading-7 text-slate-600">
                A quick map of how this portfolio is organized before you enter the deeper project
                system below.
              </p>
            </div>

            <nav aria-label="System paths" className="ml-auto pr-8 text-right sm:pr-10 lg:pr-14">
              <ul className="space-y-5">
                {DEFAULT_SLIDES.map((slide, index) => {
                  const isActive = slide.title === activeSlide.title;

                  return (
                    <li key={slide.title}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        onClick={() => navigate(slide.href)}
                        className="group block text-right"
                      >
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          0{index + 1}
                        </span>
                        <motion.span
                          animate={{ x: isActive ? -8 : 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="mt-2 block text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.05em] text-slate-950"
                        >
                          {slide.title}
                        </motion.span>
                        <span className="mt-1 block text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                          {slide.status}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
