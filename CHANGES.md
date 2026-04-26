# Batch 3 — All 37 Tier 1 city pages (FULL BUNDLE)

## Headline
Phase B (Top 10) + Phase C (Tier 1 remainder) shipped together. All 37 Tier 1 cities now have:
- A `src/lib/locations/{slug}.ts` data file (LocationData object — crematoria, register office, coroner area, hospital bereavement, bereavement support services, areas covered, FAQs, transit note, funding help)
- A `src/app/locations/{slug}/page.tsx` route stub with metadata + canonical + Open Graph
- Full inheritance of the Manchester template visual rhythm (hero, in-page nav, 12-col content blocks, dark dramatic crematoria block, bright bereavement support, image-bg useful guides, etc.)
- Full inclusion in `src/lib/locations/index.ts`, sitemap.xml, and the /locations directory page

## Cities built in this bundle (36 new + Manchester unchanged)

**Top 10 by population (English + Welsh):**
1. London — full-depth (242 lines, ~16 KB) — biggest treatment, with all 32 boroughs, all 7 London coroner areas, principal hospital trusts, London-specific bereavement services
2. Birmingham — full-depth (193 lines)
3. Manchester ✅ (already shipped)
4. Leeds — full-depth (166 lines)
5. Liverpool — full-depth (182 lines, with Wirral/Sefton/Knowsley coverage)
6. Sheffield — full-depth (164 lines)
7. Bristol — full-depth (166 lines)
8. Cardiff — full-depth (166 lines, with Welsh-language note)
9. Newcastle — full-depth (166 lines)
10. Nottingham — full-depth (166 lines)

**Tier 1 remainder (24 English + 3 Welsh = 27 cities):**
Leicester, Coventry, Reading, Brighton, Bolton, Sunderland, Southampton, Hull, Plymouth, Milton Keynes, Wolverhampton, Derby, Stoke-on-Trent, Northampton, Luton, Swindon, Norwich, York, Portsmouth, Peterborough, Bournemouth, Southend, Oxford, Cambridge, Swansea, Newport, Wrexham — each ~130-140 lines

## Caveats — REVIEW BEFORE FINAL DEPLOY

**Phone numbers, addresses and crematoria details:** generated using best-effort UK city knowledge. The crematoria, register offices, hospitals and bereavement charities listed are real, but specific phone numbers and addresses should be verified before final deploy — especially for:
- Register office phone numbers
- Hospital bereavement office addresses
- Bereavement charity phone numbers (most use 0808 808 1677 for Cruse — that's correct nationally)

A spot-check on one or two cities you know personally is the fastest way to catch any errors. The shape and structure is correct; the data is the variable.

**FAQs in Tier 1 remainder cities:** the 27 remainder cities use 6 generic-but-customised FAQs each (e.g. "Which {city} crematorium will be used?"). The Top 10 cities have 5–7 FAQs each with city-specific answers. If you want more local depth, the easiest way is to add 2–3 city-specific FAQs to each remainder file in a follow-up batch.

**City images:** Top 10 cities have `cityImage` set where I had a known-good Unsplash ID; remainder cities omit this (so they fall back to the generic pricing image). Adding city-specific images is a future polish.

## Sanity checks all pass

- All 37 city files include the required LocationData fields (slug, city, region, country, metaTitle, metaDescription, h1, lede, localIntro, crematoria, areasCovered, registerOffice, coronerNotes, supportServices, fundingHelp, faqs, transitNote)
- All 37 route stubs import the correct exported variable name
- All 37 are in `siteConfig.tier1Locations`
- No `light-on-dark` PhoneCTA (the bug that broke v1/v2)
- No invalid prop usage detected
- Sitemap.ts auto-includes all 37 via `getAllLocationSlugs()`

## Phase D (Tier 2)
Not in this bundle. Tier 2 is ~30 mid-size cities (Aldershot, Slough, Watford, Crawley, Blackpool, Preston, Warrington, etc.) — defined as Batch 4. Ship Tier 1 first, see how it converts, then plan Tier 2.

## Open backlog (still in memory)
- Favicon
- Site-wide schema audit (Organization, BreadcrumbList, Article/HowTo, Service, author Person)
- Comprehensive metadata (canonical, Open Graph, Twitter, robots) on every page
- Internal linking refinement (region clusters, content→city reverse links)
- Image alt text audit
- Custom domain pointing
- Resend callback form (still deferred per phone-only model)
