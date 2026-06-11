import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { partners, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Partner with CreatorForge to bring project-based A-STEM learning to schools and weekly family engagement to retail brands.",
};

const tracks = [
  { ...partners.education, icon: "people" as const, accent: "ember" as const },
  { ...partners.retail, icon: "globe" as const, accent: "teal" as const },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Partners"
        title={
          <>
            Bring playful, project-based{" "}
            <span className="text-gradient">A-STEM</span> to your community
          </>
        }
        intro="We partner with schools, programs, and brands to transform how the next generation learns to be creative and technology-fluent — where art drives technology."
      >
        <Button href="/join" variant="primary" size="lg" withArrow>
          Become a partner
        </Button>
      </PageHero>

      {/* Impact stats */}
      <section className="border-b border-ink-900/10 bg-white py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-ember-600">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-700/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks */}
      <Section>
        <SectionHeading
          eyebrow="Two partnership tracks"
          title="Choose the path that fits your goals"
          intro="Whether you run a classroom or a brand, we have a proven program ready to plug in."
          center
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {tracks.map((track, i) => (
            <Reveal key={track.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-[2rem] border border-ink-900/10 bg-white p-8 shadow-sm">
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                    track.accent === "ember"
                      ? "bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950"
                      : "bg-gradient-to-br from-teal-400 to-teal-500 text-ink-950"
                  }`}
                >
                  <Icon name={track.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-ink-900">
                  {track.title}
                </h3>
                <p className="mt-1 font-medium text-ember-600">{track.tagline}</p>
                <p className="mt-4 leading-relaxed text-ink-700/80">
                  {track.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-ink-800">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Button href="/join" variant="ghost" withArrow>
                    Talk to our team
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mission band */}
      <section className="bg-ink-950 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="font-display text-2xl font-bold leading-relaxed sm:text-3xl">
              &ldquo;Tomorrow&apos;s builders will need to use technology
              creatively to solve complex problems. We&apos;re training them to{" "}
              <span className="text-gradient">think like artists</span> and{" "}
              <span className="text-gradient">build like engineers.</span>&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Let's build something together"
        subtitle="Tell us about your school, program, or brand and we'll design a partnership that fits."
        primaryLabel="Start the conversation"
        secondaryLabel="Learn about us"
        secondaryHref="/about"
      />
    </>
  );
}
