# Batch 10.2 — /prices trust badges + image bg fixes (consolidated)

## What's in this bundle

### 1) /prices 'What's covered' — completely redesigned trust badges
The section was hard to read on a clashing image, and the small green ticks made it ambiguous what was actually being communicated. Full redesign:

- **Section background**: image gone, clean `bg-paper-warm`
- **Section title**: changed from "What you won't be asked to pay" → **"What's covered — no surprise charges"** with H2 "Everything you won't be charged extra for" — clearer messaging
- **Each card now has**:
  - **Large 48×48px coral-filled circle** with a bold paper-coloured tick (was 5×5 small icon)
  - **"COVERED" eyebrow** in coral above each item — unambiguous about what the card is saying
  - **Bigger bolder text** with `font-medium`
  - `border-2` thicker borders, `shadow-card` baseline + hover lift
  - Cards re-worded slightly to read as positive inclusions (e.g. "A simple coffin (no 'premium' upgrade fee)" instead of just "Coffin upgrade or 'premium' coffin fees")
- **Reinforcing footer line** below the grid: "That's the whole list. No coffin upgrades, no chapel fees, no documentation surcharges — ever."

The visual hierarchy is now: 48px coral circle → "COVERED" tag → bold item name. No ambiguity about what each card means.

### 2) Homepage 'Why families choose us' — `bg-sage-50` (preserved from 10.1)
### 3) /help-and-advice 'Four guides' — `bg-sage-50` (preserved from 10.1)
### 4) Brighton + South Coast cities — beach-specific photos (preserved from 10.1)

## Files changed
- `src/app/prices/page.tsx` — redesigned no-surprise/covered section
- `src/app/page.tsx` — homepage trust card section bg (10.1)
- `src/app/help-and-advice/page.tsx` — four-guides bg (10.1)
- `src/lib/locations/{brighton,bournemouth,eastbourne,worthing,hastings,southend}.ts` — coastal photos (10.1)

## Sanity verified
- All 3 affected JSX files have div balance = 0
- Coastal city Unsplash IDs all return HTTP 200
- No invalid PhoneCTA variants
