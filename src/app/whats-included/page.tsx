import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "What's included in a basic cremation | Basic Cremation",
  description: `Everything a £${siteConfig.basePrice.toLocaleString()} basic cremation includes — and what isn't included. Honest, plain-English breakdown.`
};

const INCLUDED = [
  { title: "A local funeral director", body: "An independent, NAFD- or SAIF-accredited funeral director near you takes care of every step. They look after your loved one in their own funeral home — not in a central facility hours away." },
  { title: "Collection from the place of death", body: "We collect from a hospital, hospice, nursing home, or your home, anywhere in mainland England and Wales. Collection within one to two working days is included; faster collection is available with our optional priority care." },
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
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">What&rsquo;s included</p>
            <h1 className="mb-6 balance">Everything in your £{siteConfig.basePrice.toLocaleString()} basic cremation.</h1>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              Below is the full list of what your price covers, and the things a basic cremation
              does not include &mdash; so you know what you&rsquo;re arranging before you call.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="mb-4 balance">Included in the price</h2>
          <p className="prose-content">
            All of the items below are included in the £{siteConfig.basePrice.toLocaleString()}{" "}
            price. Nothing is added later, and nothing in this list is upsold at the funeral home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {INCLUDED.map((item) => (
            <div key={item.title} className="bg-paper border border-sage-200 rounded-xl p-6 md:p-7 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-5 h-5 mt-1 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <h3 className="text-xl font-serif text-ink-900 leading-snug">{item.title}</h3>
              </div>
              <p className="text-ink-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          ))}
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
