import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { site, jobs } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CreatorForge — we're looking for funky artists, engineers, builders, and leaders who are excited by the intersection of games, art, engineering, and learning.",
};

const teamStyles: Record<string, string> = {
  Business: "bg-ember-50 text-ember-700 ring-ember-500/20",
  Technical: "bg-violet-300/15 text-violet-500 ring-violet-400/25",
  Teaching: "bg-teal-300/15 text-teal-500 ring-teal-400/25",
};

export default function CareersPage() {
  const subject = encodeURIComponent("CreatorForge — Application");

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Wanted: funky{" "}
            <span className="text-gradient">artists &amp; engineers</span> who
            like to play
          </>
        }
        intro="We're building metaverse-friendly content and platforms, and a network of university mentors who engage kids in live workshops. If games, art, engineering, and learning excite you — let's talk."
      />

      {/* Why join */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: "spark" as const,
              title: "Mission-driven",
              body: "Help train the next generation to be creative and technology-fluent.",
            },
            {
              icon: "people" as const,
              title: "Real ownership",
              body: "Direct access to founders, meaningful equity, and visibility into key decisions.",
            },
            {
              icon: "play" as const,
              title: "Playful, disciplined",
              body: "A team that's playful at heart but ships with focus and craft.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Open roles */}
      <section className="bg-paper-200/60 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Open roles"
            title="Find your spot on the crew"
            intro="Across business, technical, and teaching teams. Most roles are flexible and remote-friendly."
          />
          <div className="mt-12 space-y-4">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={i * 50}>
                <details className="group overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-sm">
                  <summary className="flex cursor-pointer flex-wrap items-center gap-3 p-6 marker:content-['']">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ring-1 ${teamStyles[job.team]}`}
                    >
                      {job.team}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {job.title}
                    </h3>
                    <span className="text-sm text-ink-700/60">{job.type}</span>
                    <span className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 transition-transform group-open:rotate-45">
                      <Icon name="spark" className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="border-t border-ink-900/10 px-6 pb-6 pt-5">
                    <p className="leading-relaxed text-ink-700/80">
                      {job.summary}
                    </p>
                    <h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-ink-700/50">
                      What you&apos;ll do
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600">
                            <Icon name="check" className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-sm text-ink-800">{r}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm">
                      <span className="font-semibold text-ink-900">
                        Compensation:{" "}
                      </span>
                      <span className="text-ink-700/80">{job.comp}</span>
                    </p>
                    <a
                      href={`mailto:${site.email}?subject=${subject}: ${encodeURIComponent(job.title)}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ember-500/30 transition-all hover:-translate-y-0.5 hover:bg-ember-600"
                    >
                      Apply for this role
                      <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900">
              Don&apos;t see the perfect role?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700/80">
              Send a short note about how your interests sync with ours. We love
              meeting builders of every kind.
            </p>
            <a
              href={`mailto:${site.email}?subject=${subject}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800"
            >
              Email {site.email}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
