import { Button } from "./Button";
import { Icon } from "./Icon";
import { site, stats } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-ember-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -left-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/15 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur">
            <Icon name="spark" className="h-4 w-4" />
            Art + Technology for kids 8 and up
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Where young creators{" "}
            <span className="text-gradient">build, connect, and grow.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {site.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/join" variant="primary" size="lg" withArrow>
              Start building
            </Button>
            <Button href="/missions" variant="light" size="lg">
              Explore missions
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-white/50">
            <Icon name="shield" className="h-4 w-4 text-teal-300" />
            Live, mentor-led, small groups — guided by students from MIT, Cornell &amp; more.
          </p>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
                This week&apos;s mission
              </span>
              <span className="rounded-full bg-ember-500/20 px-3 py-1 text-xs font-semibold text-ember-300">
                Robotics
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold">
              Robot to the Rescue
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Engineer a robot that senses, moves, and sets things right — then
              present it to the world.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { label: "Story unlocked", icon: "check" as const },
                { label: "Build-It-Blocks added", icon: "blocks" as const },
                { label: "Mentor session booked", icon: "people" as const },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-ember-500 to-amber-400 text-ink-950">
                    <Icon name={row.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {row.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-float absolute -left-4 -top-5 hidden rounded-2xl bg-amber-400 px-4 py-3 text-ink-950 shadow-xl sm:block">
            <p className="font-display text-xl font-extrabold leading-none">5,000+</p>
            <p className="text-xs font-semibold">creators worldwide</p>
          </div>
          <div className="animate-float-slow absolute -bottom-6 -right-3 hidden rounded-2xl bg-teal-400 px-4 py-3 text-ink-950 shadow-xl sm:block">
            <p className="font-display text-xl font-extrabold leading-none">30+</p>
            <p className="text-xs font-semibold">playful missions</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-7 text-center sm:py-8">
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-white/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
