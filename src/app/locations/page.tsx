import type { Metadata } from "next";
import Link from "next/link";
import { allLocations } from "@/lib/locations";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Locations We Cover | Basic Cremation Across the UK",
  description:
    "We arrange basic cremations across England, Scotland and Wales. Find your nearest location or call us to confirm coverage in your area.",
  alternates: { canonical: "/locations" }
};

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
      {/* Header */}
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-prose">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              Locations
            </p>
            <h1 className="mb-6 balance">A basic cremation, anywhere in the UK.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              We arrange basic cremations across England, Scotland and Wales &mdash; through a network of
              trusted independent local funeral directors and crematoria. The price is the same wherever
              you are: &pound;1,499 all-inclusive.
            </p>
          </div>
        </div>
      </section>

      {/* Cities listing */}
      <section className="container-page py-14 md:py-20">
        <div className="max-w-narrow">
          <h2 className="mb-8">Find your nearest location</h2>

          {sortedLocations.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="block bg-paper-warm border border-sage-200 rounded-xl p-5 no-underline hover:no-underline shadow-soft hover:shadow-card hover:-translate-y-0.5 hover:border-sage-300 transition-all group"
                >
                  <p className="font-serif text-xl text-ink-900 group-hover:text-cta transition-colors mb-1">
                    {location.city}
                  </p>
                  <p className="text-sm text-ink-500">{location.region}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-ink-700">Location pages are coming soon.</p>
          )}

          <div className="mt-12 prose-content">
            <p>
              Don&rsquo;t see your area? We almost certainly cover it. Call us on{" "}
              <a href="tel:03332421405" className="font-medium">
                0333 242 1405
              </a>{" "}
              to confirm coverage in your area &mdash; we operate across the whole of England,
              Scotland and Wales.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page pb-14 md:pb-20">
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
