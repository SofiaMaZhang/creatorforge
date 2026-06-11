import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { accentBar, accentChip } from "@/components/accents";
import { missions, steps } from "@/content/site";

export const metadata: Metadata = {
  title: "Missions",
  description:
    "CreatorForge missions are story-driven challenges that guide kids to build real art and technology projects — then present their solutions.",
};

const categories = [
  {
    title: "Contraptions",
    desc: "Rube Goldberg machines, soapbox racers, and wild mechanisms that bring physics to life.",
    icon: "toolbox" as const,
  },
  {
    title: "Software & Games",
    desc: "Code playable games and real websites — from pixel art to the logic behind the scenes.",
    icon: "code" as const,
  },
  {
    title: "Robotics",
    desc: "Build and program robots that sense, move, and solve problems on their own.",
    icon: "robot" as const,
  },
  {
    title: "Art & Sustainability",
    desc: "Turn recycled materials into toys, sculptures, and flying machines that help the planet.",
    icon: "palette" as const,
  },
];

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Missions"
        title={
          <>
            Story-driven challenges that turn{" "}
            <span className="text-gradient">big problems into big builds</span>
          </>
        }
        intro="Every mission begins with a playful storyline — a problem worth solving. Creators apply art and technology to design, build, and present a real solution over about eight weekly sessions."
      >
        <Button href="/join" variant="primary" size="lg" withArrow>
          Start your first mission
        </Button>
      </PageHero>

      {/* How a mission flows */}
      <Section>
        <SectionHeading
          eyebrow="The mission arc"
          title="Every mission follows the same five beats"
          intro="It's the rhythm real makers use — and it's what makes each project feel like an adventure."
          center
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} as="li">
              <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950">
                  <Icon name={step.icon as Parameters<typeof Icon>[0]["name"]} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Categories */}
      <section className="bg-paper-200/60 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Mission types"
            title="Four ways to build"
            intro="Mix art with technology across every category. With 30+ missions, there's always a new problem to crack."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 70}>
                <div className="group h-full rounded-3xl border border-ink-900/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white transition-colors group-hover:bg-ember-500">
                    <Icon name={cat.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                    {cat.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured missions */}
      <Section>
        <SectionHeading
          eyebrow="Featured missions"
          title="A taste of what's waiting"
          intro="Here are a few favorites. Each one is kid-tested, mentor-guided, and ready to build."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {missions.map((mission, i) => (
            <Reveal key={mission.title} delay={i * 80}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className={`absolute inset-x-0 top-0 h-1.5 ${accentBar[mission.accent]}`} />
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ring-1 ${accentChip[mission.accent]}`}
                >
                  {mission.category}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                  {mission.title}
                </h3>
                <p className="mt-3 rounded-2xl bg-ink-900/[0.03] p-4 text-sm italic leading-relaxed text-ink-700">
                  &ldquo;{mission.story}&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/80">
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
      </Section>

      <CTA
        title="Pick a mission. Make something real."
        subtitle="Join a small group, get your kit and mentor, and start building this week."
      />
    </>
  );
}
