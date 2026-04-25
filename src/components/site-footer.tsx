import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-sage-800 text-paper mt-20">
      {/* Top CTA strip */}
      <div className="border-b border-sage-700">
        <div className="container-page py-12 md:py-16 grid md:grid-cols-2 gap-8 md:items-center">
          <div>
            <h3 className="text-paper mb-2">Need help arranging a cremation?</h3>
            <p className="text-paper/80 leading-relaxed">
              Our team is here to listen and help you understand what needs to happen. No pressure, no jargon.
            </p>
          </div>
          <div className="md:text-right">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-3 bg-paper hover:bg-paper-warm text-cta px-6 py-4 rounded-md no-underline hover:no-underline font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"/>
              </svg>
              <span className="font-serif text-2xl">{siteConfig.phone}</span>
            </a>
            <p className="text-sm text-paper/70 mt-2">Available 24 hours a day, every day</p>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl text-paper no-underline hover:no-underline tracking-tight inline-block mb-3"
            >
              Basic <span className="text-sage-300">Cremation</span>
            </Link>
            <p className="text-sm text-paper/70 leading-relaxed">
              Help arranging a simple, dignified cremation across England, Scotland and Wales.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper mb-4 uppercase tracking-wider">
              Information
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["What is a basic cremation", "/what-is-a-basic-cremation"],
                ["Prices", "/prices"],
                ["What's included", "/whats-included"],
                ["FAQs", "/faqs"]
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-paper/75 no-underline hover:text-paper hover:underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper mb-4 uppercase tracking-wider">
              Help &amp; advice
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["When someone dies", "/help-and-advice/what-to-do-when-someone-dies"],
                ["Registering a death (E&W)", "/help-and-advice/registering-a-death-england-wales"],
                ["Registering a death (Scotland)", "/help-and-advice/registering-a-death-scotland"],
                ["Coroner & Procurator Fiscal", "/help-and-advice/coroner-and-procurator-fiscal"]
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-paper/75 no-underline hover:text-paper hover:underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper mb-4 uppercase tracking-wider">
              Site
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["All locations", "/locations"],
                ["Contact", "/contact"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"]
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-paper/75 no-underline hover:text-paper hover:underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer block */}
        <div className="border-t border-sage-700 pt-8 space-y-4 text-xs text-paper/60 leading-relaxed max-w-prose">
          <div>
            <p className="font-semibold text-paper/90 mb-2 uppercase tracking-wider text-[11px]">
              How this site works
            </p>
            <p>
              Basic Cremation is an information site that helps families arrange a simple, dignified cremation in England,
              Scotland and Wales. When you call the number listed on this site, you&rsquo;ll speak to a service provider
              who arranges cremations through a network of trusted, independent local funeral directors and crematoria.
              Basic Cremation may receive consideration for connecting families with this service. This does not affect
              the prices you pay or the information presented on this site.
            </p>
          </div>
          <p>
            The information on this site is intended as general guidance for families arranging a cremation in England,
            Scotland or Wales. Prices and inclusions are accurate at the time of publication; please confirm the latest
            details with the team by phone. We do not provide regulated financial or legal advice and we do not sell
            pre-paid funeral plans.
          </p>
          <p className="pt-2">&copy; {new Date().getFullYear()} Basic Cremation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
