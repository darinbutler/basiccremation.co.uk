# Batch 8 — Mobile hamburger menu

## What was missing
Mobile and tablet users had no navigation. The desktop nav was `hidden lg:flex` (only visible at ≥1024px), but no mobile fallback was ever built. The bottom-of-page phone bar (`mobile-call-bar.tsx`) gave users a way to call but no way to navigate to /prices, /faqs, /locations, etc.

## What this bundle adds

### New file: `src/components/mobile-menu.tsx` ("use client")
A slide-in-from-right overlay menu containing:
- **Sticky top bar** with "Menu" title and close (X) button
- **Phone CTA at the top** (sage-700 dark band, big serif phone number, "Call any time, day or night")
- **Main nav items**: What is, Prices, What's included, Help & advice, Locations, FAQs, Contact
- **Help & advice subitems**: When someone dies, Registering a death (E&W), Registering a death (Scotland), Coroner & PF
- **Top locations**: 8 most-searched cities + "View all 73 locations" link

UX details:
- Hamburger button is 44×44px (Apple's recommended minimum touch target)
- Body scroll locked while menu open
- Closes on Escape key
- Closes when any nav link is tapped
- Backdrop is dimmed + blurred; tapping it closes the menu
- Smooth slide-in animation (250ms ease-out) — added to globals.css

### Updated: `src/components/site-header.tsx`
Wraps the right-side header content in a flex container so the desktop phone CTA (visible from md) sits next to the new hamburger button (visible up to lg-1). Right-side composition by breakpoint:

| Breakpoint | Logo | Desktop nav | Phone CTA | Hamburger |
|---|---|---|---|---|
| Mobile (<768px) | ✓ | hidden | hidden | ✓ |
| Tablet (768-1023px) | ✓ | hidden | ✓ | ✓ |
| Desktop (≥1024px) | ✓ | ✓ | ✓ | hidden |

### Updated: `src/app/globals.css`
Added `slideInRight` keyframe + `.animate-slide-in-right` utility class for the menu panel animation.

## Mobile journey is now complete
- Top of page: branded sticky header with hamburger
- Tap hamburger → menu slides in with phone CTA prominent at top
- Bottom of page: persistent phone bar (existing `mobile-call-bar.tsx`)
- Mobile users can either call directly (one tap from the bottom bar) or navigate via the menu
