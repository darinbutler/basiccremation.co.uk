# Batch 6 — Pricing redesign + Tier 3 + cluster fix + Areas redesign (FULL BUNDLE)

## 1) Pricing page redesigned (mobile-first)
`src/app/prices/page.tsx` rebuilt from the ground up:
- **Two clear pricing tiers** side-by-side (mobile: stacked):
  - Standard (£1,499): sage-700→sage-800 gradient card, white text, big serif £1,499 price, coral-400 "Most common" badge, full features list
  - Priority Care (£1,749): paper card with sage-300 border, breakdown showing £1,499 + £250
- **Bigger, bolder numbers** — 6xl/7xl serif font on the hero price
- **Comparison anchor** — context line referencing SunLife report (£4,510 traditional funeral)
- **Mobile-first**: stacks vertically, large tap targets, big numbers readable on phone
- **Help with costs** moved into 12-col grid (title-left/body-right pattern)
- Schema preserved: Service + Breadcrumb

## 2) Geographic cluster map (replaces fuzzy region matching)
`src/lib/locations/index.ts` — old word-overlap logic replaced with explicit cluster map.

13 clusters defined:
- north-west, yorkshire, north-east, west-midlands, east-midlands, east-anglia, south-west, south-coast, south-east, london, wales-south, wales-north, north-wales-borders

Plus CLUSTER_ADJACENCY map for fallback when primary cluster has fewer than `max` siblings.

Result: Brighton no longer shows up under Manchester; Cardiff no longer pairs with York. Manchester now shows Liverpool, Bolton, Salford, Stockport, Oldham, etc.

## 3) Tier 3 — 15 new cities
Filling the geographic gaps:

**Greater Manchester boroughs** (separate from Manchester city): Stockport, Salford, Oldham
**Lancashire**: Blackburn, Burnley
**Yorkshire**: Huddersfield, Halifax, Barnsley
**Midlands**: Telford, Worcester
**South Coast / SE**: Eastbourne, Worthing, Hastings, Salisbury
**Cumbria**: Carlisle (the only city in Cumbria)

Each ~110-130 lines, full LocationData with city-specific crematoria, register office, hospital bereavement, support services, areas covered, FAQs.

## 4) Areas Covered section redesigned
Was a flat list of strings in plain `bg-paper` boxes.

Now:
- Image background (using ADVICE_IMAGE) with paper-warm gradient overlay
- Card grid: bg-paper, sage-200 border, marker-pin icon for each area, hover lift
- Mobile-first: 2-column on phone, 3 on tablet, 4 on desktop
- Closing message includes phone CTA inline

Each card is structured to be easily upgradeable to a Link when per-area pages ship.

## Total cities: 73
- Tier 1: 37 (10 Top + 24 English remainder + 3 Welsh)
- Tier 2: 21 (mid-size English)
- Tier 3: 15 (gap-fillers)

## Sanity checks
- 73 city data files, 73 route stubs
- 73 imports + 73 entries in locations/index.ts (verified script-passes)
- 73 cities all in CLUSTER_MEMBERS map
- No invalid PhoneCTA variants
- Pricing page two-tier structure preserves "Priority Care required, not optional" wording
