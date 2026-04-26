# Batch 4 — Tier 1 polish: city images + mega menu + footer locations + city-specific FAQs

## What's in this bundle

### 1) City images on all 37 city pages
- Replaced the bland mountains placeholder with a brighter peaceful English image as the new fallback
- Added a `cityImage` to all 35 cities that were previously falling back (London and Manchester already had specific images). Images are drawn from a verified pool of 18 Unsplash IDs and rotate by index — every city now shows a distinctive image in the pricing block, not the generic mountains
- Affected files:
  - `src/components/location-page.tsx` — fallback image swap
  - `src/lib/locations/*.ts` — 35 city files with `cityImage` and `cityImageAlt` added

### 2) Header mega menu — Locations
The simple "Locations" link in the header is now a hover-out 4-column mega menu showing all 37 cities organized by region:
- Top 10 (London, Birmingham, Manchester, Leeds, Liverpool, Sheffield, Bristol, Cardiff, Newcastle, Nottingham)
- Midlands & North
- South & East
- South Coast & Wales

Pure CSS hover (no JS), shadow + animation on open, mobile fallback links to `/locations`.
Affected file: `src/components/site-header.tsx`

### 3) Footer 'Top locations' column
Added a new column to the footer between "Help & advice" and "Site" listing 7 top cities + a "View all" link. Boosts site-wide internal linking from every page to every major city.
Affected file: `src/components/site-footer.tsx` (now 5-column grid on desktop, responsive)

### 4) City-specific FAQs for all 27 Tier 1 remainder cities
Replaced the generic 6-FAQ template with city-specific FAQs for each of:
Leicester, Coventry, Reading, Brighton, Bolton, Sunderland, Southampton, Hull, Plymouth, Milton Keynes, Wolverhampton, Derby, Stoke-on-Trent, Northampton, Luton, Swindon, Norwich, York, Portsmouth, Peterborough, Bournemouth, Southend, Oxford, Cambridge, Swansea, Newport, Wrexham.

Each city now has 6 FAQs that reference local crematoria, hospitals, areas, scattering locations, and regional coverage. SEO and conversion benefit — Google rewards genuinely-local content for `[city] direct cremation` queries.

## Sanity checks
- 37 city files, all with required fields including `cityImage`
- No invalid PhoneCTA variants
- No "optional Priority Care" wording remaining
- Footer mega menu and locations column verified
- Mega menu apostrophe escaped via &rsquo; (no JSX parse errors)

## Open backlog (still in memory for future batches)
- Favicon
- Site-wide schema audit (Organization, BreadcrumbList, Article/HowTo, Service, author Person for E-E-A-T)
- Comprehensive metadata (canonical, Open Graph, Twitter, robots) on every page
- Region-cluster internal linking on city pages (Manchester ↔ Liverpool ↔ Bolton)
- Content-page → city reverse links
- Image alt text audit
- Custom domain pointing
- Trustpilot widget
- Phase D — Tier 2 cities (~30 mid-size cities)
