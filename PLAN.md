# Plan checklist — pick up from here

## 1. Hero pool image not visibly changing
- Served HTML now uses `r19.webp` (`PHOTOS.pool[0]`) — confirmed via curl
- Possible causes: browser cache (hard refresh Ctrl+Shift+R) OR `r19` isn't actually a pool photo
- File sizes: `r1.webp` and `r19.webp` are byte-identical (131,802 bytes) — they may be the same image
- Action: open `public/resort/r19.webp` to confirm what it shows; if not pool, remap `PHOTOS.pool` in `app/lib/photos.ts`
- `r21.webp` (212KB) is a different file — try that as a fallback

## 2. Second accommodation section
- Removed `<RoomsMobile />` from `Rooms.tsx` parent
- Made `RoomsScrollPin` render at all viewports (changed `hidden md:block` → `block`)
- TODO: verify mobile UX still works (scroll-pin can feel weird on phones); may need to bring back swipe variant scoped properly

## 3. Booking widget in hero
- Done — `<BookingStrip />` is in `Hero.tsx`, replaced the two CTA buttons
- File: `app/components/sections/Hero.tsx`

## 4. Copy content/layout from raharesort.com (production site)
- WebFetch only returned the header/beta banner — page is mostly client-rendered or content was truncated
- Next session: try Playwright to render the full DOM, or curl raw HTML and inspect, then port relevant copy/sections into home page components

## 5. Design assets (pending from earlier)
- Favicon (replace default with `Icons/raha-logo.png`)
- Logo in nav/footer (swap text for `raha-wordmark.png`)
- OG image for social shares (from `Papers/Raha Wallpaper.png` or hero photo)
- Ornament SVG (`Icons/ornament.svg`) as section divider
- Palm frond accent (`Icons/palm-frond.png`) as corner decoration
- All queued, not started

## 6. Dev server
- Currently running, PID `brd9o78vw` at http://localhost:3000
- Stop with TaskStop or close terminal before leaving

## Context for next session
- Project: Next.js 16.0.10 + React 19 + Tailwind 4 + Framer Motion + Lenis
- This folder was previously a different conversion attempt; user moved their preferred `raha-next` project here
- Photo library: `app/lib/photos.ts` maps semantic names → `r1.webp`–`r36.webp` in `public/resort/`
- Source images for renaming/adding: `C:\Users\Okazaki\Desktop\Business\Clients\Raha Resort\` (Reference Photos, Icons, Brand Creation, Papers, Signage)
