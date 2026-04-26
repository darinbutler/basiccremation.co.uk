# Batch 9 — /locations bg image + thematic city image mapping

## 1) /locations page — image background on city listing
Was a flat paper-warm header + plain card grid on white. Now matches the rest of the site's visual rhythm:

- **Hero with image background** — bright sunlit countryside photo with the standard scrim overlay (matches homepage / Manchester / help-and-advice heros)
- **City listing on image bg** — paper-warm gradient overlay over a UK city skyline image, so cards remain crisply readable but the section no longer feels flat
- **Card layout upgrade** — each city now has a marker-pin icon + city name + region in a tighter 2/3/4-column grid (mobile/tablet/desktop)
- Centered intro copy with "73 cities & growing" eyebrow

Affected file: `src/app/locations/page.tsx`

## 2) Per-city image mapping — thematic regional groups
Was rotating through 18 generic landscape Unsplash IDs by index. Many cities ended up with photos that didn't match their character.

New strategy — hand-picked iconic shots for the biggest cities, themed groups for the rest. Verified Unsplash IDs only.

| Image | Used for |
|---|---|
| **Tower Bridge** | London (unique) |
| **Manchester rooftops** | Manchester (unique) |
| **Liverpool Liver Building** | Liverpool (unique) |
| **Leeds skyline** | Leeds (unique) |
| **Newcastle Tyne** | Newcastle + Sunderland |
| **Cardiff city** | Cardiff (unique) |
| **York Minster** | York + 8 other cathedral/historic cities (Cambridge, Worcester, Lincoln, Norwich, Chester, Gloucester, Exeter, Durham, Canterbury) |
| **Oxford spires** | Oxford (unique) |
| **Bath stone arches** | Bath + Salisbury |
| **Blackpool seafront** | Blackpool + 6 South Coast cities (Brighton, Bournemouth, Eastbourne, Worthing, Hastings, Southend) |
| **UK city skyline** | 16 mid-major urban centres (Birmingham, Bristol, Sheffield, Nottingham, Leicester, Coventry, etc.) |
| **Pennine misty mountains** | 9 northern industrial cities (Bradford, Halifax, Huddersfield, Barnsley, Burnley, Blackburn, Carlisle, Rotherham, Doncaster) |
| **English hillside** | 7 SE/SW countryside cities (Reading, Slough, Watford, Guildford, Crawley, Maidstone, Luton, Swindon, Milton Keynes, Chelmsford) |
| **Welsh atmospheric mountains** | Swansea, Newport, Wrexham |
| **Eastern fenland sunrise** | Colchester, Ipswich, Peterborough |
| **Countryside** | NW countryside cities (Preston, Warrington, Bolton, Oldham, Wakefield) + Cheltenham/Northampton |

73 cities × thematic-fit photos. Some sharing where appropriate (you can't have 73 unique city-specific photos without a Getty Images budget) but tonally far more accurate than before.

## After deploy
Visit a few city pages to confirm — Manchester, Liverpool, Cardiff, York, Oxford, Bath, Salisbury, Blackpool should all show their iconic shots.
