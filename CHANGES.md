# Batch 10.1 — Image fixes

## What's in this bundle

### 1) Homepage 'Why families choose us' — replaced clashing image with bg-sage-50
The bright English countryside image behind the dark sage-700 cards didn't work with the site's colour scheme. Replaced with a soft `bg-sage-50` (very light sage tint) that complements the sage-700 cards without competing.

### 2) /prices 'What you won't be asked to pay' — text now readable
Removed the misty-path image background that was making text difficult to read. Section now uses a clean `bg-paper-warm` so the cards and bullet text are crisply legible.

### 3) /help-and-advice 'The four guides' — replaced clashing image
Same image as elsewhere on the site, didn't work with the colour scheme. Replaced with `bg-sage-50` matching the homepage trust card section.

### 4) Brighton + South Coast cities — proper beach photos
Brighton was using a Blackpool seafront photo (shared coastal image). Now each South Coast city has its own beach/seaside shot:

| City | New photo |
|---|---|
| Brighton | photo-1505228395891 |
| Bournemouth | photo-1507525428034 |
| Eastbourne | photo-1591084728795 |
| Worthing | photo-1583511655826 |
| Hastings | photo-1515562141207 |
| Southend | photo-1565884280295 |

(All verified HTTP 200 on Unsplash before assigning.)

## Files changed
- `src/app/page.tsx` — homepage trust card section bg
- `src/app/prices/page.tsx` — no-surprise section bg
- `src/app/help-and-advice/page.tsx` — four-guides section bg
- `src/lib/locations/{brighton,bournemouth,eastbourne,worthing,hastings,southend}.ts` — cityImage updated

## Sanity
- Div structure verified — no unclosed tags after the image-wrapper removals
- All Unsplash photo IDs verified working
- Other Batch 10 changes (sage-700 trust cards, USP strip on /prices, numbered guide cards, /whats-included image bg) are PRESERVED — only the bgs the user flagged were swapped
