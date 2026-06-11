import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CTA } from "@/components/CTA";
import { about, mentorSchools, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CreatorForge grew from a small Cambridge studio into a global learning lab — built on MIT Media Lab research — that blends art and engineering for kids worldwide.",
};

const pillarIcons = ["spark", "people", "play", "star"] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Artists and engineers{" "}
            <span className="text-gradient">who love to play</span>
          </>
        }
        intro="What began as a small storefront near Harvard Yard has grown into a global learning lab — helping kids everywhere build the future, one mission at a time."
      />

      {/* Story timeline */}
      <Section>
        <SectionHeading
          eyebrow="Our story"
          title="From a Cambridge storefront to a global lab"
        />
        <div className="mt-12 space-y-5">
          {about.story.map((chapter, i) => (
            <Reveal key={chapter.heading} delay={i * 90}>
              <div className="grid gap-4 rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-400 font-display text-lg font-extrabold text-ink-950">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {chapter.heading}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-700/80">
                    {chapter.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats band */}
      <section className="bg-ink-950 py-16 text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-extrabold sm:text-4xl">
                <span className="text-gradient">{stat.value}</span>
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-paper-200/60 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we built"
            title="Four pillars behind every mission"
            center
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-6 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white">
                    <Icon name={pillarIcons[i]} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor network */}
      <Section>
        <div className="grid gap-10 rounded-[2.5rem] border border-ink-900/10 bg-white p-8 shadow-sm sm:p-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ember-700">
              <Icon name="people" className="h-4 w-4" />
              Our mentor network
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              College role models, trained to coach
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700/80">
              We recruit standout art, engineering, and computer science students
              and train them in the CreatorForge way of thinking. It&apos;s the
              college teaching-assistant model, reimagined for young creators —
              positive, problem-solving, lifelong-learner role models.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {mentorSchools.map((school) => (
              <span
                key={school}
                className="rounded-2xl border border-ink-900/10 bg-paper px-5 py-3 font-display font-bold text-ink-900"
              >
                {school}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        title="Help us forge the next generation"
        subtitle="Whether you're a family, a school, or a future mentor — there's a place for you here."
        primaryLabel="Join CreatorForge"
        secondaryLabel="See open roles"
        secondaryHref="/careers"
      />
    </>
  );
}
