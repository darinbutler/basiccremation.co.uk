# Swapping the placeholder images

The site currently uses Unsplash placeholder images. They're calm, age-agnostic, free to use, and load via Next.js's image optimisation. They look professional out of the box but you'll want to replace them with your own imagery eventually.

## Where the image URLs are defined

All four homepage image URLs are at the top of `src/app/page.tsx`:

```tsx
const HERO_IMAGE = "https://images.unsplash.com/...";
const PRICING_IMAGE = "https://images.unsplash.com/...";
const ADVICE_IMAGE = "https://images.unsplash.com/...";
const INCLUDED_IMAGE = "https://images.unsplash.com/...";
```

## To swap to your own images

Drop your own images into `/public/images/` and change the URLs:

```tsx
const HERO_IMAGE = "/images/your-hero.jpg";
const PRICING_IMAGE = "/images/your-pricing.jpg";
// ...
```

Recommended dimensions:
- **Hero:** 2400×1400 minimum (4:3 wide crop), shown full-width across the top
- **Pricing:** 1600×1200 (4:3 portrait works well), shown alongside text
- **Advice background:** 1800×1000 (very subtle, 25% opacity)
- **Included background:** 1600×900 (subtle, 40% opacity)

Format: `.jpg` or `.webp`. Compress before uploading via [tinypng.com](https://tinypng.com) or [squoosh.app](https://squoosh.app). Aim for hero under 250 KB, others under 150 KB.

## What kind of imagery works in this category

**Yes:**
- Calm landscapes (countryside, coast, woodland)
- Soft domestic scenes (window light, a teacup, a notebook)
- Atmospheric weather (mist, soft sunlight, autumn light)
- Close-up textures (paper, fabric, wood, leaves)

**No:**
- Coffins, urns, hearses, crematoria (the things people are trying to escape)
- Crying or distressed faces (amplifies the visitor's distress)
- Doves, candles, religious iconography (overdone, dates fast)
- Stock funeral imagery generally
- AI-generated people (uncanny, dates fast, Google penalises)

## To add additional Unsplash images

If you want to test other Unsplash images, the URL pattern is:
```
https://images.unsplash.com/photo-XXXXXXX?auto=format&fit=crop&w=2400&q=75
```

Get the photo ID from the Unsplash URL (the `photo-XXXXXXX` part). Browse at [unsplash.com](https://unsplash.com) — search for "misty path", "morning light kitchen", "quiet bookshelf", etc.

## Adding more domains

If you use other image hosts (e.g., Cloudinary, your own CDN), add them to `next.config.js`:

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' }
  ]
}
```
