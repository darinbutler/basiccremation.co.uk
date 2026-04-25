# Batch 2 — Phase A: Core Content

Files in this bundle:

**Modified:**
- `src/lib/site-config.ts` — added cardiff, swansea, newport, wrexham to `tier1Locations` (now 37 cities). Cardiff moved into Top 10 by population.

**New pages:**
- `src/app/prices/page.tsx` — full pricing page (£1,499 + optional priority care £250), no-surprise-charges block, funeral cost help section, phone CTA band
- `src/app/whats-included/page.tsx` — 8 included items + 5 not-included items, full justification per item
- `src/app/what-is-a-basic-cremation/page.tsx` — long-form educational/SEO anchor; how it works, why families choose it, FAQ-style sections
- `src/app/faqs/page.tsx` — 15 site-wide FAQs in collapsible <details> elements (city pages keep their own local FAQs)
- `src/app/contact/page.tsx` — phone-first, no form (deferred); covers what to expect on a call, coroner cases, overseas cases
- `src/app/help-and-advice/page.tsx` — index with 4 child cards
- `src/app/help-and-advice/what-to-do-when-someone-dies/page.tsx` — first 24-72h guide split by location of death (home, hospital, care home, unexpected)
- `src/app/help-and-advice/registering-a-death-england-wales/page.tsx` — 5-day rule, what to bring, what you receive, Tell Us Once
- `src/app/help-and-advice/registering-a-death-scotland/page.tsx` — 8-day rule, NRS process, Form 14, Procurator Fiscal cross-link
- `src/app/help-and-advice/coroner-and-procurator-fiscal/page.tsx` — when referral happens, three outcomes, how it affects timing

**Deferred (not in this bundle):**
- Resend callback form — phone-only conversion model decided 2026-04-26
- Custom domain pointing — held until full site complete
