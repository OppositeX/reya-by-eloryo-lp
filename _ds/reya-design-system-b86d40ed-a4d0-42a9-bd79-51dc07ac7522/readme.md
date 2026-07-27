# Reya Design System

REYA is a refined residential real-estate brand built around calm coastal living on Cyprus's Mediterranean coast. The brand tagline is **"Your Place in the Sun."** REYA sells/markets villa residences positioned as a balance of warmth, simplicity, and understated elegance — "a place to slow down, reconnect, and belong," not just a property development.

This design system supports the **REYA marketing website** (landing page), built from the brand's official guidelines.

## Sources

- `uploads/Reya-Brandbook-*.png` — full REYA Brand Guidelines PDF (OTW Design, July 2026): brand story, values, logo system, color palette, type system, brand activation mockups (business card, letterhead, social), and brand elements (pattern, stroke marks, masking).
- `uploads/Assets-25.png`, `uploads/Assets-30.svg`, `uploads/Assets-35.svg` — production logo files (horizontal lockup + standalone emblem).
- `uploads/Bacley-*.{otf,ttf,woff,woff2}` — the brand's licensed display typeface, all 7 weights.
- No codebase, Figma file, or existing component library was provided — components below were authored from scratch, sized to a typical marketing landing page, per the brand guidelines' visual system.

## Content Fundamentals

- **Voice**: warm, unhurried, confident without being salesy. Short declarative sentences with the occasional longer, breathing one ("A place to slow down, reconnect, and belong").
- **Person**: mostly third-person about the brand ("REYA is...", "REYA offers...") in guideline copy; landing-page copy should speak directly to the visitor in second person ("your place in the sun") for headlines/CTAs.
- **Casing**: sentence case for body copy; titles set in Bacley read naturally in title case. Eyebrow labels and eyebrow subtext ("YOUR PLACE IN THE SUN") are uppercase with wide letter-spacing — reserve all-caps + wide tracking for these short label moments only.
- **Emoji**: never used.
- **Vocabulary**: "calm," "warmth," "refined," "belong," "coastal," "Mediterranean," "sea breeze." Avoid tech/startup words (leverage, seamless, game-changer) and real-estate-broker cliché (luxury, dream home, must-see).
- Example brand line: *"Inspired by natural tones, soft movement, and a Mediterranean sense of ease, REYA brings together the feeling of home with the atmosphere of a quiet getaway."*

## Visual Foundations

- **Color**: warm Mediterranean earth palette — Earth Brown `#4C382E` (primary text/dark surface), Soft Clay `#A3674B` (primary accent/CTA, terracotta), Coastal Sand `#BFAA89` and Mediterranean Beige `#CDAB7F` (warm neutrals), Dusk Teal `#4D6D6E` and Olive Grove `#869177` (secondary/tertiary accents). Background is a soft cream, never pure white. Max 1-2 background colors per page — cream for content, one saturated brand color (clay/teal/olive) for a single full-bleed section, earth brown for the footer.
- **Type**: Bacley (display serif with quirky, hand-cut letterforms) for all headlines/titles; DM Sans (Google Font) for all paragraphs and UI text. Never mix — Bacley never appears in body copy, DM Sans never carries a hero headline.
- **Spacing**: 4px base scale (4/8/12/16/24/32/48/64/96/128). Generous section padding (64–120px vertical) — the brand favors breathing room over density.
- **Backgrounds**: full-bleed sunlit lifestyle photography (villas, pools, patios) is central to the brand — never stock-generic, always warm golden-hour or soft daylight tones. A quatrefoil/Moroccan lattice pattern (`assets/patterns/quatrefoil-tile-v2.png`) is the brand's one repeating pattern, used at low opacity as a section texture, never as a loud foreground. A large outlined "S-curve" swirl (built from the emblem) appears at low opacity in page corners as a quiet brand watermark (`assets/patterns/brand-swirl-motif.png`). No gradients as a primary device (aside from the wavy color-block "ribbon" motif used in brandbook section dividers).
- **Animation**: the brandbook defines no motion system. Keep transitions subtle — 150–250ms ease-standard fades/opacity, no bounce, no dramatic movement, consistent with the calm brand tone.
- **Hover / press states**: hover darkens filled buttons slightly and tints outlined/ghost elements with a faint accent wash; press scales buttons down slightly (0.98). No color inversion, no glow.
- **Borders & shadows**: borders are thin (1px) and low-contrast (earth brown at ~16% opacity). Shadows are soft and warm-toned (earth-brown-tinted, never pure black) — used sparingly on elevated cards only; outlined/sunken card variants use no shadow at all.
- **Corner radius**: a single flat **5px** radius is used everywhere — buttons, cards, inputs, badges, images. Never fully rounded (no pill buttons except badges, which use a full pill only because they're small label chips).
- **Imagery tone**: warm, golden-hour or soft daylight, sun-drenched Mediterranean architecture — white plaster, timber beams, stone, olive trees, pools. No black-and-white, no cool-toned or moody grading, no visible grain.
- **Transparency/blur**: used only for the low-opacity watermark motifs and card image overlays; not a general UI device.
- **Layout**: centered content max-width ~1200px, generous side padding, no fixed/sticky chrome beyond the nav bar.

## Iconography

The brand guidelines define **no icon system, icon font, or SVG icon set** — brand activation mockups (Instagram UI, business card) use generic system iconography (native Instagram icons in phone mockups), not a REYA-specific icon set. No icons have been added to the component library; if a UI need arises for icons (e.g. a check-mark list), source them from a neutral CDN set (e.g. Lucide) matching a thin, minimal stroke weight, and flag the substitution. Emoji and unicode symbols are not used as icons anywhere in the brand materials.

## Fonts

**Bacley** (all 7 weights, licensed brand font, provided as OTF/TTF/WOFF/WOFF2) is used exclusively for display/title type. **DM Sans** (Google Font, per user direction) is used for all body/paragraph/UI text — loaded via Google Fonts in `tokens/fonts.css`. No substitution was needed; both fonts were available/specified directly.

## Components

Authored from scratch (no source codebase/Figma defined an inventory), sized to a landing-page's needs:

- **Button** (`components/core/`) — primary / secondary / ghost / dark variants, 3 sizes.
- **Badge** (`components/core/`) — uppercase label pill, 4 tones.
- **Card** (`components/core/`) — image + eyebrow + title + description + footer slot, 3 surface variants.
- **Input** (`components/forms/`) — labeled text field with focus ring.
- **Accordion** (`components/feedback/`) — single-open FAQ list.
- **NavBar** (`components/navigation/`) — logo/wordmark, link row, CTA button.
- **Footer** (`components/navigation/`) — dark footer with link columns and address bar.

### Intentional additions
All seven components above are additions (no source inventory existed) — chosen as the minimum set to assemble a full marketing landing page (nav, hero, feature grid, FAQ, signup form, footer).

## Templates

- `templates/landing-page/LandingPage.dc.html` — full REYA marketing landing page: nav, hero, brand-values grid, coastal-living banner, testimonial, FAQ, newsletter signup, footer.

## Index

```
styles.css                     — root stylesheet (imports all tokens)
tokens/colors.css              — brand + semantic color tokens
tokens/typography.css          — font families, sizes, weights, tracking
tokens/spacing.css             — spacing scale, radius, shadows, easing
tokens/fonts.css               — @font-face (Bacley) + DM Sans Google Font import
assets/logo/                   — emblem + horizontal lockup (SVG + PNG)
assets/fonts/                  — Bacley woff2/woff files
assets/photography/            — cropped brand lifestyle photography
assets/patterns/                — quatrefoil pattern tile + swirl watermark motif
components/core/                — Button, Badge, Card
components/forms/               — Input
components/feedback/            — Accordion
components/navigation/          — NavBar, Footer
guidelines/colors/, /type/, /spacing/, /brand/ — foundation specimen cards
templates/landing-page/         — full landing page template
thumbnail.html                  — project thumbnail
SKILL.md                        — Claude Code-portable skill file
```
