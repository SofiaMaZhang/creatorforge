export type Accent = "ember" | "teal" | "violet" | "amber";

export const accentChip: Record<Accent, string> = {
  ember: "bg-ember-50 text-ember-700 ring-ember-500/20",
  teal: "bg-teal-300/15 text-teal-500 ring-teal-400/25",
  violet: "bg-violet-300/15 text-violet-500 ring-violet-400/25",
  amber: "bg-amber-300/20 text-amber-500 ring-amber-400/30",
};

export const accentIconBg: Record<Accent, string> = {
  ember: "bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950",
  teal: "bg-gradient-to-br from-teal-400 to-teal-500 text-ink-950",
  violet: "bg-gradient-to-br from-violet-400 to-violet-500 text-white",
  amber: "bg-gradient-to-br from-amber-400 to-ember-400 text-ink-950",
};

export const accentBar: Record<Accent, string> = {
  ember: "bg-ember-500",
  teal: "bg-teal-400",
  violet: "bg-violet-400",
  amber: "bg-amber-400",
};
