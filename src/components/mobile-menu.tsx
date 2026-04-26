"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const NAV_ITEMS = [
  { label: "What is a basic cremation", href: "/what-is-a-basic-cremation" },
  { label: "Prices", href: "/prices" },
  { label: "What's included", href: "/whats-included" },
  { label: "Help & advice", href: "/help-and-advice" },
  { label: "Locations", href: "/locations" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" }
];

const HELP_AND_ADVICE_CHILDREN = [
  { label: "When someone dies", href: "/help-and-advice/what-to-do-when-someone-dies" },
  { label: "Registering a death (E&W)", href: "/help-and-advice/registering-a-death-england-wales" },
  { label: "Registering a death (Scotland)", href: "/help-and-advice/registering-a-death-scotland" },
  { label: "Coroner & Procurator Fiscal", href: "/help-and-advice/coroner-and-procurator-fiscal" }
];

const TOP_CITIES = [
  ["London", "london"], ["Birmingham", "birmingham"], ["Manchester", "manchester"],
  ["Leeds", "leeds"], ["Liverpool", "liverpool"], ["Bristol", "bristol"],
  ["Cardiff", "cardiff"], ["Newcastle", "newcastle"]
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Hamburger button — mobile + tablet only */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-ink-900 hover:bg-sage-50 transition-colors"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          {/* Backdrop */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
            aria-label="Close menu"
            tabIndex={-1}
          />

          {/* Menu panel — slides in from right */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-paper shadow-cardHover overflow-y-auto animate-slide-in-right">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100 sticky top-0 bg-paper z-10">
              <span className="font-serif text-lg font-semibold text-ink-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-700 hover:bg-sage-50 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Phone CTA — top of menu */}
            <div className="px-5 py-5 bg-sage-700 text-paper">
              <p className="text-xs uppercase tracking-wider text-coral-200 font-semibold mb-2">
                Call any time, day or night
              </p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-3 text-paper no-underline hover:no-underline"
                onClick={() => setOpen(false)}
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z" />
                </svg>
                <span className="font-serif text-2xl">{siteConfig.phone}</span>
              </a>
              <p className="text-sm text-paper/75 mt-1">24 hours, 7 days a week</p>
            </div>

            {/* Main nav */}
            <nav className="px-2 py-3" aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-3.5 text-base font-medium text-ink-900 no-underline hover:bg-sage-50 hover:text-cta rounded-md transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Help & advice subitems */}
              <div className="mt-2 px-3 py-2 border-t border-ink-100">
                <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold mb-2 mt-3">
                  Help &amp; advice topics
                </p>
                <ul className="flex flex-col">
                  {HELP_AND_ADVICE_CHILDREN.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-2 py-2.5 text-sm text-ink-700 no-underline hover:text-cta rounded-md transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top cities — quick access */}
              <div className="mt-2 px-3 py-2 border-t border-ink-100">
                <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold mb-2 mt-3">
                  Top locations
                </p>
                <ul className="grid grid-cols-2 gap-x-2">
                  {TOP_CITIES.map(([label, slug]) => (
                    <li key={slug}>
                      <Link
                        href={`/locations/${slug}`}
                        className="block px-2 py-2 text-sm text-ink-700 no-underline hover:text-cta transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/locations"
                  className="block mt-2 px-2 py-2 text-sm text-cta font-semibold no-underline hover:underline"
                  onClick={() => setOpen(false)}
                >
                  View all 73 locations →
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
