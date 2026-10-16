"use client";

import type { CSSProperties } from "react";

import { trackEvent } from "@/lib/services/analytics-service";
import { cn } from "@/lib/utils/cn";

type CvLinkProps = {
  className?: string;
  label?: string;
  source?: string;
  style?: CSSProperties;
};

export function CvLink({
  className,
  label = "Download CV",
  source = "global_cta",
  style,
}: CvLinkProps) {
  return (
    <a
      href="/api/cv"
      download
      onClick={() => trackEvent("cv_download", { source })}
      className={cn(className)}
      style={style}
    >
      {label}
    </a>
  );
}
