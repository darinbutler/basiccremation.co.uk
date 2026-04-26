import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2400&q=75";

export const metadata: Metadata = {
  title: "What's included in a basic cremation | Basic Cremation",
  description: `Everything a £${siteConfig.basePrice.toLocaleString()} basic cremation includes — and what isn't included. Honest, plain-English breakdown.`
};

const INCLUDED = [
  { title: "A local funeral director", body: "An independent, NAFD- or SAIF-accredited funeral director near you takes care of every step. They look after your loved one in their own funeral home — not in a central facility hours away." },
  { title: "Collection from the place of death", body: "Collection from a hospital or coroner&rsquo;s mortuary is included in the £1,499 price. Collection from a home, hospice, or care/nursing home requires a £250 Priority Care fee on top of the base price &mdash; total £1,749 in those cases. Either way, this is explained on the phone, never added at the door." },
  { title: "Care and preparation", body: "Your loved one is washed, dressed in their own clothes if you wish, and looked after with dignity until the day of the cremation. Embalming is not included and not normally needed for a basic cremation." },
  { title: "A simple, dignified coffin", body: "A coffin suitable for cremation, with the necessary handles and lining. There is no &lsquo;upgrade&rsquo; charge — the coffin we use is the coffin in your price." },
  { title: "Transport to the crematorium", body: "Transport in a private ambulance from the funeral home to the crematorium on the day of the cremation. There is no procession, no hearse cortège — this is a direct, unattended cremation." },
  { title: "All cremation authority fees", body: "Including the crematorium&rsquo;s fee for the cremation itself, all required paperwork (Form 1, the cremation application, and the medical referee&rsquo;s scrutiny fee), and the doctors&rsquo; medical certificates." },
  { title: "The return of ashes", body: "Ashes are returned to you in a simple urn or scatter tube, by hand at the funeral home or by tracked courier to a UK mainland address. There is no extra charge for this." },
  { title: "24/7 phone support throughout", body: "From the first call to the day the ashes are returned, we&rsquo;re reachable on the phone any hour of the day or night." }
];

const NOT_INCLUDED = [
  { title: "A church or chapel service", body: "A basic cremation is unattended. There is no service at the crematorium and no procession. Many families hold a memorial gathering separately, in their own time and at no fixed cost." },
  { title: "Limousines, hearses or processions", body: "Because there is no service, there is no funeral cortège. If you would like a traditional funeral with a service and procession, you would need a different kind of arrangement." },
  { title: "Flowers, orders of service, or notices", body: "These belong to a traditional funeral with a service. They are not part of a basic cremation." },
  { title: "Memorial plots, headstones, or interment", body: "What happens with the ashes afterwards is up to you — burial of ashes in a churchyard or cemetery, scattering at a meaningful place, or keeping them at home are all common. None of these are part of the cremation itself." },
  { title: "Off-mainland or international transport", body: "Collection from the Scottish islands, the Isle of Man, the Channel Islands, or repatriation from outside the UK is not included. We can quote separately if needed." }
];

export default function WhatsIncludedPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "What's included", url: "/whats-included" }
        ]}
      />
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">What&rsquo;s included</p>
            <h1 className="mb-6 balance">Everything in your £{siteConfig.basePrice.toLocaleString()} basic cremation.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              Below is the full list of what your price covers, and the things a basic cremation
              does not include &mdash; so you know what you&rsquo;re arranging before you call.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-ink-100">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2400&q=75" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/96 via-paper-warm/93 to-paper-warm/96"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">Everything covered</p>
            <h2 className="mb-4 balance">Included in the price</h2>
            <p className="prose-content">
              All of the items below are included in the £{siteConfig.basePrice.toLocaleString()}{" "}
              price. Nothing is added later, and nothing in this list is upsold at the funeral home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className="bg-paper border-2 border-sage-200 rounded-xl p-6 md:p-7 shadow-card hover:shadow-cardHover hover:-translate-y-1 hover:border-sage-300 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cta" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-ink-900 leading-snug pt-1">{item.title}</h3>
                </div>
                <p className="text-ink-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="mb-4 balance">Not included &mdash; and why</h2>
            <p className="prose-content">
              A basic cremation is a deliberately simple arrangement. The items below
              aren&rsquo;t part of it &mdash; if any of them matter to your family, a different kind
              of funeral may be more appropriate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {NOT_INCLUDED.map((item) => (
              <div key={item.title} className="bg-paper border border-ink-100 rounded-xl p-6 md:p-7">
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 mt-1 text-ink-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <h3 className="text-xl font-serif text-ink-900 leading-snug">{item.title}</h3>
                </div>
                <p className="text-ink-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-16">
        <div className="max-w-2xl">
          <h2 className="mb-5 balance">Read more</h2>
          <ul className="space-y-3 text-lg">
            <li><Link href="/prices" className="text-cta underline">The full price breakdown</Link></li>
            <li><Link href="/what-is-a-basic-cremation" className="text-cta underline">What is a basic cremation?</Link></li>
            <li><Link href="/help-and-advice" className="text-cta underline">Help and advice when someone has died</Link></li>
            <li><Link href="/faqs" className="text-cta underline">Frequently asked questions</Link></li>
          </ul>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">Have a question about what&rsquo;s included?</h2>
          <p className="text-paper/85 text-lg mb-7 max-w-xl mx-auto pretty">
            We&rsquo;re happy to walk through any of this on the phone before you commit. 24 hours a day.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
