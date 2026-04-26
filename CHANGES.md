# Batch 5.1 — Hot-fix for Tier 2 import bug

## What broke
Vercel build failed on commit 11a34e0 (Batch 5):
```
Type error: Cannot find name 'bradfordLocation'. Did you mean 'oxfordLocation'?
```

The 21 Tier 2 cities had data files, route stubs, and entries in `allLocations`, but the **import statements were missing** from `src/lib/locations/index.ts`. The python script that generated the imports during Batch 5 hit an f-string syntax error and silently exited before writing the imports — but the entries-injection step ran independently and succeeded, leaving the file in a half-completed state.

## What this bundle does
Adds the 21 missing import statements to `src/lib/locations/index.ts`:
```ts
import { bradfordLocation } from "@/lib/locations/bradford";
import { wakefieldLocation } from "@/lib/locations/wakefield";
... (19 more)
```

That's the entire fix — one file changed.

## Sanity check
- All 58 cities have both an import line AND a record entry in allLocations
- No other changes vs. Batch 5

## What's preserved from Batch 5
Mega menu fix, region-cluster linking, schema (Organization, BreadcrumbList, Service, Article), comprehensive metadata, favicon set, 21 Tier 2 cities — all still in place. This bundle just makes the build compile.
