# Raha Resort — SEO Checklist

Living checklist. Tick as completed. Last updated: 2026-05-07.

## 1. Technical foundation

- [ ] HTTPS enforced sitewide (HSTS header)
- [ ] `www` vs apex decision made, 301 redirects for the other
- [ ] Trailing-slash policy consistent (Next.js default: no trailing slash)
- [ ] No mixed content (all assets HTTPS)
- [ ] `robots.txt` present at `/robots.txt`, allows crawling, references sitemap
- [ ] `sitemap.xml` generated and submitted to Google + Bing
- [ ] Each page returns correct HTTP status (200 / 301 / 404 / 410)
- [ ] Custom branded 404 page (currently uses default)
- [ ] No soft 404s (empty pages returning 200)
- [ ] Canonical tags on every page (self-referencing, absolute URL)
- [ ] No duplicate content from query parameters (use canonical or `noindex`)
- [ ] No `noindex` on production pages by accident
- [ ] No `disallow: /` in robots.txt on production
- [ ] XML sitemap split if >50,000 URLs (not an issue at current scale)
- [ ] `hreflang` tags if multilingual launches (EN / AR / HE)

## 2. Core Web Vitals + performance

- [ ] LCP < 2.5s on mobile (hero image is the LCP element — preload it)
- [ ] CLS < 0.1 (reserve dimensions on every image / video)
- [ ] INP < 200ms (defer heavy JS, audit Lenis/Framer cost)
- [ ] Hero image has `fetchpriority="high"` and `priority` on `<Image>`
- [ ] Below-the-fold images use `loading="lazy"`
- [ ] All photos served as WebP or AVIF (already mostly WebP)
- [ ] Images sized correctly per breakpoint (Next `sizes` attribute audit)
- [ ] Fonts: `display: swap` + preload critical font weights
- [ ] Reduce blocking JS (Framer Motion + Lenis are heavy — measure)
- [ ] Use `next/dynamic` with `ssr: false` for non-critical interactive components
- [ ] CSS minified and purged of unused selectors (Tailwind handles)
- [ ] Lighthouse mobile score ≥ 90 across all four categories
- [ ] PageSpeed Insights field data passing on mobile + desktop
- [ ] Server response (TTFB) < 600ms — Vercel edge / region near MENA

## 3. On-page SEO (per page)

- [ ] One unique `<h1>` per page that includes target keyword naturally
- [ ] Logical heading hierarchy (`h1` → `h2` → `h3`, no skipping)
- [ ] Title tag 50–60 chars, brand suffix, target keyword first
- [ ] Meta description 140–160 chars, includes CTA + benefit
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter card tags (`summary_large_image`)
- [ ] Canonical URL set
- [ ] Image `alt` text descriptive (not "image1.jpg", not empty unless decorative)
- [ ] Internal links use descriptive anchor text (no "click here")
- [ ] No orphan pages — every page reachable from home in ≤ 3 clicks
- [ ] No `href="#"` placeholder links on production (audit Footer LEGAL + SOCIALS)
- [ ] URL slugs short, lowercase, hyphenated, keyword-bearing
- [ ] Breadcrumbs visible on inner pages with schema

## 4. Per-page targets

| Page | Primary keyword | Notes |
|---|---|---|
| `/` | luxury resort Jericho | brand + geo |
| `/rooms` | Jericho hotel rooms | include rate range when ready |
| `/dining` | Jericho restaurant | mention cuisine type |
| `/spa` | Jericho spa, Dead Sea spa | proximity hook |
| `/pool` | resort pool Jericho | seasonal angle |
| `/services` | Jericho experiences, Dead Sea tours | |
| `/tours` | Dead Sea tours, Jericho tours | |
| `/about` | about Raha Resort | brand-led |
| `/contact` | contact Raha Resort | NAP block |
| `/blog/dead-sea-guide` | Dead Sea guide from Jericho | pillar piece |

- [ ] Each page has unique title + meta description
- [ ] No two pages targeting the same keyword (cannibalization audit)

## 5. Structured data (JSON-LD)

- [ ] `Hotel` schema on home (already added with `creator` field)
- [ ] `LodgingBusiness` or `Resort` subtype where appropriate
- [ ] `address`, `geo` (lat/lng), `telephone`, `priceRange`, `starRating`
- [ ] `image` array with absolute URLs
- [ ] `aggregateRating` once review system exists
- [ ] `Review` schema on testimonials when added
- [ ] `BreadcrumbList` on inner pages
- [ ] `FAQPage` on relevant pages (rooms FAQ, spa FAQ)
- [ ] `Article` schema on blog posts with author, datePublished, dateModified
- [ ] `Organization` schema with `sameAs` (social URLs once provided)
- [ ] Validate all schema with Schema.org validator + Google Rich Results Test

## 6. Local SEO

- [ ] Google Business Profile created and verified
- [ ] GBP categories: "Resort hotel" primary, "Spa", "Restaurant"
- [ ] GBP photos uploaded (exterior, rooms, pool, food)
- [ ] GBP services + amenities populated
- [ ] GBP Q&A seeded with common questions
- [ ] NAP (Name, Address, Phone) consistent across site + GBP + directories
- [ ] NAP block in footer with `itemtype="schema.org/PostalAddress"`
- [ ] Embed Google Map on `/contact` and `/location`
- [ ] Listed on TripAdvisor, Booking.com, Expedia, Agoda, Hotels.com (parity)
- [ ] Listed on Apple Maps, Bing Places
- [ ] Reviews active on GBP + TripAdvisor (response strategy in place)
- [ ] Local schema (`postalCode`, `addressLocality: Jericho`, `addressCountry: PS`)

## 7. Content + keyword strategy

- [ ] Keyword research doc with primary + secondary terms per page
- [ ] Pillar content: "Complete guide to staying in Jericho"
- [ ] Pillar content: "Dead Sea visitor's guide" (already exists, expand)
- [ ] Cluster posts linking back to pillars
- [ ] Blog publishing cadence agreed (e.g., 2/month)
- [ ] Each post has clear search intent match (informational vs commercial)
- [ ] Internal linking from new posts to money pages (`/rooms`, `/spa`)
- [ ] Date displayed on posts + `dateModified` updated when refreshed
- [ ] Author bios for E-E-A-T (real person, credentials, photo)
- [ ] Update old content quarterly with `dateModified`

## 8. Backlinks + off-page

- [ ] RoseyCo case study published with branded follow link to raharesort.com
- [ ] Footer credit on raha → roseyco set to `nofollow` (done)
- [ ] Listed in Palestinian / Jericho tourism directories
- [ ] Listed in luxury hotel directories (Small Luxury Hotels, Mr & Mrs Smith pitch)
- [ ] Travel blog outreach (Jericho / Dead Sea / Jordan-region travelers)
- [ ] PR-worthy launch story for hospitality press
- [ ] Social profiles claim brand handles + link back to site
- [ ] Disavow file submitted if any toxic links appear (monitor)

## 9. International + multilingual

- [ ] Decide on language strategy: subdirectory (`/ar/`, `/he/`) vs subdomain
- [ ] `hreflang` tags wired for each translated page
- [ ] `lang` attribute on `<html>` set per locale
- [ ] Self-referencing + cross-referencing hreflang annotations
- [ ] RTL layout tested for Arabic + Hebrew
- [ ] Language switcher accessible (currently exists in footer dropdown)

## 10. Indexing + crawl

- [ ] Google Search Console verified (DNS or HTML tag)
- [ ] Bing Webmaster Tools verified
- [ ] Sitemap submitted in both
- [ ] No crawl errors in GSC Coverage report
- [ ] Pagination handled correctly (no `rel=next/prev` needed in 2025+)
- [ ] Faceted nav (gallery filters, blog tags) doesn't generate infinite URLs
- [ ] JavaScript-rendered content visible to Googlebot (Next.js SSR mostly handles)
- [ ] Verify with Mobile-Friendly Test + URL Inspection in GSC

## 11. Analytics + measurement

- [ ] GA4 installed with consent gating
- [ ] GSC linked to GA4
- [ ] Conversion events: booking click, contact form submit, newsletter sign-up, phone click
- [ ] UTM convention documented for paid + email
- [ ] Looker Studio dashboard or simple monthly report
- [ ] Monthly rank tracking for top 20 keywords (Ahrefs / SEranking / etc.)

## 12. Accessibility (also helps SEO)

- [ ] All images have `alt` text or are decorative with `alt=""`
- [ ] Color contrast AA minimum on body text
- [ ] Focus states visible on all interactive elements
- [ ] Skip-to-content link
- [ ] Form labels associated correctly
- [ ] No keyboard traps
- [ ] axe DevTools audit clean

## 13. Security + trust signals

- [ ] HTTPS valid cert with auto-renewal
- [ ] HSTS header
- [ ] Privacy Policy page live (not placeholder)
- [ ] Terms & Conditions page live
- [ ] Cookie consent banner with granular controls (EU + UK visitors)
- [ ] Contact info real and verifiable (phone, email, address)
- [ ] About page humanizes the business (real photos, names, story)

## 14. Pre-launch SEO QA

- [ ] No staging URLs indexed (block with auth or `noindex`)
- [ ] Production `noindex` removed before go-live
- [ ] All `tel:` and `mailto:` links real, not placeholders
- [ ] All forms submit somewhere real (not console.log)
- [ ] Broken-link crawl clean (Screaming Frog or Sitebulb)
- [ ] Redirects from old site mapped if migrating
- [ ] Soft launch GSC submission then full launch announcement
- [ ] Post-launch crawl + rank baseline captured

## 15. Ongoing (monthly / quarterly)

- [ ] Monthly: GSC errors, top queries, CTR by page
- [ ] Monthly: GA4 conversion funnel review
- [ ] Quarterly: Core Web Vitals audit
- [ ] Quarterly: content refresh on top 10 pages
- [ ] Quarterly: backlink audit (new + lost links, disavow if needed)
- [ ] Annually: full technical SEO crawl
