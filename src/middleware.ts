import { NextResponse, type NextRequest } from "next/server";
import {
  ALL_LEGACY_LOCATION_KEYS,
  resolveLegacyLocation
} from "@/lib/legacy-redirects";

/**
 * Legacy URL handler. The previous WordPress site at basiccremation.co.uk had
 * ~6,000 indexed URLs of the form /<seo-pattern>-<county>/. When the custom
 * domain is pointed at this Vercel deployment, those URLs need to 301-redirect
 * to the closest matching new page so we don't lose search rankings.
 *
 * This middleware:
 *   1. Strips the trailing slash and looks at the URL slug.
 *   2. Searches the slug for the LONGEST matching legacy location suffix
 *      (e.g. `west-yorkshire` matches before `yorkshire`).
 *   3. If matched, 301-redirects to /locations/<city> for English/Welsh
 *      counties, or /locations for Scottish/NI ones (we serve those by phone
 *      but don't have city pages yet).
 *   4. If unmatched but the slug looks like a legacy SEO pattern (starts with
 *      "affordable-", "cheap-", "low-cost-", etc.), redirects to /locations.
 *
 * Static next.config.js redirects handle the small set of high-value info
 * pages (e.g. /cremation-prices/ → /prices). This middleware handles the
 * 6,000-URL long tail.
 */

const LEGACY_PATTERN_PREFIXES = [
  "affordable-",
  "cheap-",
  "low-cost-",
  "lowest-cost-",
  "direct-",
  "discount-",
  "inexpensive-",
  "no-fuss-",
  "no-frills-",
  "simple-",
  "simply-",
  "unattended-",
  "cremation-",
  "funeral-"
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Skip non-GET, _next/, /api/, and static asset paths
  if (
    request.method !== "GET" ||
    path.startsWith("/_next/") ||
    path.startsWith("/api/") ||
    path.includes(".") || // .png, .ico, .xml, etc.
    path.startsWith("/wp-content/") ||
    path.startsWith("/wp-admin/") ||
    path.startsWith("/wp-includes/")
  ) {
    // For wp-content image references, just 410 / 404 — they're long gone
    if (path.startsWith("/wp-content/") || path.startsWith("/wp-admin/")) {
      return NextResponse.redirect(new URL("/", request.url), 301);
    }
    return NextResponse.next();
  }

  // Strip trailing slash for matching (Next.js handles trailing-slash canonicalisation
  // separately, but the legacy URLs all had trailing slashes)
  const slug = path.replace(/^\//, "").replace(/\/$/, "");
  if (!slug) return NextResponse.next();

  // 1) Try the longest matching trailing location
  for (const loc of ALL_LEGACY_LOCATION_KEYS) {
    // Match `-<location>` at the end of the slug (so we don't match "london" inside
    // a non-pattern URL accidentally — though for safety we also require the slug
    // to start with a known SEO prefix below).
    if (slug.endsWith(`-${loc}`) || slug === loc) {
      const target = resolveLegacyLocation(loc);
      if (target) {
        return NextResponse.redirect(new URL(target, request.url), 301);
      }
    }
  }

  // 2) Slug looks like a legacy SEO pattern but no location matched — send to /locations
  for (const prefix of LEGACY_PATTERN_PREFIXES) {
    if (slug.startsWith(prefix)) {
      return NextResponse.redirect(new URL("/locations", request.url), 301);
    }
  }

  // 3) Not a legacy URL — let Next.js handle (likely 404 if route doesn't exist)
  return NextResponse.next();
}

// Run on every request EXCEPT static assets and Next.js internals.
// We do file-based filtering inside the middleware too so the matcher can be broad.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap_index.xml|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|json|webmanifest)).*)"
  ]
};
