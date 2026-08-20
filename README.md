# Eloryo — Reya LP

Client: **Eloryo** · Built by OTW

Landing page for REYA, a residential development in Pervolia, Larnaca, Cyprus.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · GSAP + Lenis for scroll motion.
No CSS framework — the Reya design system's tokens live in `app/globals.css`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Layout

```
app/
  layout.tsx        fonts (next/font), metadata, JSON-LD
  page.tsx          server component -> PageShell
  globals.css       design tokens + component CSS
  fonts/            Bacley woff2, self-hosted via next/font/local
  api/inquiry/      enquiry form endpoint
components/
  PageShell.tsx     composes sections, owns enquiry-modal state
  Sections.tsx      static sections (server-rendered, zero JS)
  *.tsx             one component per interactive section
lib/content.ts      all copy and data
public/             images (webp) and video
scripts/            image optimizer
```

### Where things live

- **Copy and pricing** — `lib/content.ts`. Nothing user-facing is hard-coded in
  markup, so text changes never touch layout.
- **Colours, type, spacing** — the token block at the top of `app/globals.css`,
  inlined from the design system in `_ds/`.
- **Scroll animation** — all of it is in `components/ScrollEffects.tsx`.
  It respects `prefers-reduced-motion` and degrades to static content if the
  libraries fail to load.

## Enquiry form

`POST /api/inquiry` validates server-side, then delivers the lead. Delivery is
pluggable — copy `.env.example` to `.env.local` and set `RESEND_API_KEY` +
`INQUIRY_TO` to email it, or replace `deliver()` in the route with a CRM call.

With neither set, the endpoint logs the lead and still returns 200, so the form
works in development.

## Images

Photography is committed as WebP; Next serves AVIF/WebP at the right width per
device. To add new images, drop the originals in `public/` and run:

```bash
npm run optimize
```

That converts referenced PNG/JPGs to WebP and rewrites the paths in `lib/` and
`components/`. Source PNG/JPGs are gitignored — only the WebP output ships.

**Filenames must not contain spaces, commas or parentheses** — Next's image
optimizer rejects those URLs with a 400.

## Relationship to Claude Design

This page began as a Claude Design export and has been ported to React. **The
export workflow no longer applies**: a new export cannot be dropped in, because
the markup, state and animation are now ordinary components. Design changes are
made here, in code.

`_ds/` is retained as the design-system reference (tokens, font files). It is
not used at runtime — the tokens are inlined into `app/globals.css` and the
fonts are loaded from `app/fonts/`.

## Deployment

Vercel, `framework: "nextjs"`. Set the env vars above in the project settings if
you want the form to deliver email.
