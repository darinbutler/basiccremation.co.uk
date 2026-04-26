import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allLocations } from "@/lib/locations";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Locations We Cover | Basic Cremation Across the UK",
  description:
    "We arrange basic cremations across England, Scotland and Wales. Find your nearest location or call us to confirm coverage in your area.",
  alternates: { canonical: "/locations" }
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2400&q=75";
const LIST_BG_IMAGE =
  "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=2400&q=75";

export default function LocationsIndex() {
  const sortedLocations = Object.values(allLocations).sort((a, b) =>
    a.city.localeCompare(b.city)
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" }
        ]}
      />

      {/* HERO — image background, scrim, large heading */}
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">
              Locations
            </p>
            <h1 className="mb-6 balance">A basic cremation, anywhere in the UK.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              We arrange basic cremations across England, Scotland and Wales &mdash; through a network of
              trusted independent local funeral directors and crematoria. The price is the same wherever
              you are: &pound;{siteConfig.basePrice.toLocaleString()} all-inclusive.
            </p>
          </div>
        </div>
      </section>

      {/* CITIES LISTING — image background, paper-warm overlay so cards remain readable */}
      <section className="relative overflow-hidden border-y border-ink-100">
        <div className="absolute inset-0 z-0">
          <Image src={LIST_BG_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/96 via-paper-warm/93 to-paper-warm/96"></div>
        </div>

        <div className="relative z-10 container-page py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-3 font-semibold">
              {sortedLocations.length} cities &amp; growing
            </p>
            <h2 className="mb-4 balance">Find your nearest location</h2>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              Tap a city for local crematoria, register office details, hospital bereavement contacts and FAQs.
            </p>
          </div>

          {sortedLocations.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
              {sortedLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="block bg-paper border border-sage-200 rounded-xl p-4 md:p-5 no-underline hover:no-underline shadow-soft hover:shadow-card hover:-translate-y-0.5 hover:border-sage-300 transition-all group"
                >
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-1 text-cta flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.7 14.7A8 8 0 1 0 6.3 14.7l5.7 6.3 5.7-6.3z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                    <div className="min-w-0">
                      <p className="font-serif text-base md:text-lg text-ink-900 group-hover:text-cta transition-colors leading-snug">
                        {location.city}
                      </p>
                      <p className="text-xs text-ink-500 mt-0.5 leading-snug">{location.region}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-ink-700 text-center">Location pages are coming soon.</p>
          )}

          <div className="mt-10 md:mt-12 max-w-2xl mx-auto text-center">
            <p className="text-base text-ink-700 leading-relaxed">
              Don&rsquo;t see your area? We almost certainly cover it &mdash; call us on{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="text-cta font-semibold no-underline hover:underline">
                {siteConfig.phone}
              </a>{" "}
              to confirm coverage. We operate across the whole of England, Scotland and Wales.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <PhoneCTA
            variant="dark"
            heading="Speak to us today"
            body="There's always someone available to talk you through what needs to happen. Calls are answered day and night, every day of the year."
          />
        </div>
      </section>
    </>
  );
}
