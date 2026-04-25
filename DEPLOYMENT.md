# Deployment runbook — Batch 1

This is a one-time set of steps to get Batch 1 deployed and live on Vercel. Total time: about 5 minutes.

## Step 1: Extract the zip into your repo

```bash
# In your local machine, navigate to where you want the project to live
cd ~

# Clone your empty GitHub repo (skip if already cloned)
git clone git@github.com:darinbutler/basiccremation.co.uk.git
# Or via HTTPS:
# git clone https://github.com/darinbutler/basiccremation.co.uk.git

# Unzip the Batch 1 contents into the cloned repo
# (Replace path-to-zip with wherever you saved the download)
cd basiccremation.co.uk
unzip ~/Downloads/basiccremation-batch-1.zip -d .
```

After unzipping, your repo should look like this at the top level:

```
basiccremation.co.uk/
├── .env.example
├── .gitignore
├── README.md
├── DEPLOYMENT.md           <-- this file
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── public/
└── src/
    ├── app/
    ├── components/
    ├── content/
    └── lib/
```

## Step 2: Test locally (optional but recommended)

```bash
npm install
npm run dev
```

Open http://localhost:3000. You should see the homepage with phone CTA at the top, content sections, and the footer disclaimer at the bottom. The sticky mobile call bar appears when you narrow the browser to mobile width or open dev tools mobile view.

If everything looks right, stop the dev server (Ctrl-C) and continue to Step 3.

## Step 3: Push to GitHub

```bash
git add .
git commit -m "Batch 1: project foundation, homepage, design system, footer disclaimer"
git push -u origin main
```

## Step 4: Verify Vercel deployment

Vercel auto-deploys on push. Within about 60 seconds:

1. Open your Vercel dashboard at https://vercel.com/dashboard
2. You should see the new deployment in progress for the `basiccremation.co.uk` project
3. When it goes green, click the preview URL (e.g. `basiccremation-co-uk-xxxxx.vercel.app`)

You should see the homepage live.

## Step 5: Set environment variables in Vercel (do this now to save a future deploy)

In the Vercel dashboard for this project:

1. Go to **Settings → Environment Variables**
2. Add the following (all four can be added in one go):

| Name | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_PHONE` | `0333 242 1405` | The displayed phone number |
| `NEXT_PUBLIC_SITE_URL` | `https://basiccremation.co.uk` | Used for sitemap and OpenGraph |
| `RESEND_API_KEY` | (provision later) | Add when callback form goes live in Batch 2 |
| `CALLBACK_EMAIL_TO` | (your email) | Where form submissions go |

The first two have safe defaults so the site works even without them being set. The Resend variables are used by Batch 2 onwards.

## Step 6: Custom domain (do this AFTER reviewing the preview)

Once you've reviewed the preview URL and you're happy:

1. In Vercel dashboard → **Settings → Domains**
2. Add `basiccremation.co.uk`
3. Vercel will show DNS instructions (usually an A record or CNAME)
4. Set those records in your domain registrar
5. Wait for DNS to propagate (up to a few hours, usually under 30 minutes)

## What to expect on the live site

**Working pages:**
- `/` — full homepage
- `/privacy` — proper privacy policy
- `/terms` — proper terms of use

**Placeholder pages** (filled in Batch 2):
- `/what-is-a-basic-cremation`
- `/prices`
- `/whats-included`
- `/faqs`
- `/locations`
- `/contact`
- `/help-and-advice` and all sub-pages

These all show a polite "We're putting this page together" message with a phone CTA, so they don't 404.

## What's coming in Batch 2

After you sign off Batch 1:

1. Full prices page with the proper price structure (£1,499 base + £250 Priority Care)
2. "What is a basic cremation" full-length advisory page
3. "What's included" page
4. "What to do when someone dies" — first major advisory page
5. "Registering a death — England & Wales" advisory page
6. "Registering a death — Scotland" advisory page
7. The Manchester city page — the template the other 32 will follow
8. Callback form on `/contact` with Resend integration

After Batch 2 is reviewed, Batch 3 generates the remaining 32 Tier 1 city pages from the Manchester template.

## Troubleshooting

**Vercel build fails:** Check the build logs in the Vercel dashboard. The most common cause is a missing dependency — run `npm install` locally first to confirm the project builds before pushing.

**Sticky mobile call bar overlapping content:** That's expected — the `<main>` has `pb-24` padding-bottom on mobile to clear the bar. If you see overlap, check that `<MobileCallBar />` is rendering inside the layout.

**Phone link doesn't dial on Android:** Click-to-call works on all Android browsers but some Android dialler apps need the user to confirm before dialling. That's normal Android behaviour.

---

Reach out via the chat if anything doesn't behave as expected on the preview.
