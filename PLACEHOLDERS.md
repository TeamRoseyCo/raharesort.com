# Raha Resort Site Placeholders

Living tracker of every fake / TBD / "fill in later" item on the site. Update as real values come in. Search the codebase for the search hint to find the exact spot.

## Booking

- **Online booking flow**
  - Page: `app/booking-unavailable/page.tsx`
  - Behavior: Hero "Check Availability" form posts (GET) to `/booking-unavailable` and lands on a polite "call us" page.
  - Replace when: real availability / booking engine is wired up. Restore the form `onSubmit={(e) => e.preventDefault()}` in `BookingStrip.tsx` and remove `action="/booking-unavailable"`.
- **Reservation phone number**
  - File: `app/booking-unavailable/page.tsx`
  - Constants: `RESERVATION_PHONE_DISPLAY = "+970 0 000 0000"`, `RESERVATION_PHONE_TEL = "+97000000000"`
  - Replace with: real reservations line.
- **Reservations hours**
  - File: `app/booking-unavailable/page.tsx`
  - Current text: "Daily, 8:00 to 22:00"
  - Replace with: confirmed hours (and timezone if needed).

## Brand assets

- **Logo files**
  - `public/raha-logo.png` (currently in use across Header, Hero, Footer, QuickNav)
  - `public/Raha Resort Logo.png` and `public/Raha Resort Logo.pdf` are also in /public (newly delivered files, not yet wired in due to URL spaces issue).
  - Decide on canonical filename and consolidate.

## Newsletter

- **Newsletter submit handler**
  - File: `app/components/sections/Newsletter.tsx`
  - Currently fakes success after 4s. No backend.
  - Wire to: actual ESP (Mailchimp / Brevo / Klaviyo / Beehiiv).
- **Footer newsletter form**
  - File: `app/components/sections/Footer.tsx` (the "More" column form)
  - Same situation, fake submit.

## Footer / Legal

- **Legal page links** (all currently `href="#"`)
  - File: `app/components/sections/Footer.tsx`, array `LEGAL`
  - Items: Legal Notice, Privacy Policy, Accessibility Statement, Cookie Preferences, Terms & Conditions, Do Not Sell My Info, Refund Policy
  - Replace when: each page exists at a real path.
- **Social media links** (all currently `href="#"`)
  - File: `app/components/sections/Footer.tsx`, array `SOCIALS`
  - Items: Facebook, Instagram, X, LinkedIn, TikTok
  - Replace with: real account URLs.

## Navigation routes

These header / footer links currently point to routes that may not exist yet. Confirm or build:

- `/rooms` Rooms & Booking
- `/dining` Dining
- `/spa` Spa & Wellness
- `/services` Experiences / Amenities
- `/pool` Pool
- `/blog` Blog
- `/tours` Tours
- `/gallery` Gallery
- `/about` About Us
- `/contact` Contact

## Copy

- **About > Values list**
  - File: `app/about/page.tsx` (`VALUES` array)
  - Generic luxury copy. Replace with brand-true voice when ready.
- **Mountain / Pool / Dead Sea views section**
  - File: `app/about/page.tsx`
  - Copy is generic. May want to confirm Dead Sea visibility claim.
- **Hero subline**
  - File: `app/components/sections/Hero.tsx`
  - Current: "All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome."

## Photography

- **Library photos**
  - Folder: `public/resort/library/*.jpeg`
  - Source set imported from `Reference Photos`. Categories wired in `app/lib/photos.ts` via `PHOTO_LIB`.
  - Decide which are final hero / room / amenity shots. Replace as production photography arrives.
- **Old r1.webp through r36.webp**
  - Folder: `public/resort/`
  - Still referenced for `gym` and `tours`. Delete once replaced.

## Easter egg

- **Chameleon asset.** Wired in. Footer's `ChameleonEasterEgg` uses the default `/texture.png` (innocuously named on purpose, see `CHAMELEON.md`).

## Misc / known TBD

- **Language switcher** (was in reference image but not implemented)
- **Pricing / room rate display**
- **Real reservation engine integration**
- **Cookie consent banner** (Cookie Preferences link is dead until this exists)
- **Dead Sea / Jericho geo content** (location page, map embed)

## Audit follow-ups (2026-05-07)

Found by automated codebase scan. Append to the relevant sections above when fixed.

### Additional `tel:` placeholders
All currently use the placeholder `+97000000000`. Same number as the central reservations stub. Replace with real lines (or point all to one):
- `app/pool/page.tsx` (Plan Your Event row, "Or call our events team")
- `app/events/page.tsx` (Reservation block, "Or call our events team")
- `app/spa/page.tsx` (Reservation block, "Or call the spa team")
- `app/booking-unavailable/page.tsx` (`RESERVATION_PHONE_TEL`)

### Additional `href="#"` placeholders
- `app/blog/dead-sea-guide/page.tsx` share row (Share, Copy Link, Email) — no handlers wired.
- `app/components/sections/Footer.tsx` `SOCIALS` array — already noted, still pending.

### Additional fake-submit forms
All swallow the submit, show a toast/state, and never POST anywhere. Wire to ESP / form backend (Mailchimp, Brevo, Klaviyo, Resend, etc.):
- `app/components/sections/Newsletter.tsx`
- `app/components/sections/Footer.tsx` ("More" column)
- `app/contact/page.tsx`
- `app/newsletter/page.tsx`
- `app/blog/dead-sea-guide/SidebarNewsletter.tsx`
- `app/components/ExitIntentPopup.tsx`

### Dev / iteration toggles
- `app/components/ExitIntentPopup.tsx` `ALWAYS_OPEN` flag — currently `false` (real exit-intent active). Flip to `true` when iterating on the popup design.

### Disabled nav items
- `app/components/Header.tsx` "Experiences" (`disabled: true`) — non-clickable parent. Re-enable once `/services` is fully ready.

### Booking flow
- `app/components/BookingStrip.tsx` `<form action="/booking-unavailable">` — restores when the real availability engine is wired (then revert to `onSubmit={(e) => e.preventDefault()}`).

### Confirmed real values (no action needed)
- `info@raharesort.com` in contact page is a live address (not a placeholder).
- No lorem ipsum, test/sample/demo image filenames, or `data-fake` flags found anywhere.

---

Last updated: 2026-05-07
