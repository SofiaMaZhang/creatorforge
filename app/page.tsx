import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { accentBar, accentChip, accentIconBg } from "@/components/accents";
import {
  steps,
  missions,
  mentors,
  mentorSchools,
  buildItBlocks,
  showcase,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 5-step journey */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="From a spark of an idea to a finished build"
          intro="Every CreatorForge journey follows five playful steps — the same path real artists and engineers use to bring ideas to life."
          center
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="group relative h-full rounded-3xl border border-ink-900/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ember-500/5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950 shadow-lg shadow-ember-500/20">
                    <Icon name={iconFor(step.icon)} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-ink-900/10">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Missions preview */}
      <section className="bg-paper-200/60 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Missions"
              title="Playful challenges with a real purpose"
              intro="Each mission starts with a story — a problem worth solving — then guides creators to build a solution with art and technology."
            />
            <Button href="/missions" variant="ghost" withArrow>
              See all missions
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {missions.map((mission, i) => (
              <Reveal key={mission.title} delay={i * 80}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <span
                    className={`absolute inset-x-0 top-0 h-1.5 ${accentBar[mission.accent]}`}
                  />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ring-1 ${accentChip[mission.accent]}`}
                  >
                    {mission.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                    {mission.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                    {mission.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {mission.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink-900/5 px-2.5 py-1 text-xs font-medium text-ink-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Build-It-Blocks */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>
              <Icon name="blocks" className="h-3.5 w-3.5" />
              {buildItBlocks.title}
            </Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {buildItBlocks.subtitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700/80">
              {buildItBlocks.body}
            </p>
            <ul className="mt-7 space-y-3">
              {buildItBlocks.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-300/20 text-teal-500">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-ink-800">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-[2rem] bg-ink-900 p-8">
              <div className="bg-grid pointer-events-none absolute inset-0 rounded-[2rem] opacity-50" />
              <div className="relative grid grid-cols-3 gap-3">
                {blockTiles.map((tile, i) => (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-2xl ${tile.bg} ${tile.span ?? ""}`}
                  >
                    <Icon name={tile.icon} className="h-7 w-7" />
                  </div>
                ))}
              </div>
              <p className="relative mt-6 text-center text-sm text-white/50">
                Snap together code, mechanisms &amp; art — then build something
                no one has seen before.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mentors */}
      <section className="bg-ink-950 py-20 text-white sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Mentors"
            title="Learn live from artists and engineers who love to build"
            intro="Creators collaborate with vetted university students in art, engineering, and computer science — real role models who coach every step."
            center
            light
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor, i) => (
              <Reveal key={mentor.initials} delay={i * 80}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20">
                  <span
                    className={`mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl font-display text-xl font-extrabold ${accentIconBg[mentor.accent]}`}
                  >
                    {mentor.initials}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {mentor.field}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{mentor.school}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/40">
            Recruited and trained from{" "}
            <span className="text-white/70">{mentorSchools.join(" · ")}</span>
          </p>
        </div>
      </section>

      {/* Showcase */}
      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-ink-900/10 bg-gradient-to-br from-paper to-paper-200 p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Eyebrow>
                <Icon name="star" className="h-3.5 w-3.5" />
                {showcase.title}
              </Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                {showcase.subtitle}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-700/80">
                {showcase.body}
              </p>
              <div className="mt-7">
                <Button href="/join" variant="primary" withArrow>
                  Build your portfolio
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {showcaseCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-sm"
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accentIconBg[card.accent]}`}
                  >
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-display text-sm font-bold text-ink-900">
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs text-ink-700/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Parent trust strip */}
      <section className="border-y border-ink-900/10 bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-extrabold text-ink-900">
                Parents, this is the &ldquo;non-school&rdquo; kids ask for.
              </h2>
              <p className="mt-2 text-ink-700/80">
                Discerning parents love the lasting skills; kids love the fun,
                challenging missions. See how it fits your family.
              </p>
            </div>
            <Button href="/parents" variant="secondary" size="lg" withArrow>
              Explore for parents
            </Button>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}

function iconFor(name: string) {
  return name as Parameters<typeof Icon>[0]["name"];
}

const blockTiles: {
  icon: Parameters<typeof Icon>[0]["name"];
  bg: string;
  span?: string;
}[] = [
  { icon: "code", bg: "bg-ember-500 text-ink-950" },
  { icon: "blocks", bg: "bg-white/10 text-white" },
  { icon: "robot", bg: "bg-teal-400 text-ink-950" },
  { icon: "palette", bg: "bg-violet-400 text-white" },
  { icon: "spark", bg: "bg-amber-400 text-ink-950" },
  { icon: "toolbox", bg: "bg-white/10 text-white" },
];

const showcaseCards: {
  title: string;
  desc: string;
  icon: Parameters<typeof Icon>[0]["name"];
  accent: "ember" | "teal" | "violet" | "amber";
}[] = [
  {
    title: "Post your builds",
    desc: "Share photos, code, and demos.",
    icon: "present",
    accent: "ember",
  },
  {
    title: "Tell the story",
    desc: "Document the journey, not just the result.",
    icon: "star",
    accent: "amber",
  },
  {
    title: "Collaborate globally",
    desc: "Meet makers around the world.",
    icon: "globe",
    accent: "teal",
  },
  {
    title: "Grow a portfolio",
    desc: "Shine on future applications.",
    icon: "spark",
    accent: "violet",
  },
];
