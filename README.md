# CreatorForge

> Where young creators build, connect, and grow.

CreatorForge is a platform for kids 8 and older to download playful challenges, get the right tools, collaborate with specialists, and build real tech and art projects — then present their solutions to the world. Every kid has a big idea waiting to be forged into reality.

This repository contains the CreatorForge marketing website — a modern rebuild and rebrand of the original Build-It-Yourself site.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- `next/font` (Sora display + Inter body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Create a production build         |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint the project with ESLint      |

## Project structure

```
app/                 App Router pages (home, missions, parents, partners, about, careers, join)
components/          Reusable UI (Navbar, Footer, Hero, cards, form, icons)
content/site.ts      Centralized copy & data — edit text here
```

## Editing content

Most copy lives in [`content/site.ts`](content/site.ts) — missions, mentors, jobs,
FAQ, partner tracks, and contact details. Update it there and the pages follow.

See [`PLAN.md`](PLAN.md) for the full design direction and content mapping.
