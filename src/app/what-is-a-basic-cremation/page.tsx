import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "What is a basic cremation? | Basic Cremation",
  description: "A basic cremation (also called direct cremation) is a simple, unattended cremation without a service, hearse, or procession. Here's how it works and why families choose it."
};

const ABOUT_IMAGE = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2000&q=75";

export default function WhatIsBasicCremationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "What is a basic cremation", url: "/what-is-a-basic-cremation" }
        ]}
      />
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={ABOUT_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">The basics, explained</p>
            <h1 className="mb-6 balance">What is a basic cremation?</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              A basic cremation &mdash; sometimes called a direct cremation &mdash; is a simple,
              respectful cremation without a funeral service, hearse, or procession. It is the
              quietest, most affordable way to arrange a cremation in the UK.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>How a basic cremation works</h2>
            <p>
              Once you call us, we arrange for a local, accredited funeral director near you to
              collect your loved one from the place of death &mdash; usually a hospital, hospice,
              care home, or their own home. They are taken into the funeral director&rsquo;s care
              and looked after at the funeral home until the cremation.
            </p>
            <p>
              In the meantime, the death is registered (we explain how on our{" "}
              <Link href="/help-and-advice/registering-a-death-england-wales">registering a death</Link>{" "}
              page), and we complete all the paperwork required for cremation. There&rsquo;s nothing
              you need to organise on the cremation day itself &mdash; no time to be at, no
              procession to follow, no service to attend.
            </p>
            <p>
              On the day, your loved one is taken privately to a local crematorium for an
              unattended cremation. A few days later, the ashes are returned to you &mdash; by hand
              at the funeral home, or by tracked courier to your home. From that point onward,
              what you do with the ashes, and how and when you choose to remember the person, is
              entirely up to you.
            </p>

            <h2>Why families choose a basic cremation</h2>
            <p>
              Direct cremation has become the fastest-growing form of funeral in the UK, and the
              reasons families give are remarkably consistent.
            </p>
            <p>
              <strong>It costs less.</strong> A basic cremation through us is £
              {siteConfig.basePrice.toLocaleString()}, all-inclusive. A traditional funeral with a
              service typically costs three to four times that. With nothing to upsell at the funeral
              home, families know what they will pay before they pick up the phone.
            </p>
            <p>
              <strong>It avoids the &ldquo;set piece&rdquo; that doesn&rsquo;t always feel right.</strong>{" "}
              Many people are quietly uncomfortable with the format of a traditional funeral &mdash;
              the cars, the order of service, the curtain, the small congregation in a chapel. A
              basic cremation removes all of that and leaves you free to remember someone in a way
              that genuinely fits them.
            </p>
            <p>
              <strong>It gives you time.</strong> Without the pressure of a date and a service to
              organise within ten days of the death, families have weeks or months to decide how
              they want to gather, where, and with whom &mdash; or whether to gather at all. Some
              hold a quiet wake at home; some scatter ashes on a meaningful walk; some never plan
              anything formal, and that&rsquo;s a valid choice too.
            </p>
            <p>
              <strong>The wishes of the person who died.</strong> An increasing number of older
              people specifically ask, in advance, that their family doesn&rsquo;t spend money on a
              traditional funeral. A basic cremation honours that wish.
            </p>

            <h2>Is it the same as a &ldquo;direct&rdquo; cremation?</h2>
            <p>
              Yes &mdash; the words are interchangeable. &ldquo;Direct cremation&rdquo; is the term
              the funeral industry generally uses; &ldquo;basic cremation&rdquo; and &ldquo;simple
              cremation&rdquo; are the terms families more often use when searching online. They
              all describe the same thing: an unattended cremation with no funeral service.
            </p>

            <h2>What about a memorial later?</h2>
            <p>
              Most families who choose a basic cremation hold some form of remembrance afterwards
              &mdash; though the form varies enormously. Some examples we hear regularly:
            </p>
            <ul>
              <li>A meal at the family home with close relatives, on a date that suits everyone</li>
              <li>Scattering ashes at a place that mattered to the person &mdash; a coastline, a beauty spot, a garden</li>
              <li>A quiet service of remembrance at a local church, weeks or months later</li>
              <li>A celebration of life in a pub or village hall, with the order of service the family chooses</li>
              <li>Nothing formal at all &mdash; some families simply prefer the privacy of grieving in their own way</li>
            </ul>
            <p>
              All of these are entirely separate from the cremation itself, which is one of the
              practical strengths of the basic cremation model: it doesn&rsquo;t lock the family
              into anything.
            </p>

            <h2>Is a basic cremation right for our family?</h2>
            <p>
              For most families, the answer comes quickly. If you would like a traditional funeral
              with a service, mourners present, and a procession, a basic cremation is not the
              right arrangement &mdash; we&rsquo;d gently say so on the phone.
            </p>
            <p>
              If, on the other hand, what you want is a quiet, dignified cremation without the
              expense and choreography of a traditional funeral, this is exactly that. And if
              you&rsquo;re not sure, calling us costs nothing &mdash; we&rsquo;ll talk through the
              options without pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="mb-6 balance">Read next</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/prices" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">The price &mdash; in full</h3>
                <p className="text-ink-700 text-base">£{siteConfig.basePrice.toLocaleString()} all-inclusive. No extras at the door.</p>
              </Link>
              <Link href="/whats-included" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">What&rsquo;s included</h3>
                <p className="text-ink-700 text-base">Every item the price covers &mdash; and what it doesn&rsquo;t.</p>
              </Link>
              <Link href="/help-and-advice/what-to-do-when-someone-dies" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">When someone dies</h3>
                <p className="text-ink-700 text-base">The practical first steps in the first 24 to 72 hours.</p>
              </Link>
              <Link href="/locations" className="bg-paper border border-sage-200 rounded-xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
                <h3 className="text-xl mb-2">Find your area</h3>
                <p className="text-ink-700 text-base">Local funeral directors, crematoria and registry information by city.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">Talk it through, no pressure.</h2>
          <p className="text-paper/85 text-lg mb-7 max-w-xl mx-auto pretty">
            If you&rsquo;re weighing up whether a basic cremation is the right choice, a five-minute
            phone call usually settles it. We&rsquo;re here 24 hours a day.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
