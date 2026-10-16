import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60",
    size === "lg" ? "px-6 py-3.5 text-sm" : "px-5 py-3 text-sm",
    variant === "primary" && "bg-slate-950 text-white hover:bg-blue-600",
    variant === "secondary" &&
      "border border-slate-200 bg-white/80 text-slate-900 hover:border-blue-300 hover:text-blue-600",
    variant === "ghost" && "text-slate-700 hover:text-blue-600",
    fullWidth && "w-full",
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonClasses({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
}
