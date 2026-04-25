# Batch 2 — Phase A: Core Content + Cross-link wiring

## Files in this bundle

### Modified
- `src/lib/site-config.ts` — added cardiff, swansea, newport, wrexham to `tier1Locations` (now 37 cities). Cardiff promoted into Top 10 by population.
- `src/components/location-page.tsx` — added cross-links from city pages into the new core content:
  - In pricing section: now links to both `/prices` AND `/whats-included`
  - New "Useful guides" section before the final CTA: 6 cross-link cards covering `/what-is-a-basic-cremation`, `/whats-included`, `/prices`, `/help-and-advice/what-to-do-when-someone-dies`, `/help-and-advice`, `/faqs`
  - Existing `registerLink` (E&W or Scotland) and `coronerLink` already in place — preserved

### New pages
- `src/app/prices/page.tsx` — full pricing page with all-inclusive £1,499, optional £250 priority care, no-surprise-charges block, funeral cost help section
- `src/app/whats-included/page.tsx` — 8 included items + 5 not-included with full justifications
- `src/app/what-is-a-basic-cremation/page.tsx` — long-form educational/SEO anchor (~170 lines)
- `src/app/faqs/page.tsx` — 15 collapsible site-wide FAQs (city pages keep their own local ones)
- `src/app/contact/page.tsx` — phone-only, no form (deferred); covers what-to-expect, coroner cases, overseas
- `src/app/help-and-advice/page.tsx` — index with 4 child cards
- `src/app/help-and-advice/what-to-do-when-someone-dies/page.tsx` — first 24-72h, split by location of death
- `src/app/help-and-advice/registering-a-death-england-wales/page.tsx` — 5-day rule, Tell Us Once
- `src/app/help-and-advice/registering-a-death-scotland/page.tsx` — 8-day rule, Form 14, NRS process
- `src/app/help-and-advice/coroner-and-procurator-fiscal/page.tsx` — referral triggers, three outcomes, timing impact

## Where the new pages are linked from

- **Footer** (already wired in `src/components/site-footer.tsx`, no changes needed):
  - Information column → /what-is-a-basic-cremation, /prices, /whats-included, /faqs
  - Help & advice column → /help-and-advice/what-to-do-when-someone-dies, /help-and-advice/registering-a-death-england-wales, /help-and-advice/registering-a-death-scotland, /help-and-advice/coroner-and-procurator-fiscal
  - Site column → /locations, /contact, /privacy, /terms
- **Header** (intentionally minimal, 4 items — left as-is per design decision):
  - /what-is-a-basic-cremation, /prices, /help-and-advice, /locations
  - /whats-included, /faqs, /contact reachable from footer only
- **Location pages (Manchester and all future cities)** via the modified `location-page.tsx`:
  - Pricing section → /prices, /whats-included
  - Register-of-deaths section → /help-and-advice/registering-a-death-{england-wales | scotland}
  - Coroner section → /help-and-advice/coroner-and-procurator-fiscal
  - "Useful guides" section (new) → all 6 core pages

## Deferred (not in this bundle)
- Resend callback form — phone-only conversion model decided 2026-04-26
- Custom domain pointing — held until full site complete
