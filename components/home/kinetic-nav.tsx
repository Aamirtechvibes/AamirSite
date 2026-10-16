"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

const items = [
  { text: "Work", path: "#work" },
  { text: "Systems", path: "/systems" },
  { text: "Journey", path: "#journey" },
  { text: "About", path: "#about" },
  { text: "Contact", path: "#contact" },
];

type KineticItemProps = {
  text: string;
  link: string;
  interactive: boolean;
  index: number;
};

export function KineticItem({ text, link, interactive, index }: KineticItemProps) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={interactive ? { opacity: 0, y: 18 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={interactive ? { x: -8, y: -2 } : undefined}
    >
      <Link
        href={link}
        className={`
          block cursor-pointer text-right text-[clamp(1.75rem,3.2vw,3.5rem)]
          font-medium tracking-[-0.05em] transition duration-300
          ${isMobile ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]" : "text-slate-950 hover:text-blue-600"}
        `}
      >
        {text}
      </Link>
    </motion.div>
  );
}

export function KineticNav() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const interactive = !reduceMotion;

  return (
    <>
      <nav aria-label="Primary" className="hidden md:block">
        <div className="flex flex-col items-end gap-1 text-right">
          {items.map((item, index) => (
            <KineticItem
              key={item.text}
              text={item.text}
              link={item.path}
              interactive={interactive}
              index={index}
            />
          ))}
        </div>
      </nav>

      <nav aria-label="Primary" className="md:hidden">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.text}>
              <Link
                href={item.path}
                className={`
                  block text-left text-2xl font-medium tracking-[-0.05em]
                  ${isMobile ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]" : "text-slate-950"}
                `}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
