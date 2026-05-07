# Raha Resort — SEO Brief (External Action Items)

Companion to `SEO Checklist.md` and `Next Steps.md`. The codebase is now SEO-ready; everything below needs client input, third-party accounts, or external publishing. Group owners and unblock in priority order.

Last updated: 2026-05-07.

---

## Priority 1 — Unblock launch

### 1.1 Real reservations phone + hours
- All `tel:+97000000000` placeholders are still live across `/booking-unavailable`, `/pool`, `/events`, `/spa`.
- Need: one canonical reservations line + confirmed hours/timezone.
- Owner: client.

### 1.2 Social media URLs
- Footer `SOCIALS` array is `href="#"` for all five (Facebook, Instagram, X, LinkedIn, TikTok).
- Need: real URLs, or remove the icons we won't use.
- Owner: client.

### 1.3 Google Business Profile
- Most impactful local SEO move. Without it, "hotels in Jericho" search visibility is near-zero.
- Need: claim/verify GBP, fill out: categories ("Resort hotel", "Spa", "Restaurant"), photos, services, hours, description, Q&A.
- Owner: client + Hazem (can co-manage).
- Output: GBP URL to add to `Organization` schema's `sameAs`.

### 1.4 Google Search Console + Bing Webmaster
- Verify domain (DNS TXT preferred over HTML tag).
- Submit `https://raharesort.com/sitemap.xml` (now live, generated from `app/sitemap.ts`).
- Owner: Hazem.

### 1.5 OG share image
- `app/layout.tsx` references `/og-image.jpg` (1200×630). Doesn't exist yet.
- Need: branded share image from existing photography (hero shot + wordmark overlay).
- Owner: Hazem (design).

---

## Priority 2 — Conversion and tracking

### 2.1 GA4 + consent
- No analytics installed.
- Need: GA4 property, install via Next.js Script with `strategy="afterInteractive"`, gate on consent banner.
- Recommended events: `booking_click`, `phone_click`, `contact_submit`, `newsletter_subscribe`, `tour_inquiry`.
- Owner: Hazem.

### 2.2 Cookie consent banner
- Required for EU/UK visitors before any non-essential script fires.
- Footer "Cookie Preferences" link is dead until this exists.
- Recommended: Cookiebot, Klaro, or simple custom.
- Owner: Hazem.

### 2.3 ESP wiring (newsletter + forms)
- Six forms currently fake-submit. Until wired, exit-intent capture and footer signup do nothing.
- Recommended: Brevo (free tier, easy GDPR) or Mailchimp.
- Files: `Newsletter.tsx`, `Footer.tsx` (More column), `contact/page.tsx`, `newsletter/page.tsx`, `blog/dead-sea-guide/SidebarNewsletter.tsx`, `ExitIntentPopup.tsx`.
- Owner: client (pick ESP) + Hazem (wire it).

### 2.4 Booking engine / PMS
- `BookingStrip` posts to `/booking-unavailable`. No real availability check.
- Recommended: Cloudbeds, SiteMinder, or Mews. Pick one, get deep-link URL or embed widget.
- Owner: client.

---

## Priority 3 — Content + authority

### 3.1 Real photography in production roles
- `public/resort/library/*.jpeg` are reference shots from earlier scrape.
- Need: production photographer for hero, rooms, dining, spa, pool, exterior — minimum 30 hero-quality images.
- Owner: client.

### 3.2 Brand-true copy on About + values
- `VALUES` array currently strong but should be reviewed by ownership for voice and accuracy ("Dead Sea visibility" claim in particular).
- Owner: client.

### 3.3 Pillar content publication
- Existing: `/blog/dead-sea-guide` (good shape).
- Recommended next pillars: "Complete guide to Jericho", "Best time to visit Palestine", "What to pack for the Dead Sea".
- Each should be 2,000+ words, linked to from `/rooms` and `/spa` money pages.
- Owner: Hazem (writing) + client (review).

### 3.4 RoseyCo case study (reciprocal backlink)
- Editorial follow-link from raharesort.com to roseyco.com is now live (`/about`, in story section).
- Reverse: RoseyCo needs to publish a Raha Resort case study with a followed branded link back.
- Without it, the relationship is one-sided and doesn't pass authority.
- Owner: Hazem.

### 3.5 Directory listings (NAP parity)
- TripAdvisor, Booking.com, Expedia, Agoda, Hotels.com, Airbnb (if relevant).
- Apple Maps Connect, Bing Places.
- Palestinian tourism directory (`travelpalestine.ps`), Visit Jericho if exists.
- All must use identical Name / Address / Phone as on-site.
- Owner: client + Hazem.

### 3.6 Pitch lists
- Luxury hotel curation: Mr & Mrs Smith, Small Luxury Hotels of the World, Tablet Hotels.
- Travel press: Condé Nast Traveler, Travel + Leisure, AFAR, regional MENA outlets.
- Long-tail bloggers covering Jordan/Palestine travel.
- Owner: client (relationships) + Hazem (pitch decks).

---

## Priority 4 — Localization + accessibility

### 4.1 Multilingual launch
- Language switcher exists in footer (EN, AR, HE, FR, ES, RU, DE) but is non-functional.
- Decide: which locales actually launch? Recommended priority: AR, HE, EN only at launch.
- Strategy: subdirectory (`/ar/`, `/he/`) preferred for SEO clarity.
- Will require translation budget + RTL CSS audit.
- Owner: client (scope) + Hazem (implementation).

### 4.2 Accessibility audit
- Run axe DevTools across all pages.
- Most likely issues: color contrast on `text-white/45` legal links, focus rings on custom buttons, form labels.
- Owner: Hazem.

---

## Priority 5 — Legal and compliance

### 5.1 Real legal pages
- All exist as placeholders at `/legal/*`. Privacy Policy is most critical (GDPR + general).
- Need: legal review, especially Refund Policy and Terms (booking conditions).
- Owner: client (lawyer).

### 5.2 Schema enrichment when data arrives
- Add to `Resort` schema in `app/layout.tsx` when real data is available:
  - `telephone` (replace placeholder)
  - `sameAs` array of social URLs + GBP URL + TripAdvisor URL
  - `aggregateRating` once review system in place
  - `starRating`
- Owner: Hazem.

---

## What's already done in code (no further action needed)

- Per-page `<title>`, meta description, canonical, Open Graph, Twitter card on every public route.
- Site-wide `Resort` JSON-LD with address, geo, amenities, price range, creator.
- `BreadcrumbList` JSON-LD auto-emitted on every page that uses `PageHeader`.
- `Article` JSON-LD on `/blog/dead-sea-guide`.
- `app/sitemap.ts` generates `/sitemap.xml` covering all 24 routes.
- `app/robots.ts` allows crawl, references sitemap, disallows `/api/` and `/booking-unavailable`.
- Custom branded 404 at `app/not-found.tsx`.
- Favicon + `apple-icon` from real Raha logo (`app/icon.png`, `app/apple-icon.png`).
- Robots directives (`max-image-preview: large`) configured for Google.
- Hero LCP image has `priority`.
- Hotel `creator` field links to RoseyCo (canonical agency credit).
- Editorial follow-link from `/about` to roseyco.com.
- Footer credit to RoseyCo set to `rel="nofollow"` (avoids sitewide-link penalty).

---

## Recommended sequence

1. **Today**: client provides phone, social URLs, picks ESP + PMS.
2. **This week**: Hazem wires GA4, GSC, sitemap submission, OG image.
3. **Next week**: Hazem wires ESP + cookie banner; client claims GBP.
4. **Ongoing**: photography → directory listings → pillar content → press pitches.
