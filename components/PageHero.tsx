import type { ReactNode } from "react";
import { Icon } from "./Icon";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-ember-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[110px]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur">
          <Icon name="spark" className="h-4 w-4" />
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
