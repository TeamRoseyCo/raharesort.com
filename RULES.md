# Raha Resort Web — Standing Rules

Living document. Every rule the user has stated for this site lives here. Append, don't overwrite. Reference this before making styling/copy decisions.

## Copy & content

- **Never use em dashes.** Anywhere. Use commas, periods, or rephrase. Applies to UI copy, code comments, generated artifacts, even meta tags.
- **Banned phrases.** Do not use any of these in any copy:
  - "unmatched comfort and timeless hospitality"
  - "timeless hospitality" (anywhere, on its own)
  - "unmatched" (any usage)
  - "Where natural beauty meets modern comfort. Experience breathtaking views and timeless hospitality."
- **Approved replacement phrasing.**
  - Tagline: "An oasis in Jericho, the place where you feel premium in."
  - Welcome closer: "Raha welcomes you warmly."
  - Hero subline: "All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome."
- **Filename convention.** Spaces between words, Title Case, no hyphens, no underscores. (Niels B Roll folder is a documented exception.)

## Typography

- **Headings.** Goudy Old Style via `--font-heading`. Use `h1`/`.t-display` (hero), `h2`/`.t-section` (section title), `h3`/`.t-sub`, `h4`/`.t-card`. See `TYPOGRAPHY.md` for full scale.
- **Body.** Montserrat via `--font-sans`. Default `p` and `.t-body` are 1rem / 1.75. Use `.t-lead` for prominent intros, `.t-body-sm` for dense info.
- **Eyebrow.** `.t-eyebrow` (alias `.section-subtitle`) — small uppercase, tracked, primary-dark color.
- **Caption / micro labels.** `.t-caption` — 0.72rem, uppercase, 0.18em tracking.
- **Italic flourish.** Goudy italic via `.t-italic` (used for footer column titles like *Navigation*, *About*, *More*).
- **Universal type system.** Headings → Playfair Display (`--font-heading`). Body → Montserrat (`--font-sans`). Header menu items use Montserrat. All body sizes are 16px (1rem). No third UI font in production code (Inter is loaded but not applied).
- **Eyebrows are gold.** `.section-subtitle` and `.t-eyebrow` both render in `--color-accent` site-wide.
- **Title divider is gold.** `.title-divider` (and the `on-dark` variant) both use `--color-accent`.

## Layout & spacing

- **Page margins.** `container-xl` provides `padding-inline: clamp(20px, 10vw, 200px)`. (Tried 1/6 = 16.67vw, dialed back per user.) All sections use `container-xl` for uniform side gutters.
- **Footer alignment.**
  - Logo + wordmark + Book Now: centered.
  - Three columns (Navigation / About / More): centered, max-width 860px, tight column gap.
  - Column titles: italic Goudy, ~2.1rem, large `mb-12` gap before menu items.
  - Social icons: bare vectors, no bubble backgrounds, centered above the legal divider line.
  - Legal links: centered, dot-separated.
  - Copyright/RoseyCo line: same font size as legal links (0.85rem), very transparent (white/25), aligned to the LEFT edge of the centered legal block (sits under the leftmost legal item, not under the page edge).
  - **RoseyCo always underlined.**
  - **Legal links underline on hover** (no static underline; appears on hover for affordance).
  - **Social icons grow on hover** (scale ~1.25x, smooth transition).
  - Footer column titles → menu items: large vertical gap (`mb-20`).
  - Each footer column: outer block centered in its grid cell, inner content `text-left` so title and items share the same left edge.

## Section flourish (lead-style sections)

- Use the brand logo (`/raha-logo.png`) as the small flourish above section content (QuickNav style).
- Standard size: **64px wide** (1.6x the original 40px), centered, opacity 0.95.
- Implemented as `.section-flourish-logo` class in `globals.css`. Use this class on any future lead-style flourish.

## Hover & motion

- **Universal interactive hover.** Every `<a>`, `<button>`, `<select>`, `<summary>`, `[role="button"]`, and `[data-interactive]` gets a 250ms cubic-bezier transition (color, bg, border, opacity, transform, shadow, text-decoration, filter). Standardized in `globals.css`. Component-level motion (e.g. framer-motion `whileHover`) layers on top.
- **Links (`<a>`):** subtle hover lift (`translateY(-1px)`) + opacity 0.78.
- **Buttons (`<button>`, `[role="button"]`):** lift (`translateY(-2px)`) + brightness 1.05 on hover. Disabled or `aria-disabled` skips the effect. Active state resets.
- **Reduced motion** (`prefers-reduced-motion: reduce`) disables transform/filter hover effects automatically.
- **Header wordmark "Raha Resort"** transitions size via `transform: scale()` (not `font-size`) for buttery smoothness when scrolling.

## Hero

- Inner content block has `marginTop: 12vh` so the logo and welcome text sit lower than dead-center.
- Subtle 180px black gradient band beneath the header for nav contrast.

## Section header standard

Every section gets the SAME 4-part header:
1. Eyebrow (`<span class="section-subtitle">` or `t-eyebrow` — small uppercase pre-title)
2. Main heading (`<h2>`)
3. Title divider (`<div class="title-divider center">` — short gold line)
4. Body / description paragraph

Use the shared `SectionHead` component (`app/components/ContentSection.tsx`) where possible. For sections with bespoke layouts (Hero, Testimonial, Cta), still hand-build the same four-part block. Confirmed applied: Welcome, Rooms (Accommodations), Amenities, Gallery, Newsletter, Cta, Testimonial, Rooms-page lead.

## Dark mode

- Toggle via `DarkModeToggle` in the Header. Sets `html[data-scheme="dark"]` and persists in `localStorage` under `raha-color-scheme`. Initial value defers to `prefers-color-scheme`.
- Dark mode flips `theme-light` and `theme-cream` sections. Section themes (`theme-dark`, `theme-slate`, `theme-primary`) are already dark-friendly so they pass through.

## CTA band ("Stay With Us in Jericho")

- Color: **dark chrome blue**, NOT brown. Gradient `rgba(18,28,42,0.92)` to `rgba(10,18,30,0.96)`.
- Headline: avoid clichés like "unforgettable experience". Current copy: "Stay With Us in Jericho".
- Padding ~5.5rem 0 (medium-tall), h2-scale headline.

## Color & contrast

- **Header on light sections** uses dark fg (`#1a1410`) with semi-opaque white/cream background. Must read clearly over light photography or off-white sections.
- **Header on dark sections** uses white fg, semi-opaque dark background.

## Hero

- A subtle black gradient band (180px) sits beneath the header for nav contrast against the photo.

## Navigation / Header

- Layout: logo `|` divider `|` (RAHA RESORT wordmark stacked over nav row).
- Nav links: Helvetica, underlined for non-active items, accent color (no underline) for the active route.

## Imagery

- Use photos from `Reference Photos/` (now wired via `public/resort/library/` and `app/lib/photos.ts > PHOTO_LIB`).
- Do not use placeholder iconography (e.g. lucide leaf flourish) where the brand logo can be used. Use `/raha-logo.png` for flourishes.

## Behavior

- **Booking form** routes to `/booking-unavailable` (a "call reservations" placeholder) until a real booking engine is integrated. See `PLACEHOLDERS.md`.
- **Accommodation scroll lock**: keep it short enough (32vh per room) that a single quick flick of the trackpad/wheel scrolls past the entire pinned section. No explicit skip button — the bypass comes from short total height + native scroll momentum.

## Process

- **Maintain `RULES.md`.** Every time the user states a new rule, append it here.
- **Maintain `PLACEHOLDERS.md`.** Every fake / TBD value gets logged with its file path.
- **No em dash policy applies to these docs too.**

---

Last updated: 2026-05-06
