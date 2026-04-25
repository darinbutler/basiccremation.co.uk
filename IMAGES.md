# Image setup

## Current image sources

The homepage uses four images, defined at the top of `src/app/page.tsx`:

| Section | Image | Source |
|---|---|---|
| Hero | Misty country path at dawn | Unsplash |
| What is a basic cremation | Bright English countryside | Unsplash |
| Pricing block | Memorial scene | Local: `/public/images/pricing-memorial.jpg` |
| If you've just lost someone | Sunlit lake & mountains | Unsplash |

## Local images

`/public/images/pricing-memorial.jpg` — provided memorial scene, watermark cropped, optimised for web (~290 KB at 1800×954). This is committed to the repo so it'll deploy with the site.

## To swap any image

For an Unsplash image, just change the URL constant:

```tsx
const HERO_IMAGE = "https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=2400&q=75";
```

For a locally hosted image, drop it into `public/images/` and reference it with a leading slash:

```tsx
const PRICING_IMAGE = "/images/your-filename.jpg";
```

## Image specs

| Use case | Recommended size | Format | Target file size |
|---|---|---|---|
| Hero background | 2400×1400 | JPG/WebP | < 250 KB |
| Section background (subtle) | 1800×1000 | JPG/WebP | < 150 KB |
| Side-by-side pricing image | 1600×1200 | JPG/WebP | < 200 KB |
| Open Graph (social card) | 1200×630 | JPG | < 200 KB |

Compress before uploading via [tinypng.com](https://tinypng.com) or [squoosh.app](https://squoosh.app).

## Adjusting overlay opacity

Each section image has a `bg-paper/XX` overlay div underneath the content. The number is the opacity percentage:

- `bg-paper/72` — image shows through clearly (use for brighter, more atmospheric images)
- `bg-paper/85` — image is very subtle (use for dark or busy images that would compete with text)
- `bg-paper/95` — image is barely visible (use only if you're keeping it for texture only)

Find these in the section JSX and adjust as needed.

## Adding more domains

If you use other image hosts (Cloudinary, your own CDN), add them to `next.config.js`:

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' }
  ]
}
```
