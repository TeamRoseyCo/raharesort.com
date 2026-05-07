# Chameleon Easter Egg — Elevateo Signature

A small, hidden chameleon that appears in the corner of every page. On click, it slides out and reveals a tooltip ("You caught me!"). It's the Elevateo design signature — present in every project we ship.

## What it looks like

- **Default state:** an 8px wide sliver in the top-right corner, ~60% opacity. To anyone glancing at the page, it looks like a tiny texture artifact or a UI dot. **By design**, the client/user shouldn't notice it on a normal pass.
- **On click:** the sliver expands horizontally over ~0.55s, revealing the chameleon photo. A small navy tooltip slides in above it that says "You caught me!".
- **Click again:** collapses back.

## File layout

```
public/
  texture.png                 ← the chameleon image (named innocuously on purpose)
app/
  components/
    chameleon.jsx             ← the component (client component)
  layout.jsx                  ← imports + renders <ChameleonEasterEgg /> inside <body>
```

**Why the asset is named `texture.png`:** so a casual look at the repo or the deployed `_next/static` assets doesn't tip off curious clients. It's just "another image asset". Don't rename it back to `chameleon.png` unless the client knows about the easter egg.

## Component API

```jsx
<ChameleonEasterEgg
  top="22px"        // any of top/left/right/bottom — fixed positioning anchor
  right="22px"
  imageSize={22}    // height of the peeking sliver, in px (default 22)
  message="You caught me!"   // tooltip text on click
  src="/texture.png"          // override image path if needed
/>
```

Always rendered with `position: fixed`, so it sits relative to the viewport, not the document. It survives page transitions because it lives in `app/layout.jsx`.

## Where to position it

Default: **top-right**, 22px from each edge.

Other reasonable placements depending on the site:

| Site has...                 | Position the chameleon here   |
| --------------------------- | ----------------------------- |
| Header / navbar at top      | `bottom="22px" right="22px"`  |
| Footer-heavy layout         | `top="22px" right="22px"`     |
| Sticky chat widget bottom-right | `bottom="22px" left="22px"` |
| Centered card with empty corners | `top="22px" right="22px"` (default) |

**Don't:**
- Place it where it overlaps important UI (logout buttons, important CTAs).
- Make `imageSize` larger than ~32px — it stops looking like a sliver and starts looking like a deliberate UI element.
- Animate it on idle (movement breaks the "blends in" effect).
- Add it to `/admin` or other authenticated dashboards — the client may already trust those screens; we don't want easter eggs in serious management UI. Wrap it conditionally if the site has private routes:

```jsx
// in layout.jsx
{!pathname.startsWith("/admin") && <ChameleonEasterEgg ... />}
```

## When NOT to ship it

- Government / healthcare / banking / legal sites — no playful signatures, ever.
- Sites where the client explicitly asked for "no easter eggs" or "no agency marks".
- Sites where the brand owner is paying to white-label our work and signed an agreement.

For everything else (resort sites, restaurants, portfolios, cafes, small business): ship it.

## Reusing in another project

1. Copy `public/texture.png`
2. Copy `app/components/chameleon.jsx`
3. In that project's root layout, import and render it inside `<body>`:
   ```jsx
   import ChameleonEasterEgg from "./components/chameleon";
   ...
   <body>
     {children}
     <ChameleonEasterEgg top="22px" right="22px" imageSize={22} />
   </body>
   ```
4. If the project doesn't use Tenor Sans, the tooltip will fall back to system fonts — looks fine, no need to load Tenor Sans just for the tooltip.

## Implementation notes (for future maintenance)

- **Why a sliver, not the full image hidden?** Hover/click discovery: a 0px-wide element is invisible to clicks. 8px gives a tiny click target without giving the egg away.
- **Why client component?** Uses `useState` for the toggle. Has to be client.
- **Why fixed positioning?** So scrolling on the menu doesn't hide it.
- **Why z-index 50?** Above most content but below modal overlays (modals usually 100+).
- **Why `objectFit: cover`?** The sliver shows a 8px-wide vertical strip of a horizontal photo — without `objectFit: cover` the photo crops weirdly.

## Default position summary

```jsx
<ChameleonEasterEgg top="22px" right="22px" imageSize={22} />
```

That's it. Ship it.
