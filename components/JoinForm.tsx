"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { Icon } from "./Icon";

const interests = [
  "Enroll my child",
  "Bring it to my school",
  "Retail / brand partnership",
  "Become a mentor",
  "Something else",
];

export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const region = String(data.get("region") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`CreatorForge interest — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRegion: ${region}\nInterest: ${interest}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-ink-900 outline-none transition-colors placeholder:text-ink-700/40 focus:border-ember-400 focus:ring-2 focus:ring-ember-400/20";

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink-900/10 bg-white p-8 text-center shadow-sm">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-300/20 text-teal-500">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
          Almost there!
        </h3>
        <p className="mt-2 text-ink-700/80">
          Your email app should have opened with your message ready to send. If
          not, reach us anytime at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-ember-600"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-900/10 bg-white p-7 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink-900">
            Your name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${fieldClass}`} placeholder="Alex Rivera" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${fieldClass}`}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="region" className="text-sm font-semibold text-ink-900">
            City / region
          </label>
          <input
            id="region"
            name="region"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="Boston, MA"
          />
        </div>
        <div>
          <label htmlFor="interest" className="text-sm font-semibold text-ink-900">
            I&apos;m interested in
          </label>
          <select id="interest" name="interest" className={`mt-1.5 ${fieldClass}`} defaultValue={interests[0]}>
            {interests.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-semibold text-ink-900">
          Tell us a bit more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`mt-1.5 ${fieldClass}`}
          placeholder="Ages, interests, goals, questions — anything helps!"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-ember-500/30 transition-all hover:-translate-y-0.5 hover:bg-ember-600 sm:w-auto"
      >
        Send my interest
        <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-ink-700/60">
        We&apos;ll connect you with a territory manager for schedules and pricing.
      </p>
    </form>
  );
}
