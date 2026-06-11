import Link from "next/link";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {site.positioning}
          </p>
          <p className="mt-6 text-sm text-white/50">
            {site.address}
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-ember-300">
              {site.email}
            </a>{" "}
            · {site.phone}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-ember-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">
            Get started
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/join"
                className="text-sm text-white/70 transition-colors hover:text-ember-300"
              >
                Join CreatorForge
              </Link>
            </li>
            <li>
              <a
                href={site.webcast.zoom}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-ember-300"
              >
                Live webcast (Zoom)
              </a>
            </li>
            <li>
              <a
                href={site.webcast.teams}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-ember-300"
              >
                Live webcast (Teams)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/40 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.motto}</p>
        </div>
      </div>
    </footer>
  );
}
