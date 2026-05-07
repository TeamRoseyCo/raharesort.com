# Raha Resort Site — Next Steps Checklist

Last updated: 2026-05-07

## 1. Client inputs needed (unblocks everything else)
- [ ] Real reservations phone number (one canonical line)
- [ ] Reservations hours (confirm "Daily, 8:00 to 22:00" + timezone)
- [ ] Social media URLs (Facebook, Instagram, X, LinkedIn, TikTok)
- [ ] Canonical logo file decision (`raha-logo.png` vs `Raha Resort Logo.png`)
- [ ] Pick ESP (Brevo, Mailchimp, Klaviyo, Beehiiv)
- [ ] Pick PMS / booking engine (Cloudbeds, SiteMinder, Mews, Little Hotelier, etc.)
- [ ] Confirm Dead Sea visibility claim in About copy
- [ ] Final brand-voice copy for About > Values list
- [ ] Production photography delivery (replace `library/*.jpeg` placeholders)

## 2. Placeholders to replace
- [ ] `RESERVATION_PHONE_DISPLAY` and `RESERVATION_PHONE_TEL` in `app/booking-unavailable/page.tsx`
- [ ] `tel:+97000000000` in `app/pool/page.tsx`
- [ ] `tel:+97000000000` in `app/events/page.tsx`
- [ ] `tel:+97000000000` in `app/spa/page.tsx`
- [ ] `SOCIALS` array in `app/components/sections/Footer.tsx`
- [ ] `LEGAL` array links in `app/components/sections/Footer.tsx` (7 pages)
- [ ] Hero subline copy in `app/components/sections/Hero.tsx`
- [ ] About `VALUES` array in `app/about/page.tsx`
- [ ] Blog share row handlers in `app/blog/dead-sea-guide/page.tsx`
- [ ] Consolidate logo files in `public/`, remove unused

## 3. PMS / booking integration
- [ ] Select booking engine with client
- [ ] Revert `BookingStrip.tsx` form: remove `action="/booking-unavailable"`, restore `onSubmit={(e) => e.preventDefault()}`
- [ ] Wire real availability call (deep-link or embedded widget)
- [ ] Add room rate display on `/rooms`
- [ ] Decide fate of `/booking-unavailable` page (keep as fallback or remove)

## 4. Marketing integration
- [ ] Wire `app/components/sections/Newsletter.tsx` to ESP
- [ ] Wire `app/components/sections/Footer.tsx` "More" column form to ESP
- [ ] Wire `app/contact/page.tsx` to ESP or form backend
- [ ] Wire `app/newsletter/page.tsx` to ESP
- [ ] Wire `app/blog/dead-sea-guide/SidebarNewsletter.tsx` to ESP
- [ ] Wire `app/components/ExitIntentPopup.tsx` to ESP
- [ ] Add GA4 tracking
- [ ] Add Meta Pixel
- [ ] Add cookie consent banner
- [ ] Wire Cookie Preferences link in footer to banner
- [ ] Build legal pages (Privacy Policy, Terms, Refund Policy, Accessibility, etc.)

## 5. Sitemap and route audit
Audit which exist, build the rest, then generate sitemap.
- [ ] `/rooms`
- [ ] `/dining`
- [ ] `/spa`
- [ ] `/services` (currently `disabled: true` in Header)
- [ ] `/pool`
- [ ] `/blog`
- [ ] `/tours`
- [ ] `/gallery`
- [ ] `/about`
- [ ] `/contact`
- [ ] Re-enable Experiences nav item once `/services` is ready
- [ ] Generate `sitemap.xml`
- [ ] Generate `robots.txt`
- [ ] Add OG metadata per page

## 6. Design polish
- [x] Favicon (using `RAHA PERFECT LOGO` as `app/icon.png` and `app/apple-icon.png`)
- [ ] Logo wordmark in nav and footer (replace text)
- [ ] OG share image (from `Papers/Raha Wallpaper.png` or hero photo)
- [ ] Ornament SVG section divider
- [ ] Palm frond corner accent
- [ ] Language switcher (EN / AR at minimum)

## 7. Carryover from PLAN.md
- [ ] Verify `r19.webp` is actually a pool photo (may be duplicate of `r1.webp`)
- [ ] Mobile UX pass on `RoomsScrollPin` after removing mobile variant
- [ ] Port remaining copy from live `raharesort.com` via Playwright render
- [ ] Delete unused `r1.webp`–`r36.webp` once `library/` photos cover all uses

## 8. Pre-launch
- [ ] Flip `ExitIntentPopup` `ALWAYS_OPEN` to `false` (already false, confirm)
- [ ] Lighthouse pass (perf, a11y, SEO, best practices)
- [ ] Cross-browser check (Safari iOS, Chrome Android, Firefox)
- [ ] 404 page
- [ ] Domain + SSL setup
- [ ] Production analytics smoke test
