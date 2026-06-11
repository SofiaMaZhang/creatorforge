import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="CreatorForge home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-amber-400 shadow-lg shadow-ember-500/30 transition-transform group-hover:-rotate-6">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-ink-950"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2 4 7v6c0 4 3.5 7 8 9 4.5-2 8-5 8-9V7l-8-5Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        Creator<span className="text-ember-500">Forge</span>
      </span>
    </Link>
  );
}
