# CreatorForge Website Rebuild

Rebuild [build-it-yourself.com](https://build-it-yourself.com/) as **CreatorForge** — a modern, appealing marketing site. Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. Scope: marketing/brochure site (forms email/link out, no backend accounts).

## Brand & Design Direction
- **Name:** CreatorForge. **Tagline:** "Where young creators build, connect, and grow."
- **Positioning line:** "Every kid has a big idea waiting to be forged into reality."
- **Voice:** playful but premium; "Think like an artist, build like an engineer."
- **Visual style:** energetic "forge" theme — warm ember/orange + amber accents over deep navy/charcoal, with bright pops (teal/violet). Big rounded cards, bold display headings, soft gradients, subtle motion on scroll. Mobile-first, accessible (WCAG AA contrast).
- **Audience-aware:** fun and visual for kids; trustworthy and benefit-driven for parents.

## Information Architecture (reorganized from old site)
- **Home** `/` — hero, the 5-step journey, Missions preview, Build-It-Blocks, mentors, community/showcase, parent trust strip, CTA.
- **Missions** `/missions` — how project-based "Missions" work (storyline -> build with art + tech -> present), example mission categories (contraptions/Rube Goldberg, game & web programming, robotics).
- **For Parents** `/parents` — benefits, safety, how webcasts/workshops run, FAQ.
- **For Partners** `/partners` — Education and Retail tracks (from old `/partners/` and `/retail/`).
- **About** `/about` — story (founded 2006, MIT Media Lab roots), team/mentor network, mission.
- **Careers** `/careers` — roles from old jobs page (Content Developer, Platform Dev, Product/Operations/Regional Manager, Workshop Leader, COO->CEO).
- **Join / Contact** `/join` — sign-up interest form (mailto or Formspree-style action) + territory manager / contact info + webcast links.

## The 5-step journey (hero of the brand, from the brief)
Download playful challenges & tips -> Get the right tools & supplies -> Collaborate with specialists -> Build robots & computer/art projects -> Present solutions.

## Tech Setup
- Scaffold with `npx create-next-app@latest` (TypeScript, Tailwind, App Router, ESLint) into the existing repo at `/Users/xuyangma/CreatorForge`.
- Shared layout in `app/layout.tsx`; reusable components in `components/` (`Navbar`, `Footer`, `Hero`, `StepCard`, `FeatureSection`, `MissionCard`, `MentorCard`, `CTA`, `Section`).
- Centralize copy in a `content/` module so text is easy to edit.
- Use `next/font` for a bold display font (e.g., Sora/Outfit) + clean body font (Inter).
- Use CSS gradients, Tailwind, and lightweight scroll animation (CSS or a small lib) — no heavy dependencies.
- Placeholder imagery via gradients/SVG illustrations so it looks polished without needing external assets; real photos can be dropped in later.

## Content Mapping (old -> CreatorForge)
- Build-It-Yourself -> CreatorForge; Invention Universe -> "The Forge Showcase" (community/portfolio).
- A-STEM "art drives technology", Build-It-Blocks, mentor TA network, webcast workshops, "present your solution" — all retained and rewritten in CreatorForge voice.
- Keep practical facts: Cambridge, MA; contact email; webcast (Zoom/Teams) links on Join.

## Out of Scope (this build)
- User accounts/login, real downloads/dashboards, payments, CMS backend. Forms will email or post to a form service placeholder.

## Verification
- `npm run dev` and visually review every page at mobile + desktop widths.
- `npm run build` to confirm a clean production build; fix any lint/type errors.

## Build To-dos
1. **scaffold** — Scaffold Next.js + TypeScript + Tailwind app into the repo; configure fonts, base theme tokens (colors, gradients), and global styles.
2. **layout** — Build shared Navbar + Footer and reusable section/card components; set up `content/` module for copy.
3. **home** — Build the Home page: hero, 5-step journey, Missions preview, Build-It-Blocks, mentors, community showcase, parent trust strip, CTA.
4. **missions** — Build Missions page explaining project-based learning and example mission categories.
5. **parents** — Build For Parents page (benefits, safety, how it works, FAQ).
6. **partners** — Build For Partners page with Education and Retail tracks.
7. **about** — Build About page (story, mission, mentor network/team).
8. **careers** — Build Careers page from old jobs listings, rebranded.
9. **join** — Build Join/Contact page with interest form and contact/webcast info.
10. **polish** — Responsive polish, accessibility pass, scroll animations; run `npm run build` and fix errors.

## Reference: Source Content Extracted from Old Site
- **Core model:** project-based "Missions" (playful storyline about a social/whimsical issue -> build with art + tech -> document & present). 8-week homecasts or after-school/summer workshops, 8-12 kids per group, ages 8-18 (primary 8-13).
- **Build-It-Blocks:** library of functional modular building blocks (developed with MIT Media Lab) so kids build complex solutions quickly.
- **Mentor network:** TA-model specialists — engineering, CS, and art students from Cornell, Harvard, MIT, MassArt and other leading universities.
- **Invention Universe:** game-like community/portfolio site ("LinkedIn for kid builders").
- **Mission categories:** construction/contraptions (Rube Goldberg machines, soapbox racers), software (websites, game programming), LEGO robotics.
- **Partners — Education:** A-STEM project-based learning, transform tech education, 30+ eight-week projects, recruit/train TAs.
- **Partners — Retail:** STEAM program (MIT Constructionism), trash-into-treasure with recycled materials, weekly live family webcast sessions.
- **About:** founded 2006 by John Galinato in Cambridge near Harvard Yard; grew into a global online learning lab; served 5,000+ kids; $1.4M+ revenue.
- **Careers/Jobs:** COO->CEO, Content Developers, Operations Manager, Platform/Multimedia Developer, Product Manager, Regional Managers, Workshop Leaders.
- **Practical facts:** 269 Pearl Street, Cambridge, MA 02139; (617) 875-1960; webcasts via Zoom/Teams; territory managers in Boston, Mexico, Canada, Beijing, Texas/Japan.
