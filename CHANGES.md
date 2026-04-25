# Batch 2 v3 — Phase A core content + variant fix (FULL BUNDLE)

## What this bundle is
Full project sync. Drops in over the entire repo. After this bundle the working tree should match the bundle exactly (apart from .git, .env.local, node_modules).

## Why a full bundle
Following the failed v1/v2 deploys, going forward each batch ships as a full project sync so the local working tree never drifts from what Claude has type-checked. Earlier per-file overlays risked exactly the kind of subtle inconsistency that broke v2.

## Fix in this bundle
**Build break in v2 (commit 679bcd1):** the 9 new core content pages used `<PhoneCTA variant="light-on-dark" />`, which is not a valid variant. The component only accepts `"default" | "compact" | "dark" | "light-on-image"`. TypeScript strict mode caught it, `npm run build` exited 1, Vercel logged "Command 'npm run build' exited with 1" and aborted.

**Fix:** all 9 occurrences switched to `variant="light-on-image"` — the existing variant designed for phone CTAs sitting on top of a dark/image background, which is exactly what those pages need (the surrounding `<section>` already supplies the dark sage-700 background).

Affected files (variant fix):
- src/app/prices/page.tsx
- src/app/whats-included/page.tsx
- src/app/what-is-a-basic-cremation/page.tsx
- src/app/faqs/page.tsx
- src/app/contact/page.tsx
- src/app/help-and-advice/what-to-do-when-someone-dies/page.tsx
- src/app/help-and-advice/registering-a-death-england-wales/page.tsx
- src/app/help-and-advice/registering-a-death-scotland/page.tsx
- src/app/help-and-advice/coroner-and-procurator-fiscal/page.tsx

## Other contents (unchanged from v2 intent)
- `src/lib/site-config.ts` — Welsh cities (cardiff/swansea/newport/wrexham) added to `tier1Locations`, Cardiff promoted into Top 10
- `src/components/location-page.tsx` — pricing section now links to `/prices` AND `/whats-included`; new "Useful guides" section before Final CTA links into all 6 core content pages
- 10 new content pages (prices, whats-included, what-is, faqs, contact, help-and-advice index + 4 children)
- All other existing files unchanged from main HEAD `679bcd1`

## Where new pages are linked from after deploy
- Footer (every page) — all 10 new pages
- Header (4 items, intentionally minimal) — what-is, prices, help-and-advice, locations
- Manchester / future city pages — pricing block + Useful guides grid + register/coroner subpages
