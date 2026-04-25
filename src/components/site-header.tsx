import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="border-b border-ink-300/30 bg-paper-warm sticky top-0 z-40 backdrop-blur-sm bg-paper-warm/95">
      <div className="max-w-page mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl md:text-3xl text-ink-900 no-underline">
          Basic Cremation
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/what-is-a-basic-cremation" className="text-ink-700 no-underline hover:text-ink-900">
            What is a basic cremation
          </Link>
          <Link href="/prices" className="text-ink-700 no-underline hover:text-ink-900">
            Prices
          </Link>
          <Link href="/help-and-advice" className="text-ink-700 no-underline hover:text-ink-900">
            Help &amp; advice
          </Link>
          <Link href="/locations" className="text-ink-700 no-underline hover:text-ink-900">
            Locations
          </Link>
        </nav>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="hidden md:flex flex-col items-end no-underline group"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <span className="text-xs text-ink-500 uppercase tracking-wide">24 hours, every day</span>
          <span className="font-serif text-2xl text-accent-dark group-hover:text-accent">
            {siteConfig.phone}
          </span>
        </a>
      </div>
    </header>
  );
}
