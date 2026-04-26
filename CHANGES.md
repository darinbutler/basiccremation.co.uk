# Batch 11 — Bespoke per-city images (27 cities)

## What's new
You provided AI-generated city imagery for 27 of the 73 cities. This bundle wires them into the site replacing the rotating thematic Unsplash photos.

### Cities now using bespoke images
bolton, bournemouth, brighton, cambridge, coventry, derby, hull, leicester, luton, milton-keynes, newport, northampton, norwich, oxford, peterborough, plymouth, portsmouth, reading, southampton, southend, stoke-on-trent, sunderland, swansea, swindon, wolverhampton, wrexham, york.

The remaining 46 cities (London, Manchester, Birmingham, Liverpool, Leeds, Sheffield, Bristol, Cardiff, Newcastle, Nottingham, etc.) still use the thematic Unsplash mapping from Batch 9. You can swap those in later by adding more files to `~/Documents/Claude/Projects/BEST/BEST/city-images/`.

## Image processing pipeline
- **Source**: 27 PNGs in `~/Documents/Claude/Projects/BEST/BEST/city-images/`, totalling 56 MB
- **Processed to**: optimized JPGs in `public/images/cities/`, totalling 5 MB (10× reduction with no visible quality loss)
- **Specs**: max 1800px wide, JPG quality 85, EXIF stripped
- **Naming**: `{slug}.jpg` (auto-fixed `miltonkeynes.png` → `milton-keynes.jpg` to match the slug convention)

## Layout fix — consistent portrait aspect
The pricing block previously used `aspect-[4/3]` on mobile and `aspect-[3/4]` on desktop. Your portrait images would have been awkwardly cropped on mobile. Changed to `aspect-[3/4]` everywhere with `max-w-md` on mobile so portrait images render naturally at any screen size.

Brighton + Reading + Luton + Plymouth + Southampton arrived as landscape (you mentioned for Brighton/Reading you "saved them differently"). Centre-cropped to portrait 3:4 so they fit the layout consistently with the rest.

## Files in the bundle
- `src/components/location-page.tsx` — aspect ratio change
- `src/lib/locations/{27 city files}.ts` — `cityImage` and `cityImageAlt` updated to point to local files
- `public/images/cities/{27}.jpg` — the optimized images themselves

## After deploy
Each of those 27 city pages will now show your bespoke imagery in the pricing block. Visit a few to spot-check — Oxford, Brighton, Reading, York, Cambridge.

## When you're ready for more cities
Drop more files into `~/Documents/Claude/Projects/BEST/BEST/city-images/` (named `{slug}.jpg` or `.png`) and tell me. I'll re-run the pipeline for the new ones.
