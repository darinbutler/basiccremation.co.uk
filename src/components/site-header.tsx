import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <>
      {/* Trust strip — small reassurance bar above the main header */}
      <div className="trust-strip">
        <div className="container-page flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-6 text-paper/90">
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage-300 animate-pulse" aria-hidden></span>
              Available 24 hours, every day
            </span>
            <span className="hidden md:inline">Trusted local funeral directors</span>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="text-paper hover:text-paper no-underline hover:underline font-medium"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-ink-200 bg-paper sticky top-0 z-40 backdrop-blur-sm bg-paper/95 shadow-soft">
        <div className="container-page py-5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl text-ink-900 no-underline hover:no-underline tracking-tight"
          >
            Basic <span className="text-cta">Cremation</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[15px]">
            <Link
              href="/what-is-a-basic-cremation"
              className="text-ink-700 no-underline hover:text-cta transition-colors"
            >
              What is a basic cremation
            </Link>
            <Link
              href="/prices"
              className="text-ink-700 no-underline hover:text-cta transition-colors"
            >
              Prices
            </Link>
            <Link
              href="/help-and-advice"
              className="text-ink-700 no-underline hover:text-cta transition-colors"
            >
              Help &amp; advice
            </Link>
            <Link
              href="/locations"
              className="text-ink-700 no-underline hover:text-cta transition-colors"
            >
              Locations
            </Link>
          </nav>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-paper px-5 py-3 rounded-md no-underline hover:no-underline transition-colors shadow-soft"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"
              />
            </svg>
            <span className="font-serif text-lg">{siteConfig.phone}</span>
          </a>
        </div>
      </header>
    </>
  );
}
