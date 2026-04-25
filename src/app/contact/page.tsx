import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2400&q=75";

export const metadata: Metadata = {
  title: "Contact us | Basic Cremation",
  description: `Speak to a real person, 24 hours a day. Call ${siteConfig.phone} for help arranging a basic cremation in England or Wales.`
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">Contact us</p>
            <h1 className="mb-6 balance">Speak to a real person, 24 hours a day.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              The fastest way to get help is to call. Most first conversations take ten to fifteen
              minutes &mdash; long enough to understand what&rsquo;s happened, explain the next
              steps, and answer any questions.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="bg-paper border-2 border-sage-200 rounded-2xl p-8 md:p-10 mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-3 font-semibold">Phone, any hour</p>
            <a href={`tel:${siteConfig.phoneTel}`} className="block text-4xl md:text-5xl font-serif text-ink-900 mb-3 no-underline hover:text-cta transition-colors">
              {siteConfig.phone}
            </a>
            <p className="text-ink-700">24 hours a day, every day &mdash; including weekends and bank holidays.</p>
          </div>

          <div className="prose-content">
            <h2>What happens when you call</h2>
            <p>
              The person who answers will ask a few practical questions: what&rsquo;s happened, where
              your loved one is now, and roughly where you&rsquo;re located. From there we&rsquo;ll
              explain the next steps, including who will be in touch from the local funeral director
              and what paperwork is needed.
            </p>
            <p>
              You don&rsquo;t need to have decided anything before you call. If a basic cremation
              ends up not being the right arrangement for your family, we&rsquo;ll say so honestly
              &mdash; and we won&rsquo;t pressure you either way.
            </p>

            <h2>If your call isn&rsquo;t urgent</h2>
            <p>
              If you&rsquo;re researching for a future arrangement, or asking on behalf of someone
              else, the same number is fine. We answer 24 hours, and a daytime call is often the
              most relaxed time to walk through the details.
            </p>

            <h2>Coroner or Procurator Fiscal cases</h2>
            <p>
              If a coroner is involved (or, in Scotland, a Procurator Fiscal), please tell us when
              you call &mdash; the timing of the cremation will depend on their investigation, but
              we can still help you plan around it. See our{" "}
              <Link href="/help-and-advice/coroner-and-procurator-fiscal">coroner and Procurator Fiscal guide</Link>{" "}
              for context.
            </p>

            <h2>If your loved one is overseas</h2>
            <p>
              We don&rsquo;t handle international repatriation directly. If your loved one has died
              abroad and you need them brought home, the Foreign, Commonwealth &amp; Development
              Office and the British consulate in the country are the right first call. Once they
              are back in the UK, we can take over.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="mb-6 balance">Useful pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/prices" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">Prices</h3>
                <p className="text-ink-700 text-base">£{siteConfig.basePrice.toLocaleString()} all-inclusive. Full breakdown.</p>
              </Link>
              <Link href="/whats-included" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">What&rsquo;s included</h3>
                <p className="text-ink-700 text-base">Every item your price covers.</p>
              </Link>
              <Link href="/help-and-advice" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">Help &amp; advice</h3>
                <p className="text-ink-700 text-base">What to do when someone has died.</p>
              </Link>
              <Link href="/faqs" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">FAQs</h3>
                <p className="text-ink-700 text-base">Common questions, answered plainly.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
