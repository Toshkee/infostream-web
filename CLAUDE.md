# CLAUDE.md — Infostream website

This file gives Claude context about the project so responses stay consistent across sessions.

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
| Framework | Next.js 14+ (App Router) |
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

## File structure (planned)

```
/app
  /[lang]              # i18n routing: mne | eng
    /page.tsx          # homepage
    /what-we-do/
    /technologies/
    /about-us/
    /contact/
/components
  /layout
    Navbar.tsx
    Footer.tsx
  /sections            # homepage sections as isolated components
  /ui                  # reusable primitives (Button, Badge, etc.)
/lib
  /i18n                # translation strings per language
/public
  /fonts
  /images
```

---

## Notes for future sessions

- New section ideas and design decisions will be appended here as the project evolves
- Ask before introducing new dependencies
- Keep components small and composable — no giant monolithic page files
- Framer Motion: subtle scroll-triggered entrance reveals only, nothing flashy
- This file will grow — treat it as the single source of truth for the project
