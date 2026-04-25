import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-300/30 bg-paper-warm mt-16">
      <div className="max-w-page mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-serif text-xl mb-2">Basic Cremation</p>
            <p className="text-sm text-ink-500 mb-4">
              Help arranging a simple cremation across England, Scotland and Wales.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="font-serif text-xl text-accent-dark no-underline"
            >
              {siteConfig.phone}
            </a>
            <p className="text-xs text-ink-500 mt-1">Available 24 hours a day</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900 mb-3">Information</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-is-a-basic-cremation" className="text-ink-700 no-underline hover:underline">
                  What is a basic cremation
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-ink-700 no-underline hover:underline">
                  Prices
                </Link>
              </li>
              <li>
                <Link href="/whats-included" className="text-ink-700 no-underline hover:underline">
                  What&rsquo;s included
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-ink-700 no-underline hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900 mb-3">Help &amp; advice</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help-and-advice/what-to-do-when-someone-dies"
                  className="text-ink-700 no-underline hover:underline"
                >
                  When someone dies
                </Link>
              </li>
              <li>
                <Link
                  href="/help-and-advice/registering-a-death-england-wales"
                  className="text-ink-700 no-underline hover:underline"
                >
                  Registering a death (England &amp; Wales)
                </Link>
              </li>
              <li>
                <Link
                  href="/help-and-advice/registering-a-death-scotland"
                  className="text-ink-700 no-underline hover:underline"
                >
                  Registering a death (Scotland)
                </Link>
              </li>
              <li>
                <Link
                  href="/help-and-advice/coroner-and-procurator-fiscal"
                  className="text-ink-700 no-underline hover:underline"
                >
                  Coroner &amp; Procurator Fiscal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900 mb-3">Site</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/locations" className="text-ink-700 no-underline hover:underline">
                  All locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-700 no-underline hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-ink-700 no-underline hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-ink-700 no-underline hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-300/30 pt-8 space-y-4 text-xs text-ink-500 leading-relaxed max-w-prose">
          <div>
            <p className="font-semibold text-ink-700 mb-2">How this site works</p>
            <p>
              Basic Cremation is an information site that helps families arrange a simple, dignified
              cremation in England, Scotland and Wales. When you call the number listed on this site,
              you&rsquo;ll speak to a service provider who arranges cremations through a network of
              trusted, independent local funeral directors and crematoria. Basic Cremation may receive
              consideration for connecting families with this service. This does not affect the prices
              you pay or the information presented on this site.
            </p>
          </div>
          <div>
            <p>
              The information on this site is intended as general guidance for families arranging a
              cremation in England, Scotland or Wales. Prices and inclusions are accurate at the time
              of publication; please confirm the latest details with the team by phone. We do not
              provide regulated financial or legal advice and we do not sell pre-paid funeral plans.
            </p>
          </div>
          <p>&copy; {new Date().getFullYear()} Basic Cremation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
