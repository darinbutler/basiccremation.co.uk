import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=75";

export const metadata: Metadata = {
  title: "Basic Cremation FAQs | Common questions answered",
  description: `Answers to the questions families most often ask before arranging a basic cremation — price, timing, what's included, and how it differs from a traditional funeral.`
};

const FAQS: { q: string; a: string }[] = [
  { q: "How much does a basic cremation cost?",
    a: `A basic cremation through us is £${siteConfig.basePrice.toLocaleString()} all-inclusive. That covers a local funeral director, collection, the coffin, the cremation fee, all paperwork, and the return of ashes. There are no extras added later.` },
  { q: "What is the difference between a basic cremation and a direct cremation?",
    a: `Nothing — they are different names for the same thing. The funeral industry tends to call it &ldquo;direct cremation&rdquo;; families searching online more often use &ldquo;basic cremation&rdquo; or &ldquo;simple cremation&rdquo;. All three describe an unattended cremation without a service.` },
  { q: "Can family attend the cremation?",
    a: `A basic cremation is unattended — there is no service at the crematorium and no procession. Most families instead hold a separate gathering or memorial in their own time, often weeks or months later, somewhere meaningful to them.` },
  { q: "How quickly can you collect my loved one?",
    a: `We collect within one to two working days as standard. If your loved one is at a hospital or coroner's mortuary, collection is included in the £${siteConfig.basePrice.toLocaleString()} price. If they are at a home, hospice, or care/nursing home, a £${siteConfig.priorityCarePrice} Priority Care collection fee applies (because home collections are arranged on shorter notice) — total £${(siteConfig.basePrice + siteConfig.priorityCarePrice).toLocaleString()}. Either way, this is explained when you call, never added retrospectively.` },
  { q: "How long does the whole process take?",
    a: `Most basic cremations are completed within one to three weeks of the call, depending on how quickly the death is registered, whether a coroner is involved, and the local crematorium&rsquo;s availability. We keep you informed at each step.` },
  { q: "Do you cover my area?",
    a: `Yes — we work with funeral directors across mainland England and Wales. See our <a href="/locations" class="text-cta underline">locations</a> page for the full list of cities and regions where we have local partners.` },
  { q: "What happens to the ashes?",
    a: `Ashes are returned to you in a simple urn or scatter tube — by hand at the funeral home, or by tracked courier to your home. You can scatter them, bury them, or keep them, and we&rsquo;re happy to discuss options on the phone if you&rsquo;d like ideas.` },
  { q: "Is a basic cremation respectful?",
    a: `Yes. Your loved one is in the care of an accredited, independent funeral director throughout. They are washed, dressed if you wish, and looked after with the same dignity as in any funeral. The simplicity is in the arrangement — not the care.` },
  { q: "What if a coroner is involved?",
    a: `When a coroner (or, in Scotland, a Procurator Fiscal) is involved, the timing depends on their investigation, not on us. We can still take care of everything once they release your loved one. See our <a href="/help-and-advice/coroner-and-procurator-fiscal" class="text-cta underline">coroner and Procurator Fiscal</a> guide.` },
  { q: "Can I have a memorial service later?",
    a: `Absolutely — many families do. Because the cremation has already happened, you have weeks or months to plan a service, gathering, scattering, or celebration of life on your own terms. We&rsquo;re not involved in that part, which means you&rsquo;re free to organise it however you wish.` },
  { q: "Will you upsell me on the phone?",
    a: `No. The price is the price. We don&rsquo;t commission staff on add-ons because there are no add-ons. If you want a traditional funeral with a service we&rsquo;ll tell you honestly — we&rsquo;d rather you got the right arrangement than the wrong one through us.` },
  { q: "Is there help with the cost if money is tight?",
    a: `In England and Wales, the Government&rsquo;s Funeral Expenses Payment scheme can cover most of the cremation cost if you&rsquo;re receiving certain benefits. In Scotland, the equivalent is Funeral Support Payment. Call us and we&rsquo;ll explain whether you might qualify before you apply.` },
  { q: "Can I pre-pay for my own basic cremation in advance?",
    a: `We don&rsquo;t currently sell pre-paid plans directly through this site. We can talk you through the options on the phone, including reputable plan providers regulated by the FCA.` },
  { q: "Who actually carries out the cremation?",
    a: `A local, independent funeral director near you takes care of every step. They are NAFD- or SAIF-accredited and use a local crematorium. We coordinate the arrangement and the paperwork, but the hands-on care is always local.` },
  { q: "How do I start the arrangement?",
    a: `Call us on <a href="tel:${siteConfig.phoneTel}" class="text-cta underline">${siteConfig.phone}</a>. We&rsquo;re available 24 hours a day. The first call usually takes ten to fifteen minutes — no commitment, no payment, just a clear plan for the next steps.` }
];

export default function FaqsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQs", url: "/faqs" }
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
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">Frequently asked questions</p>
            <h1 className="mb-6 balance">Common questions, plainly answered.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              The questions families most often ask before arranging a basic cremation. If yours
              isn&rsquo;t here, call us on{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold">{siteConfig.phone}</a>{" "}
              &mdash; we&rsquo;re happy to talk it through.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-paper border border-sage-200 rounded-xl p-6 md:p-7 transition-all duration-300 open:shadow-card hover:border-sage-300">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-serif text-ink-900 leading-snug pr-4">{faq.q}</h3>
                  <svg className="w-6 h-6 mt-1 text-cta flex-shrink-0 transition-transform duration-300 group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="mt-4 prose-content" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">Still have a question?</h2>
          <p className="text-paper/85 text-lg mb-7 max-w-xl mx-auto pretty">
            Call any time, day or night. There&rsquo;s no obligation &mdash; we&rsquo;re happy to explain anything before you commit.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
