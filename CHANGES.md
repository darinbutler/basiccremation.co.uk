# Batch 2.1 — Help & advice hero refresh + Priority Care language fix + header dot

## What this bundle is
Full project sync. Drops in over the entire repo.

## Changes

### 1) /help-and-advice pages — hero images + at-a-glance strip
All 5 pages reformatted from flat paper-warm-bg-with-text to image-background hero matching the homepage / Manchester pattern. Each page also gets a 3-cell at-a-glance strip below the hero with the most useful quick facts.

- src/app/help-and-advice/page.tsx (index — lake/mountains hero)
- src/app/help-and-advice/what-to-do-when-someone-dies/page.tsx (countryside hillside)
- src/app/help-and-advice/registering-a-death-england-wales/page.tsx (lake mountains)
- src/app/help-and-advice/registering-a-death-scotland/page.tsx (atmospheric mountains)
- src/app/help-and-advice/coroner-and-procurator-fiscal/page.tsx (mountain landscape)

### 2) Priority Care language — corrected site-wide (IMPORTANT)
Audit per bestdirectcremation.co.uk's wording:
> "Collection of the person who has died from a hospital or coroner's mortuary – anywhere else will require a Priority Care collection, which is an extra £250."

Five places across the site previously called Priority Care "optional", which was misleading. The fee is REQUIRED if collection is from anywhere other than a hospital or coroner's mortuary. Reworded as conditional-on-location:

- src/app/page.tsx (homepage trust card + pricing block — both updated)
- src/app/prices/page.tsx (Priority Care card heading + body + footer note + no-surprise list bullet)
- src/app/whats-included/page.tsx (Collection-from-place-of-death item)
- src/app/faqs/page.tsx (How quickly can you collect — answer)
- src/components/location-page.tsx (Useful guides cross-link card + city pricing block)

New consistent framing across the site:
- £1,499 covers collection from a hospital or coroner's mortuary
- £250 Priority Care fee required for collection from a home, hospice, or care/nursing home — total £1,749 in those cases
- "Always explained on the phone before anything happens, never added afterwards"

### 3) Site header trust strip — second pulse dot
"Trusted local funeral directors" now has a matching pulsing coral dot before it (mirroring the dot on "Available 24 hours, 7 days a week").

- src/components/site-header.tsx
