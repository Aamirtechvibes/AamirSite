import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
};

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:28s] [--gap:1.5rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: repeat }, (_, copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "marquee-track flex min-w-max shrink-0 items-center gap-[var(--gap)] pr-[var(--gap)] will-change-transform",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
