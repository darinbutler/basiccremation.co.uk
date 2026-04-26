# Batch 5 — Mega menu fix + Tier 2 cities + schema/metadata + favicon (FULL BUNDLE)

## What's in this bundle

### 1) Mega menu — properly centered
The Locations dropdown was anchored to the small Locations link wrapper, causing it to extend off the right edge of the page. Now anchored to the header's content container with `left-1/2 -translate-x-1/2` for proper page-centred positioning.
Affected files: `src/components/site-header.tsx`

### 2) Region-cluster internal linking on city pages
Every city page now has an "Other locations" section showing 8 nearby cities in the same region (or country fallback). Manchester ↔ Liverpool ↔ Bolton, Newcastle ↔ Sunderland, Cardiff ↔ Newport ↔ Swansea ↔ Wrexham, etc. Massive boost to internal linking and topical authority.
Implementation: new `getRegionalSiblings(slug, max)` helper in `src/lib/locations/index.ts` + new section in `location-page.tsx`.

### 3) Schema audit — comprehensive JSON-LD across the site
- **Organization** + **WebSite** schema in `src/app/layout.tsx` (appears on every page)
- **BreadcrumbList** on every page that has a hierarchical path (10 core pages + all 58 city pages)
- **Service** schema on `/prices` (£1,499 offer with priceValidUntil)
- **Article** schema on the 4 advisory pages (E-E-A-T signal)
- **FuneralHome** + **FAQPage** schema already present on city pages, kept

New file: `src/components/breadcrumb-schema.tsx` — reusable BreadcrumbSchema component.

### 4) Comprehensive metadata
`src/app/layout.tsx` now exports:
- Full Open Graph (type, locale, url, siteName, title, description, images with width/height/alt)
- Twitter card (summary_large_image with image)
- robots directives with googleBot-specific rules (max-image-preview, max-snippet)
- Keywords array
- Canonical URL
- Application metadata (name, authors, creator, publisher)
- Icons: favicon.ico, favicon.svg, icon-192, icon-512, apple-touch-icon
- Manifest reference

Each city route stub now has its own Open Graph + Twitter card with the cityImage.

### 5) Favicon set
Generated from the existing Logo SVG (sage-700 leaf + circle ring). Public/ folder now contains:
- `favicon.ico` (multi-size: 16, 32, 48)
- `favicon.svg` (vector)
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (PWA)
- `icon-512.png` (PWA, also used as logo.png for schema/OG)
- `og-image.png` (1200x630, used in Open Graph and Twitter cards as default)
- `site.webmanifest` (PWA manifest)

### 6) Phase D — Tier 2 cities (21 cities)
21 new city pages built and wired:
- **South Yorkshire**: Bradford, Wakefield, Doncaster, Rotherham
- **South West**: Bath, Cheltenham, Gloucester, Exeter
- **East**: Lincoln, Ipswich, Colchester, Chelmsford
- **South East**: Maidstone, Crawley, Guildford, Slough, Watford
- **North West**: Blackpool, Preston, Warrington, Chester

Each is ~110-130 lines with city-specific crematoria, register office, hospital bereavement contacts, support services, areas covered, and FAQs (lighter than Tier 1 but still substantive).

Total cities now: **58** (37 Tier 1 + 21 Tier 2). Full coverage of England + Wales major and mid-size urban centres.

## Sanity checks
- 58 city data files, 58 route stubs, all registered in `allLocations`
- All 58 cities in either tier1Locations or tier2Locations array
- All city route stubs include BreadcrumbSchema + city-specific Open Graph
- No invalid PhoneCTA variants
- No 'optional Priority Care' wording
- Sitemap auto-includes all 58 cities via `getAllLocationSlugs()`
- All 58 city files have cityImage set

## Open backlog (still in memory)
- Per-city image polish (currently rotating from a verified Unsplash pool — could be hand-picked per city)
- Trustpilot widget integration
- Custom domain pointing
- Region-cluster internal linking now lives in the city page; could also be added to advisory pages
