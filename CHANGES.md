# Batch 8.1 — Mobile menu hotfix (portal to document.body)

## What broke in Batch 8
The mobile menu rendered, but only the top "Menu" / X bar showed. The page content bled through where the menu body should be. Cause:

The MobileMenu component was rendered inside `<SiteHeader>`, which is a `sticky top-0 z-40` element. Inside that sticky parent's stacking context, the menu's `fixed inset-0 z-[60]` couldn't escape — `position: fixed` inside a sticky/transformed parent gets constrained to the parent's stacking context. Result: the menu rendered as a 384px-wide right-side strip but its z-stack was capped at the header's level, so trust strip and page content sat above it visually.

## Fix
Use `React.createPortal` to render the overlay directly to `document.body` — bypasses the sticky header's stacking context entirely. The overlay is now a true top-level fixed-position element on the page with `z-index: 9999`.

### Other improvements while in there
- Inline `style={{ zIndex: 9999 }}` instead of arbitrary Tailwind `z-[60]` — guaranteed to compile
- Inline `backdropFilter: blur(4px)` with `WebkitBackdropFilter` for iOS Safari compatibility
- Panel width changed from `w-full max-w-sm` to `w-[88vw] max-w-sm` so on very wide phones (>440px) you still see a sliver of dark backdrop on the left, making it visually clear the menu is an overlay (not a full-screen replacement)
- Bottom padding `<div className="h-8"></div>` after the last nav item

### Files changed
- `src/components/mobile-menu.tsx` — rewritten with createPortal

## After deploying
The mobile menu will:
1. Slide in from right (existing animation in globals.css)
2. Cover the page with a blurred dark backdrop
3. Be properly above ALL other content (header, mobile-call-bar, page hero)
4. Close on: backdrop tap / Escape key / X button / any nav link tap
