import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: `Basic Cremation Prices | £${siteConfig.basePrice.toLocaleString()} all-inclusive`,
  description: `One simple, all-inclusive price of £${siteConfig.basePrice.toLocaleString()} for a basic cremation in England and Wales. No hidden fees, no upselling, no extras at the door.`
};

const PRICE_HERO =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2000&q=75";

export default function PricesPage() {
  return (
    <>
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={PRICE_HERO} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">Prices</p>
            <h1 className="mb-6 balance">One clear price. Everything included.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              A basic cremation through us costs £{siteConfig.basePrice.toLocaleString()}. There are
              no hidden fees, no extras added at the funeral home, and no surprise paperwork charges.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              The all-inclusive price
            </p>
            <h2 className="mb-6 balance">£{siteConfig.basePrice.toLocaleString()} covers everything we do.</h2>
            <p className="prose-content mb-6">
              We believe a basic cremation should have one price, and that price should be the price
              you pay. The figure below is the figure on your invoice.
            </p>

            <div className="bg-paper-warm border-2 border-sage-200 rounded-2xl p-7 md:p-9 mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-base text-ink-700">Basic cremation</span>
                <span className="text-3xl font-serif text-ink-900">
                  £{siteConfig.basePrice.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-ink-500">
                Includes the funeral director&rsquo;s fees, collection, care, the coffin, the
                cremation fee and all paperwork. No church service, no procession, no extras.
              </p>
            </div>

            <p className="prose-content">
              For a full list of what&rsquo;s included, see our{" "}
              <Link href="/whats-included">what&rsquo;s included</Link> page.
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-2xl p-7 md:p-8">
            <h3 className="mb-4">Optional priority care</h3>
            <p className="prose-content mb-5">
              If you would like your loved one to be collected within hours rather than within
              one to two working days, we offer a priority care service.
            </p>
            <div className="flex items-baseline justify-between border-t border-sage-200 pt-4">
              <span className="text-base text-ink-700">Priority care</span>
              <span className="text-2xl font-serif text-ink-900">
                +£{siteConfig.priorityCarePrice}
              </span>
            </div>
            <p className="text-sm text-ink-500 mt-2">
              Added to the £{siteConfig.basePrice.toLocaleString()} base price. Optional &mdash; not required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-2xl mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              What you won&rsquo;t be asked to pay
            </p>
            <h2 className="mb-4 balance">No surprise charges. No upselling.</h2>
            <p className="prose-content">
              When families call us they often ask what gets added on later. Here&rsquo;s the honest answer:
              nothing. There is no &ldquo;coffin upgrade&rdquo;, no embalming charge, no chapel fee,
              no documentation surcharge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Hidden funeral director fees",
              "Collection charges within mainland England and Wales",
              "Coffin upgrade or &lsquo;premium&rsquo; coffin fees",
              "Embalming or preparation charges",
              "Chapel of rest, viewing or service fees",
              "Cremation authority fees or paperwork charges",
              "Doctors&rsquo; medical certificate fees",
              "Ashes return delivery (UK mainland)"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <span className="text-ink-700" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
            Help with costs
          </p>
          <h2 className="mb-6 balance">If money is a worry, you may be entitled to support.</h2>
          <div className="prose-content space-y-4">
            <p>
              If you&rsquo;re receiving certain benefits, you may be eligible for help from the
              Government&rsquo;s <strong>Funeral Expenses Payment</strong> scheme (in England and
              Wales). It can cover most of the cremation cost and some of the funeral director&rsquo;s
              fees.
            </p>
            <p>
              In Scotland the equivalent is the <strong>Funeral Support Payment</strong> from
              Social Security Scotland.
            </p>
            <p>
              Eligibility depends on your relationship to the person who has died and the benefits
              you receive. Call us on{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold">
                {siteConfig.phone}
              </a>{" "}
              and we&rsquo;ll talk you through whether you might qualify before you apply.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">Speak to someone who can help.</h2>
          <p className="text-paper/85 text-lg mb-7 max-w-xl mx-auto pretty">
            We&rsquo;re available 24 hours a day. There&rsquo;s no obligation when you call &mdash;
            just an honest conversation about what you need.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
