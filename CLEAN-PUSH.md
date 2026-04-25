# Clean push — full project bundle

This zip contains the **complete** project (not a patch). Use it to wipe and replace your local working copy, then push everything in one commit. Safer than incremental patches when something has gone out of sync.

## Files in this bundle that are critical for the Manchester page

If the Manchester page is 404ing, one of these is missing or in the wrong place:

```
src/app/locations/manchester/page.tsx       ← the page route
src/components/location-page.tsx            ← the rendering component
src/lib/location-types.ts                   ← TypeScript interface
src/lib/locations/manchester.ts             ← Manchester data
src/lib/locations/index.ts                  ← location index
public/images/pricing-memorial.jpg          ← memorial image (290 KB)
```

## Clean push procedure

```bash
# 1. Move into project, take a quick safety backup of your local state
cd ~
mv basiccremation.co.uk basiccremation.co.uk.backup-$(date +%Y%m%d-%H%M%S)

# 2. Make a fresh empty folder
mkdir basiccremation.co.uk
cd basiccremation.co.uk

# 3. Initialise git and connect to your existing GitHub repo
git init
git remote add origin https://github.com/darinbutler/basiccremation.co.uk.git
git branch -M main

# 4. Pull just the .git history without files (so we don't lose remote knowledge)
git fetch origin
git reset --soft origin/main

# 5. Now unzip the bundle into this folder — overwriting all files
unzip -o ~/Downloads/basiccremation-FULL-BUNDLE.zip -d .

# 6. Stage everything and commit
git add -A
git status                          # ← REVIEW what's about to be committed
git commit -m "Full project sync: restyled homepage + Manchester location page"
git push origin main --force-with-lease
```

The `--force-with-lease` is safe — it only overwrites if the remote hasn't changed since your last fetch. If it complains, swap to `--force` (you'll lose any uncommitted remote changes, but there shouldn't be any).

## Simpler procedure (if the above feels risky)

If you'd rather just unzip over your existing folder:

```bash
cd ~/basiccremation.co.uk
unzip -o ~/Downloads/basiccremation-FULL-BUNDLE.zip -d .
git add -A
git status                          # ← VERIFY all the expected files appear
git commit -m "Full project sync"
git push
```

## After the push

1. Wait ~60 seconds for Vercel to deploy
2. Check Vercel dashboard — the build should pass cleanly
3. Test these URLs:
   - https://basiccremation-co-uk.vercel.app/  (homepage with new images)
   - https://basiccremation-co-uk.vercel.app/locations/manchester  (the new long-format page)
4. If Manchester is still 404, check the Vercel build logs for missing-file errors

## What's NOT in this bundle

- `node_modules/` — install with `npm install` if you don't already have one locally
- `.next/` — Vercel rebuilds this on every deploy
- `package-lock.json` — Vercel will regenerate, or your existing one stays put

## Don't worry about

- The bundle is 343 KB compressed because of the memorial JPG
- The `public/images/` folder is new — that's expected
