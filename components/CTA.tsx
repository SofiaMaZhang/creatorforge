import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CTA({
  title = "Ready to forge a big idea?",
  subtitle = "Join a small group, meet your mentors, and start your first mission. Every kid has something amazing waiting to be built.",
  primaryLabel = "Start building",
  primaryHref = "/join",
  secondaryLabel = "Explore missions",
  secondaryHref = "/missions",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-16 text-center sm:px-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-ember-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryHref} variant="primary" size="lg" withArrow>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="light" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
