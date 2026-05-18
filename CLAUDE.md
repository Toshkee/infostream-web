# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commands

```bash
npm run dev      # start dev server (user manages this — never start/stop it yourself)
npm run build    # production build
npm run lint     # ESLint check
```

No test suite yet.

---

## Next.js version note

This project may use a Next.js version with breaking changes from older releases. Before writing any Next.js-specific code (layouts, middleware, routing, params), read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices. In particular, `params` in layouts and pages is now a `Promise` and must be awaited.

---

## Architecture

### Routing and i18n

All pages live under `src/app/[lang]/` where `lang` is `eng` or `mne`. `src/proxy.ts` is the Next.js middleware — it exports a function named `proxy` (not `middleware`) plus a `config` matcher, and redirects bare paths to `/eng/…` by default. `src/app/layout.tsx` is the root shell (fonts, smooth scroll); `src/app/[lang]/layout.tsx` adds Navbar and Footer with the correct locale dictionary.

Pages: `/` (homepage), `/services`, `/technologies`, `/about`.

Path alias: `@/` maps to `src/` — use it for all imports.

### i18n pattern

All UI strings live in `src/lib/i18n/dictionaries/eng.ts` and `mne.ts`. The `Dictionary` type in `src/lib/i18n/types.ts` is the single source of truth for what keys exist. `getDictionary(locale)` returns a typed object; pages receive it as a prop and pass slices down to section components. **Both language files must be updated together whenever copy changes.**

The `Chunk` type (`string | { italic: true; text: string }`) is used for headline segments that mix normal and italic runs. `HeadlineLineData` pairs a chunk array with a Framer Motion delay.

### Client vs server components

Server components are the default. Add `"use client"` at the top of any component that uses Framer Motion, React hooks (`useRef`, `useState`, `useEffect`, `useInView`), or browser APIs. Most section components with animation are client components.

### Styling

Tailwind v4 with a custom theme defined in `src/app/globals.css` using `@theme`. Full color token set:

- Base: `bone`, `bone-soft`, `cream`, `cream-soft`, `cream-deep`, `ink`, `ink-soft`, `muted`, `line`, `line-soft`, `accent`, `accent-soft`
- Semantic: `background` (= `bone`), `foreground` (= `ink`)

Custom utilities: `display-xl`, `display-lg`, `eyebrow`, `grain`, `marquee-track`, `streak-a` through `streak-g`. Use these instead of arbitrary values wherever they fit.

Fonts: `--font-sans` = Poppins, `--font-mono` = DM Mono.

### Sections

Each page is assembled from small section components in `src/components/sections/`. Sections receive only the dictionary slice they need. Animation is Framer Motion scroll-triggered entrances only — no continuous motion except the hero streaks (`streak-a`…`streak-g`) and trust strip marquee (`marquee-track`).

---

## Company context

---

## What this project is

A brand new company website for **Infostream**, an enterprise IT company based in Montenegro. This is not a redesign of the previous site — it is a completely new product with a new visual direction, new structure, and new technology choices.

The previous site (Next.js, localhost:3000) served as a reference for content only, not for design or layout.

---

## Company

- **Name**: Infostream
- **Location**: Montenegro
- **What they do**: Custom financial software and enterprise IT solutions for governments, banks, and public institutions
- **Key clients**: Ministry of Finance, Central Bank of Montenegro, Parliament ERP, Ministry of Interior, Tax Authority, Ministry of Defense
- **Certifications**: ISO 27001, ISO 9001
- **Security partner**: Bitdefender (enterprise)
- **Experience**: 15+ years
- **Core services**:
  - Financial software development (core banking, reconciliation, reporting, compliance)
  - Registers and data systems (tax, pension, identity)
  - Enterprise security and compliance
- **Languages**: Montenegrin (`mne`) and English (`eng`) — bilingual throughout

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Deployment | Vercel |

No CMS yet — content lives in code for now.

---

## Design direction

### References

- **[raft.ai](https://raft.ai/finance)** — primary reference. Take the navbar structure, the editorial restraint, the large section headers with minimal copy, and the dark-band sections.
- **[glideapps.com](https://www.glideapps.com/)** — secondary reference. Take the trust logo strip layout, the numbered feature pillars, and the overall page rhythm (hero → trust → features → CTA).

### Navbar (modelled on Raft)

- Logo on the left
- Sparse nav links in the center — very few items, no mega-menus
- Right side: language switcher (`mne / eng`), ghost contact link, solid CTA pill ("Contact us")
- No border at rest — clean, floating feel above the page
- Lots of breathing room between items, minimal padding

### Overall aesthetic

- **Light theme by default**, dark theme available via toggle
- No stock illustrations, no cartoon graphics, no decorative icon packs
- No AI-looking layouts: avoid generic symmetrical three-column grids with icon + title + body on every section
- Typography-led — headings do the work, body copy is short and purposeful
- Real client names and real project names as social proof, never lorem ipsum or placeholders
- Asymmetric layouts where possible — not everything center-aligned
- Generous whitespace — resist the urge to fill every gap

### What to avoid

- Pastel gradient hero backgrounds
- Symmetrical feature grids that look like a SaaS template
- Cards with drop shadows everywhere
- Overuse of the accent colour
- Generic centered CTA sections
- Anything that looks like it came out of a website builder

### Tone

Clients are ministries, central banks, and national institutions. The site must feel trustworthy, precise, and serious — not startup-y or clever. This company handles systems that process real financial records for the state every day.

---

## Notes

- Ask before introducing new dependencies
- Keep components small and composable — no giant monolithic page files
- Framer Motion: subtle scroll-triggered entrance reveals only, nothing flashy
- This file is the single source of truth — append new design decisions here as the project evolves
