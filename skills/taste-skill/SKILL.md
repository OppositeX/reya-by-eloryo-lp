---
name: design-taste-frontend
source: https://github.com/Leonxlnx/taste-skill (skills/taste-skill/SKILL.md)
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. Read the brief, infer the design direction, ship interfaces that do not look templated.
---

# tasteskill: Anti-Slop Frontend Skill

> Landing pages, portfolios, and redesigns. Every rule is contextual — read the brief first, pull only what fits.

## 0. BRIEF INFERENCE
Before code, infer what the user wants: page kind, vibe words, reference signals, audience, existing brand assets, quiet constraints (a11y, regulated). State a one-line "Design Read" before generating. If ambiguous, ask exactly ONE clarifying question. Anti-default discipline: no AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism, infinite micro-animations, Inter + slate-900.

## 1. THE THREE DIALS
DESIGN_VARIANCE (1 symmetry - 10 chaos), MOTION_INTENSITY (1 static - 10 cinematic), VISUAL_DENSITY (1 airy - 10 packed). Baseline 8/6/4; infer from the brief:
- minimalist/calm/editorial: 5-6 / 3-4 / 2-3
- premium consumer/luxury/brand: 7-8 / 5-7 / 3-4
- playful/experimental/agency: 9-10 / 8-10 / 3-4
- trust-first/public-sector: 3-4 / 2-3 / 4-5
- redesign-preserve: match existing (+1 motion); redesign-overhaul: +2 / +2 / match

## 2. BRIEF → DESIGN SYSTEM MAP
If the brief matches a real design system (Fluent, Material, Carbon, Polaris, Atlaskit, Primer, GOV.UK, USWDS, Radix, shadcn, Bootstrap, Tailwind), use the official package — never recreate its CSS. One system per project. If the brief is an aesthetic (glassmorphism, bento, brutalism, editorial, dark tech, aurora, kinetic type), build honestly with native CSS; label approximations.

## 4. DESIGN ENGINEERING DIRECTIVES
### 4.1 Typography
- Display: tight tracking, tight leading. Body: relaxed leading, max-w 65ch.
- Inter discouraged as default (fine for neutral/Linear-style or public-sector).
- SERIF DISCIPLINE: serif only when the brand names one OR the aesthetic is genuinely editorial/luxury/heritage AND you can say why. Fraunces and Instrument Serif banned as defaults. Emphasis inside a headline = italic/bold of the SAME family, never a random serif word in a sans headline.
- Italic descenders (y g j p q) need leading >= 1.1 + bottom reserve or they clip.

### 4.2 Color
- Max 1 accent color; saturation < 80% default. No AI-purple glow. Neutral bases with one high-contrast accent.
- One palette per project; no warm/cool gray mixing. COLOR CONSISTENCY LOCK: one accent used identically across the whole page.
- Premium-consumer palette ban: beige/cream + brass/clay/oxblood + espresso is the AI default — banned UNLESS the brand explicitly names those colors (brand guidelines override).

### 4.3-4.4 Layout & Materiality
- Anti-center bias when VARIANCE > 4: split-screen, asymmetric white space. Centered OK for editorial/manifesto.
- Cards only when elevation = real hierarchy; otherwise borders/space. Tint shadows to background hue; never pure black.
- SHAPE CONSISTENCY LOCK: one corner-radius system per page.

### 4.5 Interactive States
- Implement loading (skeletons), empty, and error states. :active press = translate-y 1px or scale 0.98.
- BUTTON CONTRAST: every CTA passes WCAG AA against its background. Ghost buttons over photos need a scrim/stroke.
- CTA labels fit one line at desktop; max ~3 words. NO DUPLICATE CTA INTENT: one label per intent across the page.
- Forms: label above input, error below, no placeholder-as-label, AA contrast on everything.

### 4.7 Layout Discipline (hard rules)
- Hero fits initial viewport: headline <= 2 lines, subtext <= 20 words, CTA visible without scroll. Hero top padding <= ~6rem. Max 4 text elements in hero (eyebrow, headline, subtext, CTAs). Trust strips/logo walls go BELOW the hero.
- Nav: one line at desktop, height <= 80px.
- EYEBROW RESTRAINT: max 1 eyebrow per 3 sections.
- Split-header (big headline left + small floating paragraph right) banned as default; stack vertically.
- Zigzag alternation cap: max 2 consecutive image+text-split sections.
- Section-layout-repetition ban: a layout family appears at most once; 8 sections need >= 4 families.
- Bento: exact cell count (N items = N cells), rhythm not repetition, 2-3 cells with real visual variation.
- Mobile collapse explicit per section.

### 4.8 Images
- Real images always: image-gen tool first, then real photography/placeholders, else clearly-labeled TODO slots. No div-based fake screenshots. No hand-rolled decorative SVGs. Even minimal sites need 2-3 real images. Logo walls use real SVG logos, logos only (no category labels).

### 4.9 Content Density
- Per section: headline <= 8 words, sub <= 25 words, one visual or CTA. No data-dump tables on marketing pages; >5 items = different UI component (grid, tabs, marquee, grouped chunks).
- COPY SELF-AUDIT before ship: no broken grammar, unclear referents, or AI-cute copy. No fake-precise numbers unless real or labeled mock.

### 4.10 Quotes
Max 3 lines, real typographic quotes or none, attribution = name + role (+company).

### 4.11 Page Theme Lock
One theme for the whole page. Sections never invert light/dark mid-scroll (one deliberate color-block moment allowed if the brief calls for it).

## 5. MOTION
- Motion must be motivated: hierarchy, storytelling, feedback, or state transition — one sentence justification each.
- Marquee max one per page. Scroll-pins: start "top top". Prefer IntersectionObserver / scroll-driven animations / motion values.
- BANNED: window scroll listeners driving state per frame, rAF loops touching React state.
- Reduced motion honored for anything above MOTION_INTENSITY 3.

## 6. GUARDRAILS
Animate only transform/opacity. LCP < 2.5s, INP < 200ms, CLS < 0.1. Grain/noise only on fixed pointer-events-none overlays. Systemic z-index only.

## 9. AI TELLS (forbidden unless brief asks)
- No neon glows, pure #000/#fff, oversaturated accents, gradient text on large headers, custom cursors.
- No 3-equal-feature-cards row. No Jane Doe names, egg avatars, fake-perfect numbers, "Acme/Nexus" brands, filler verbs (Elevate/Seamless/Unleash).
- No version labels in hero (BETA, V0.6), section-number eyebrows (001 · Capabilities), pagination labels on images, rationed middle-dots, decorative status dots.
- EM-DASH BAN: zero em-dashes (—) and separator en-dashes (–) anywhere visible. Hyphen only.
- No pills/labels overlaid on photos, no fake photo credits, no version footers, no micro-meta sentences under eyebrows, no "BRAND. MOTION. SPATIAL." strips, no locale/weather strips, no scroll cues, no border-t+border-b on every list row, no filled-track progress bars as comparisons.
- No "Quietly in use at" social proof, no "Field notes"-style poetic labels, no generic "Step 1/2/3" labels.

## 11. REDESIGN PROTOCOL
Detect mode first (greenfield / preserve / overhaul; ask once if ambiguous). Audit before touching: brand tokens, IA, content blocks, patterns to preserve/retire, SEO baseline. Preserve slugs, anchors, nav labels, copy voice, a11y wins, analytics hooks. Modernisation levers in order: typography → spacing → color → motion → hero recomposition → full block replacement. Never silently change: URLs, nav labels, form field names, logo, legal copy.

## 14. PRE-FLIGHT CHECK (before shipping)
Design read declared; dials reasoned; zero em-dashes; theme lock; color lock; shape lock; CTA contrast + no wrap + no duplicate intent; serif discipline; hero fits viewport with <= 4 text elements; eyebrow count <= ceil(sections/3); no split-headers; zigzag cap; layout families >= 4; bento exact cells; real images; copy self-audit passed; motion motivated + reduced-motion wrapped; nav one line; mobile collapse explicit; loading/empty/error states; icons from a real library; no AI tells.
