import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <>
      {/* Trust strip — centred, prominent, just availability + accreditation */}
      <div className="bg-sage-800 text-paper py-3 text-sm md:text-[15px]">
        <div className="container-page flex items-center justify-center gap-3 md:gap-6 flex-wrap text-center">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-300 animate-pulse" aria-hidden></span>
            <span>Available 24 hours, 7 days a week</span>
          </span>
          <span className="hidden md:inline opacity-50" aria-hidden>·</span>
          <span className="font-medium">Trusted local funeral directors</span>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-ink-100 bg-paper sticky top-0 z-40 backdrop-blur-sm bg-paper/95 shadow-soft">
        <div className="container-page py-4 flex items-center justify-between gap-4">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-7 text-[15px]">
            <Link href="/what-is-a-basic-cremation" className="text-ink-700 no-underline hover:text-cta transition-colors">
              What is a basic cremation
            </Link>
            <Link href="/prices" className="text-ink-700 no-underline hover:text-cta transition-colors">
              Prices
            </Link>
            <Link href="/help-and-advice" className="text-ink-700 no-underline hover:text-cta transition-colors">
              Help &amp; advice
            </Link>
            <Link href="/locations" className="text-ink-700 no-underline hover:text-cta transition-colors">
              Locations
            </Link>
          </nav>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-paper px-5 py-3 rounded-md no-underline hover:no-underline transition-all shadow-soft hover:shadow-card"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"/>
            </svg>
            <span className="font-serif text-lg leading-none">{siteConfig.phone}</span>
          </a>
        </div>
      </header>
    </>
  );
}
