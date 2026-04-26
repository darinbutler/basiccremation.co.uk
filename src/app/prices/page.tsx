import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: `Basic Cremation Prices | £${siteConfig.basePrice.toLocaleString()} all-inclusive`,
  description: `One simple, all-inclusive price of £${siteConfig.basePrice.toLocaleString()} for a basic cremation in England and Wales. No hidden fees, no upselling, no extras at the door.`
};

const PRICE_HERO =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2000&q=75";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/prices#service`,
  serviceType: "Direct Cremation",
  name: "Basic Cremation Service",
  description: `An all-inclusive direct cremation in England, Scotland or Wales for £${siteConfig.basePrice.toLocaleString()}. Local funeral director, local crematorium, no service, no procession, no hidden costs.`,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: [
    { "@type": "Country", name: "England" },
    { "@type": "Country", name: "Scotland" },
    { "@type": "Country", name: "Wales" }
  ],
  offers: {
    "@type": "Offer",
    name: "Basic Cremation",
    description: "All-inclusive basic cremation: funeral director fees, collection, coffin, cremation fee, and paperwork.",
    price: siteConfig.basePrice,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31"
  }
};

const totalWithPriority = siteConfig.basePrice + siteConfig.priorityCarePrice;
const traditionalFuneralCost = 4510; // SunLife Cost of Dying Report 2026 — for comparison

export default function PricesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Prices", url: "/prices" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={PRICE_HERO} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-14 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">Prices</p>
            <h1 className="mb-5 balance">One clear price. Everything included.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              A basic cremation through us costs £{siteConfig.basePrice.toLocaleString()}. No hidden fees, no extras at the funeral home, no surprise paperwork charges.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING TIERS — bold, mobile-first, two-card comparison */}
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-3 font-semibold">
              Two scenarios, one fair price
            </p>
            <h2 className="mb-3 balance">What you&rsquo;ll pay, depending on where your loved one is</h2>
            <p className="text-base md:text-lg text-ink-700 leading-relaxed pretty">
              The base price covers collection from a hospital or coroner&rsquo;s mortuary. Collection from a home, hospice or care home requires an extra Priority Care fee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {/* Standard tier — sage gradient, big number */}
            <div className="relative bg-gradient-to-br from-sage-700 to-sage-800 text-paper rounded-2xl overflow-hidden shadow-card">
              <div className="absolute top-0 left-0 right-0 bg-coral-400 text-ink-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 text-center">
                Most common
              </div>
              <div className="p-7 md:p-9 pt-12 md:pt-14">
                <p className="text-xs uppercase tracking-wider text-coral-200 font-semibold mb-2">
                  Standard collection
                </p>
                <h3 className="text-paper text-2xl md:text-3xl mb-4 font-medium leading-tight">
                  From a hospital or coroner&rsquo;s mortuary
                </h3>
                <div className="my-6 md:my-8">
                  <p className="font-serif text-6xl md:text-7xl font-medium text-paper leading-none">
                    £{siteConfig.basePrice.toLocaleString()}
                  </p>
                  <p className="text-sm text-paper/80 mt-2">All-inclusive. No extras.</p>
                </div>
                <ul className="space-y-2.5 text-[15px] text-paper/95 leading-snug">
                  {[
                    "Local independent funeral director",
                    "Collection from the hospital",
                    "Care at the funeral home",
                    "A simple coffin for cremation",
                    "Cremation at a local crematorium",
                    "All paperwork & fees",
                    "Ashes returned to you"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 text-coral-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Priority Care tier — paper card with sage accent border */}
            <div className="bg-paper border-2 border-sage-300 rounded-2xl shadow-card p-7 md:p-9 pt-7 md:pt-9 relative">
              <p className="text-xs uppercase tracking-wider text-cta font-semibold mb-2">
                Priority Care collection
              </p>
              <h3 className="text-2xl md:text-3xl mb-4 font-medium leading-tight text-ink-900">
                From a home, hospice or care home
              </h3>
              <div className="my-6 md:my-8">
                <p className="font-serif text-6xl md:text-7xl font-medium text-ink-900 leading-none">
                  £{totalWithPriority.toLocaleString()}
                </p>
                <p className="text-sm text-ink-500 mt-2">
                  £{siteConfig.basePrice.toLocaleString()} + £{siteConfig.priorityCarePrice} Priority Care fee
                </p>
              </div>
              <p className="text-[15px] text-ink-700 leading-relaxed mb-5">
                Everything in the standard package, plus a Priority Care collection from your loved one&rsquo;s residence. Home collections are arranged on shorter notice than hospital collections, which is why a fee applies.
              </p>
              <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 text-sm text-ink-700">
                <strong className="text-ink-900">Always explained on the phone</strong> before anything happens. Never added afterwards.
              </div>
            </div>
          </div>

          {/* Comparison anchor — context */}
          <div className="max-w-2xl mx-auto mt-10 md:mt-14 text-center">
            <p className="text-base md:text-lg text-ink-700 leading-relaxed pretty">
              For context: the average cost of a traditional attended funeral in the UK is{" "}
              <strong className="text-ink-900">£{traditionalFuneralCost.toLocaleString()}</strong>{" "}
              (SunLife Cost of Dying Report 2026). A basic cremation is roughly a third of that.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BADGES — prominent USPs in a sage-700 strip */}
      <section className="bg-sage-700 text-paper">
        <div className="container-page py-10 md:py-14">
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-coral-300 mb-3 font-semibold">
              Why families trust us
            </p>
            <h2 className="text-paper mb-3 balance text-2xl md:text-3xl">Five reasons families call us, day or night.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { stat: `£${siteConfig.basePrice.toLocaleString()}`, label: "All-inclusive price" },
              { stat: "24/7", label: "Phone support" },
              { stat: "NAFD & SAIF", label: "Accredited network" },
              { stat: "0", label: "Hidden fees ever" },
              { stat: "Local", label: "Funeral directors" }
            ].map((b) => (
              <div key={b.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-paper leading-tight mb-1">{b.stat}</p>
                <p className="text-xs md:text-sm text-paper/80 uppercase tracking-wider font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NO SURPRISE CHARGES — image bg + prominent paper-warm cards on a peaceful overlay */}
      <section className="relative overflow-hidden border-y border-ink-100">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2400&q=75" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/96 via-paper-warm/93 to-paper-warm/96"></div>
        </div>
        <div className="relative z-10 container-page py-12 md:py-20">
          <div className="max-w-2xl mb-8 md:mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-3 font-semibold">
              What you won&rsquo;t be asked to pay
            </p>
            <h2 className="mb-4 balance">No surprise charges. No upselling.</h2>
            <p className="prose-content">
              When families call us, they often ask what gets added on later. Here&rsquo;s the honest answer: nothing. There is no &ldquo;coffin upgrade&rdquo;, no embalming charge, no chapel fee, no documentation surcharge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl">
            {[
              "Hidden funeral director fees",
              "Collection from hospital or coroner&rsquo;s mortuary",
              "Coffin upgrade or &lsquo;premium&rsquo; coffin fees",
              "Embalming or preparation charges",
              "Chapel of rest, viewing or service fees",
              "Cremation authority fees or paperwork charges",
              "Doctors&rsquo; medical certificate fees",
              "Ashes return delivery (UK mainland)"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-paper border-2 border-sage-200 rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-soft hover:shadow-card hover:border-sage-300 transition-all">
                <svg className="w-5 h-5 mt-0.5 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <span className="text-ink-900 text-[15px] font-medium leading-snug" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP WITH FUNERAL COSTS */}
      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-12 md:py-20">
          <div className="grid md:grid-cols-12 gap-6 md:gap-12 max-w-5xl">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-cta mb-3 font-semibold">
                Help with costs
              </p>
              <h2 className="mb-0 balance">If money is a worry, you may be entitled to support.</h2>
            </div>
            <div className="md:col-span-8">
              <div className="prose-content text-[17px] md:text-lg space-y-4">
                <p>
                  If you&rsquo;re receiving certain benefits, you may be eligible for help from the
                  Government&rsquo;s <strong>Funeral Expenses Payment</strong> scheme (in England and Wales). It can cover most of the cremation cost and some of the funeral director&rsquo;s fees.
                </p>
                <p>
                  In Scotland the equivalent is the <strong>Funeral Support Payment</strong> from Social Security Scotland.
                </p>
                <p>
                  Eligibility depends on your relationship to the person who has died and the benefits you receive. Call us on{" "}
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold">{siteConfig.phone}</a> and we&rsquo;ll talk you through whether you might qualify before you apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHONE CTA BAND */}
      <section className="bg-sage-700 text-paper">
        <div className="container-page py-10 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">Speak to someone who can help.</h2>
          <p className="text-paper/85 text-base md:text-lg mb-6 md:mb-7 max-w-xl mx-auto pretty">
            We&rsquo;re available 24 hours a day. There&rsquo;s no obligation when you call &mdash; just an honest conversation about what you need.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
