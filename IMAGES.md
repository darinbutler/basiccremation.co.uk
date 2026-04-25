# Adding background images

When you have images ready, place them in `public/images/` and reference them as `/images/filename.jpg`.

## Recommended images

For the homepage as currently designed, you'll want roughly four images:

### 1. Hero background (most important)

**File:** `public/images/hero.jpg`
**Dimensions:** at least 2400×1400px (4:3 wider crop)
**Tone:** calm, atmospheric, not funereal — a quiet kitchen, garden bench, country lane, or coastal landscape works well
**Activate:** in `src/app/page.tsx`, find the hero `<section>` and replace the `style={{}}` line with:

```tsx
style={{
  backgroundImage: `linear-gradient(180deg, rgba(31,36,33,0.05) 0%, rgba(31,36,33,0.55) 100%), url('/images/hero.jpg')`
}}
```

### 2. Pricing section background

**File:** `public/images/pricing-bg.jpg`
**Dimensions:** at least 2400×1200px
**Tone:** softer, lighter — a window with morning light, hands holding a teacup, paper and pen
**Activate:** add to the pricing `<section>`'s style:

```tsx
style={{
  backgroundImage: `linear-gradient(90deg, rgba(251,249,244,0.94) 0%, rgba(251,249,244,0.5) 60%, rgba(251,249,244,0.05) 100%), url('/images/pricing-bg.jpg')`
}}
```

### 3. Help & advice section background

**File:** `public/images/advice-bg.jpg`
**Dimensions:** at least 2400×1200px
**Tone:** quiet domestic — bookshelf, an open notebook, a chair by a window
**Activate:** same pattern as the pricing section.

### 4. Optional Open Graph image

**File:** `public/images/og-default.jpg`
**Dimensions:** 1200×630px exactly
**Use:** the social sharing card. Add to `metadata` in `src/app/layout.tsx`:

```tsx
openGraph: {
  // ... existing fields
  images: ["/images/og-default.jpg"]
}
```

## Image format guidance

- **Save as `.jpg` or `.webp`** — both work. WebP is ~30% smaller for the same quality.
- **Compress before uploading.** Tools: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app). Aim for hero images under 250 KB, section backgrounds under 150 KB.
- **Don't upload 4K originals.** They'll bloat the site and slow page loads.

## What NOT to use

Avoid stock imagery showing:
- Doves, candles, urns, coffins
- Grieving faces or hands clasped in prayer
- Funeral-specific iconography
- Any imagery that looks like it came from a funeral parlour brochure

These are tonally clumsy and Google's algorithms now flag them as low-quality. The best brand imagery in this category is calm and domestic, not mournful.

## Where to source

If you're sourcing yourself:
- **Unsplash / Pexels** — free, decent quality, watch for over-used compositions
- **Stocksy** — paid but much better curation
- **Commission a small photo shoot** — best long-term option; even 6-8 well-chosen original photos last years
