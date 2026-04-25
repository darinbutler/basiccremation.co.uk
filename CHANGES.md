# Batch 2.2.1 — bereavement support overlay fix (FULL BUNDLE)

## What's in this bundle (cumulative — drops over Batch 2.2)
All of Batch 2.2 (Manchester template polish + image heros on whats-included/contact/faqs)
plus one fix:

### Bereavement Support overlay — image now actually visible
The previous `bg-paper/85` overlay made the bright image only 15% visible. Replaced with a horizontal gradient: `from-paper/92` on the left (preserves text legibility) → `via-paper/72` middle → `to-paper/55` on the right (lets the image read through).

Affected file: `src/components/location-page.tsx`

This change inherits to all 37 city pages built from the template.

## Other notes
- Backlog now in memory: favicon, page metadata audit, schema (Organization, BreadcrumbList, Article/HowTo, Service), author schema for E-E-A-T, internal linking strategy across Tier 1 + Tier 2, region clusters, sitemap. To be tackled in future batches once Phase A polish is complete.
