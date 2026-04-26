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
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-300 animate-pulse" aria-hidden></span>
            <span>Trusted local funeral directors</span>
          </span>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-ink-100 bg-paper sticky top-0 z-40 backdrop-blur-sm bg-paper/95 shadow-soft">
        <div className="container-page py-4 flex items-center justify-between gap-4 relative">
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
            {/* Locations — pure-CSS hover mega menu */}
            <div className="group">
              <Link href="/locations" className="text-ink-700 no-underline hover:text-cta transition-colors inline-flex items-center gap-1">
                Locations
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Mega menu panel */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                <div className="bg-paper border border-sage-200 rounded-xl shadow-cardHover w-[min(960px,90vw)] p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1">
                    {[
                      { region: "Top 10", cities: [
                        ["London", "london"], ["Birmingham", "birmingham"], ["Manchester", "manchester"],
                        ["Leeds", "leeds"], ["Liverpool", "liverpool"], ["Sheffield", "sheffield"],
                        ["Bristol", "bristol"], ["Cardiff", "cardiff"], ["Newcastle", "newcastle"], ["Nottingham", "nottingham"]
                      ]},
                      { region: "Midlands & North", cities: [
                        ["Leicester", "leicester"], ["Coventry", "coventry"], ["Wolverhampton", "wolverhampton"],
                        ["Derby", "derby"], ["Stoke-on-Trent", "stoke-on-trent"], ["Northampton", "northampton"],
                        ["Bolton", "bolton"], ["Sunderland", "sunderland"], ["Hull", "hull"], ["York", "york"]
                      ]},
                      { region: "South & East", cities: [
                        ["Reading", "reading"], ["Brighton", "brighton"], ["Southampton", "southampton"],
                        ["Plymouth", "plymouth"], ["Milton Keynes", "milton-keynes"], ["Luton", "luton"],
                        ["Swindon", "swindon"], ["Norwich", "norwich"], ["Portsmouth", "portsmouth"], ["Peterborough", "peterborough"]
                      ]},
                      { region: "South Coast & Wales", cities: [
                        ["Bournemouth", "bournemouth"], ["Southend", "southend"], ["Oxford", "oxford"],
                        ["Cambridge", "cambridge"], ["Swansea", "swansea"], ["Newport", "newport"], ["Wrexham", "wrexham"]
                      ]}
                    ].map((column) => (
                      <div key={column.region}>
                        <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold mb-3">
                          {column.region}
                        </p>
                        <ul className="space-y-1.5">
                          {column.cities.map(([label, slug]) => (
                            <li key={slug}>
                              <Link href={`/locations/${slug}`} className="text-sm text-ink-700 no-underline hover:text-cta hover:underline transition-colors">
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-sage-200 flex items-center justify-between">
                    <p className="text-sm text-ink-500">Don&rsquo;t see your area? We cover the wider UK — call us.</p>
                    <Link href="/locations" className="text-sm text-cta font-semibold no-underline hover:underline">
                      View all locations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
