import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { JoinForm } from "@/components/JoinForm";
import { site, territoryManagers } from "@/content/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Start building with CreatorForge. Tell us about your creator, school, or brand and a territory manager will share schedules and pricing for your area.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join CreatorForge"
        title={
          <>
            Let&apos;s forge your{" "}
            <span className="text-gradient">big idea</span> into reality
          </>
        }
        intro="Tell us a little about yourself and we'll get you to the right place — a program, a partnership, or a mentor role."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink-900">
              Get started
            </h2>
            <p className="mt-2 text-ink-700/80">
              Fill this out and we&apos;ll be in touch quickly.
            </p>
            <div className="mt-6">
              <JoinForm />
            </div>
          </div>

          <aside className="space-y-6">
            {/* Contact */}
            <div className="rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm">
              <h3 className="font-display text-lg font-bold text-ink-900">
                Contact us
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember-600">
                    <Icon name="present" className="h-4 w-4" />
                  </span>
                  <a href={`mailto:${site.email}`} className="text-ink-800 hover:text-ember-600">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember-600">
                    <Icon name="people" className="h-4 w-4" />
                  </span>
                  <span className="text-ink-800">{site.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember-600">
                    <Icon name="globe" className="h-4 w-4" />
                  </span>
                  <span className="text-ink-800">{site.address}</span>
                </li>
              </ul>
            </div>

            {/* Webcasts */}
            <div className="rounded-3xl border border-ink-900/10 bg-ink-950 p-7 text-white">
              <h3 className="font-display text-lg font-bold">Join a live webcast</h3>
              <p className="mt-2 text-sm text-white/60">
                Drop into a session and see a mission in action.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={site.webcast.zoom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Open in Zoom
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href={site.webcast.teams}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Open in Teams
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Territory managers */}
            <div className="rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm">
              <h3 className="font-display text-lg font-bold text-ink-900">
                Find your region
              </h3>
              <p className="mt-2 text-sm text-ink-700/70">
                Territory managers around the world help with schedules and
                pricing.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {territoryManagers.map((tm) => (
                  <li
                    key={tm.region}
                    className="rounded-full bg-ink-900/5 px-3 py-1.5 text-xs font-semibold text-ink-800"
                  >
                    {tm.region}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
