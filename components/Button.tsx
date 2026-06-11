import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember-400";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ember-500 text-white shadow-lg shadow-ember-500/30 hover:bg-ember-600 hover:-translate-y-0.5",
  secondary:
    "bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5",
  light:
    "bg-white text-ink-900 shadow-lg shadow-black/10 hover:-translate-y-0.5",
  ghost:
    "border border-ink-900/15 text-ink-800 hover:border-ember-400 hover:text-ember-600",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  withArrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <Icon name="arrow" className="h-4 w-4" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
