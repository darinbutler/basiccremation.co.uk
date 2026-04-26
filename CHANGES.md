# Batch 11.1 — Universal local-support image

## What's in this bundle

### 1) New universal local-support image (replaces non-UK Unsplash)
The "Local Support" / "Bereavement Support" block on every city page was using a Pacific Northwest lake-and-mountains photo from Unsplash (`photo-1470770841072-f978cf4d019e`). Not a UK image — bad for trust on a UK funeral site.

Now uses your supplied `local_support.png`, processed to:
- `public/images/local-support.jpg` — 2400×1340 landscape, 413 KB (down from 8.2 MB PNG)
- JPG quality 85, EXIF stripped

The `ADVICE_IMAGE` constant in `src/components/location-page.tsx` now points to `/images/local-support.jpg` instead of the Unsplash URL. Used across all 73 city pages — single source, single update.

### 2) Files changed
- `public/images/local-support.jpg` — NEW
- `src/components/location-page.tsx` — `ADVICE_IMAGE` constant updated

### 3) What's NOT changed
This is a small targeted bundle. The Batch 11 city image work (27 bespoke city images, aspect ratio fix, Brighton/Reading crops) is included since it was already in my working dir, but those files are identical to what's already deployed — they'll no-op on push.

## After deploy
Visit any city page (e.g. /locations/oxford), scroll to the "Bereavement support in [region]" block — you'll see the new UK-appropriate background image instead of the foreign mountain-lake.
