import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { parents } from "@/content/site";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "CreatorForge complements school with hands-on, mentor-led projects that build lasting skills — and real joy — for kids ages 8 and up.",
};

const benefitIcons = ["spark", "people", "star", "present"] as const;

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Parents"
        title={
          <>
            Confident, capable,{" "}
            <span className="text-gradient">creative kids</span>
          </>
        }
        intro={parents.hero.subtitle}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/join" variant="primary" size="lg" withArrow>
            Find a program
          </Button>
          <Button href="/missions" variant="light" size="lg">
            See the missions
          </Button>
        </div>
      </PageHero>

      {/* Benefits */}
      <Section>
        <SectionHeading
          eyebrow="Why parents choose us"
          title="Skills for school, and for life"
          intro="CreatorForge blends art and technology with the soft skills kids need most — teamwork, problem-solving, and presenting with confidence."
          center
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {parents.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div className="flex h-full gap-5 rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950">
                  <Icon name={benefitIcons[i]} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                    {benefit.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <section className="bg-paper-200/60 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Two flexible ways to take part"
            intro="Small groups of 8–12 creators, led live by a CreatorForge specialist."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {parents.how.map((option, i) => (
              <Reveal key={option.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-8 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white">
                    <Icon name={i === 0 ? "play" : "people"} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                    {option.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-700/80">
                    {option.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <Section>
        <div className="grid gap-10 rounded-[2.5rem] border border-ink-900/10 bg-ink-950 p-8 text-white sm:p-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300">
              <Icon name="shield" className="h-4 w-4" />
              Safe by design
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              A space where kids can be bold
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Every session is live, supervised, and kept small — so creators
              get attention and stay safe.
            </p>
          </div>
          <ul className="space-y-3">
            {parents.safety.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400 text-ink-950">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions parents ask"
            center
          />
          <div className="mt-12 divide-y divide-ink-900/10">
            {parents.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-ink-900 marker:content-['']">
                  {item.q}
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600 transition-transform group-open:rotate-45">
                    <Icon name="spark" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-700/80">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Give your creator a head start"
        subtitle="Tell us about your child and a territory manager will share schedules and pricing for your area."
        primaryLabel="Get started"
        secondaryLabel="Read our story"
        secondaryHref="/about"
      />
    </>
  );
}
