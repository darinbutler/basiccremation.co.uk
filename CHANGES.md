# Batch 7 — Migration redirects (preserve indexed legacy URLs)

## What this bundle does
Sets up 301 redirects for the ~6,000 legacy URLs on the existing WordPress basiccremation.co.uk so that when you point the custom domain at this Vercel deployment, **search rankings and existing inbound traffic transfer to the new site**.

## What we found in the old sitemap
6 sitemap files, **5,977 unique indexed URLs**, mostly pattern × location combinations:
- ~75 SEO-pattern variants (`affordable-cremation-*`, `cheap-cremation-*`, `low-cost-cremation-*`, `direct-cremation-*`, `simple-funeral-*`, etc.)
- ~119 UK locations (counties, regions, cities)
- Plus ~10 high-value info pages (`/cremation-prices/`, `/what-is-basic-cremation/`, etc.)

## Strategy

### Tier 1 — Static redirects in `next.config.js`
~25 explicit redirects for the high-value info pages and category-style landing pages:
- `/what-is-basic-cremation/` → `/what-is-a-basic-cremation`
- `/cremation-prices/` → `/prices`
- `/unattended-cremation/` → `/what-is-a-basic-cremation`
- `/prepaid-cremations/` → `/prices`
- `/privacy-policy/` → `/privacy`
- `/quote/` → `/contact`
- `/sitemap_index.xml` → `/sitemap.xml`
- `/page-sitemap[1-6].xml` → `/sitemap.xml`
- `/affordable-cremation-near-me/` → `/locations`
- `/cheap-cremation/` → `/locations`
- `/direct-cremation/` → `/what-is-a-basic-cremation`
- ...and 14 more
- WordPress assets (`/wp-content/*`, `/wp-admin/*`) → `/`

### Tier 2 — Middleware pattern matching
**`src/middleware.ts`** runs on every request and:
1. Checks if the URL ends with any of ~190 known legacy location slugs (counties, regions, cities) — uses LONGEST match first so `west-yorkshire` matches before `yorkshire`
2. If matched → 301 to `/locations/<closest-city>` (English/Welsh) or `/locations` (Scottish/NI)
3. If unmatched but slug starts with a legacy SEO prefix (`affordable-`, `cheap-`, `low-cost-`, etc.) → 301 to `/locations`
4. Otherwise → passes through to Next.js routing (returns 404 if the route doesn't exist)

### `src/lib/legacy-redirects.ts`
The location-to-city mapping. ~140 English/Welsh counties + cities mapped to the closest of our 73 city pages, plus ~50 Scottish/NI locations sent to `/locations` index.

## Sample redirects (verified by simulation)
| Legacy URL | New target |
|---|---|
| `/affordable-cremation-yorkshire/` | `/locations/leeds` |
| `/affordable-cremation-west-yorkshire/` | `/locations/leeds` |
| `/affordable-burial-and-cremation-london/` | `/locations/london` |
| `/cheap-cremation-essex/` | `/locations/chelmsford` |
| `/low-cost-cremation-services-aberdeen/` | `/locations` (Scotland) |
| `/affordable-cremation-near-me-cardiff/` | `/locations/cardiff` |
| `/cheap-funeral-services-near-me-tyne-wear/` | `/locations/newcastle` |
| `/affordable-cremation-isle-of-wight/` | `/locations/portsmouth` |
| `/affordable-funerals-anglesey/` | `/locations/wrexham` |
| `/affordable-cremation-vale-of-glamorgan/` | `/locations/cardiff` |
| `/affordable-cremation/` | `/locations` |
| `/cheap-funeral-packages-near-me/` | `/locations` |

## After you flip the domain — Search Console steps

1. **Verify the new site in Google Search Console** at the same property URL (basiccremation.co.uk).
2. **Submit the new sitemap**: `https://basiccremation.co.uk/sitemap.xml`
3. **Use the URL Inspection tool** for a few key new pages and click "Request indexing".
4. **Monitor 404s**: in GSC → Settings → Crawl stats → look at "Not found" errors over the first 1-2 weeks. Anything not redirecting can be added to next.config.js or the middleware location map.
5. **Redirect chains**: confirm with the Chrome dev tools Network tab that legacy URLs return one 301 → final URL (no chains).
6. **Bing Webmaster Tools**: submit the same sitemap.

## Important — DNS-level considerations

When you change the DNS in your registrar to point at Vercel:
- Cloudflare on the OLD site will be out of the picture (since DNS goes elsewhere)
- The Vercel HTTPS cert provisions automatically — give it a few minutes
- The old WordPress hosting can stay running for a few weeks as a safety net (its URL won't be reachable by users since DNS now points at Vercel, but the files exist if you ever need them)

## Sanity checks
- 5,977 legacy URLs covered: explicit static redirects + middleware pattern matching
- All 73 new city pages preserved
- Legacy WordPress sitemaps redirect to new sitemap
- Middleware matcher excludes static assets and Next.js internals to avoid latency
