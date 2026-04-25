# basiccremation.co.uk

Information site helping families arrange a basic cremation in England, Scotland, and Wales. Phone-first, lead-generation site driving 24/7 inbound calls.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown files in `src/content/` (added in Batch 2)
- **Form delivery:** Resend (added in Batch 2)
- **Hosting:** Vercel (auto-deploy on push to `main`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in.

| Variable | Required for | Notes |
|---|---|---|
| `RESEND_API_KEY` | Callback form | Free tier: 3,000 emails/month at [resend.com](https://resend.com) |
| `CALLBACK_EMAIL_TO` | Callback form | Where form submissions are emailed |
| `NEXT_PUBLIC_SITE_URL` | Sitemap, OpenGraph | Default: `https://basiccremation.co.uk` |
| `NEXT_PUBLIC_PHONE` | Phone CTAs | Default: `0333 242 1405` |

None are strictly required for the build to succeed — defaults will be used.

## Deployment

1. Push to `main` &mdash; Vercel auto-deploys
2. Set environment variables in Vercel dashboard once `RESEND_API_KEY` is provisioned
3. Point custom domain (`basiccremation.co.uk`) to Vercel project after review

## Architecture notes

- All routes are statically generated where possible
- `src/lib/site-config.ts` holds the central config (phone, price, locations)
- `src/components/` holds shared UI; one file per component
- `src/lib/content.ts` parses markdown for advisory and location pages (Batch 2 onwards)
- Footer disclaimer in `src/components/site-footer.tsx` is the legal/transparency layer &mdash; do not edit casually

## Build batches

This project is being built in iterative batches:

- **Batch 1 (current):** scaffold, design system, homepage, footer disclaimer, placeholder pages, sitemap/robots, privacy &amp; terms
- **Batch 2:** prices page, advisory content, callback form with Resend, Manchester city page (template)
- **Batch 3:** Tier 1 city pages (32 more cities), regional landing pages
- **Batch 4:** Tier 2 cities, FAQ expansion, Trustpilot widget, schema markup
