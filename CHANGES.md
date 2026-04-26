# Batch 10 — Design polish + memory commit

## What's in this bundle

### 1) Homepage 'Why families choose us' — high-contrast dark cards on image bg
The 3 trust cards were `bg-paper border-2 border-sage-200` (white on paper) — visually flat against the surrounding paper page. Now:
- Wrapped section in image background (using ABOUT_IMAGE) with paper-warm/92 overlay
- Cards changed to `bg-sage-700 text-paper` (dark forest green with white text)
- Icon container: sage-800 rounded circle with coral-300 icon (warm accent)
- Cards lift on hover, `shadow-cardHover`
Visual impact: the 3 cards now POP off the page. Strong contrast, brand-aligned.

### 2) /prices — added a 5-stat USP badges strip + image bg on 'No surprise charges' section
- **NEW: dark sage-700 USP strip** between the pricing tiers and the no-surprise list, with 5 prominent stats:
  - £1,499 — All-inclusive price
  - 24/7 — Phone support
  - NAFD & SAIF — Accredited network
  - 0 — Hidden fees ever
  - Local — Funeral directors
- "What you won't be asked to pay" section now has misty-path image bg with paper-warm gradient overlay
- Each "no charges" card upgraded: `bg-paper border-2 border-sage-200` (was border-1), with `font-medium` darker text + hover lift

### 3) /help-and-advice — 'The four guides' on image bg with numbered cards
- Section wrapped in English-hillside image bg with paper-warm gradient overlay
- Each guide card now has a numbered icon (1, 2, 3, 4) in a sage-100 rounded square
- `border-2` thicker borders, `shadow-card` baseline + `shadow-cardHover` on hover, `-translate-y-1` lift
- Card title becomes coral on hover (was just CTA underline)

### 4) /whats-included — 'Included in the price' on image bg with boxed-icon cards
- Section wrapped in image bg with paper-warm gradient overlay
- "EVERYTHING COVERED" eyebrow added above the H2
- Each included-item card: icon now sits in a sage-100 rounded box (instead of bare icon)
- `border-2` thicker borders, stronger shadow, hover lift

## Memory committed
All current state captured in 9 memory files:
- MEMORY.md (index)
- project_basiccremation_overview.md (state, paths, stack)
- project_basiccremation_progress.md (Batches 1-10)
- project_basiccremation_design_patterns.md (visual rhythm, build pitfalls)
- project_basiccremation_location_schema.md (LocationData fields)
- project_basiccremation_tier1_cities.md (37 Tier 1)
- project_basiccremation_tier2_tier3_cities.md (NEW — 21 + 15 cities)
- project_basiccremation_clusters.md (NEW — 13 geographic clusters)
- project_basiccremation_legacy_redirects.md (NEW — migration system)
- project_basiccremation_image_strategy.md (NEW — Unsplash IDs in use)
- project_basiccremation_open_work.md (current backlog)

## Notes
The Vercel build failure you noticed was Batch 5 (`11a34e0` — Tier 2 imports missing). It was resolved by Batch 5.1 (`bfe23a2`). All deploys since then (Batches 6, 7, 8, 8.1, 9) have been Ready. Current deploy is Batch 9 (`cc22976`).
