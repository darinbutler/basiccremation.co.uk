import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "What to do when someone has died | Basic Cremation",
  description: "Step-by-step guidance for the first 24 to 72 hours after someone has died — at home, in hospital, in a care home, or unexpectedly."
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2400&q=75";

export default function WhatToDoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Help & advice", url: "/help-and-advice" },
          { name: "When someone dies", url: "/help-and-advice/what-to-do-when-someone-dies" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What to do when someone has died",
            description: "Step-by-step guidance for the first 24 to 72 hours after someone has died — at home, in hospital, in a care home, or unexpectedly.",
            author: { "@type": "Organization", name: "Basic Cremation" },
            publisher: {
              "@type": "Organization",
              name: "Basic Cremation",
              logo: { "@type": "ImageObject", url: "https://basiccremation.co.uk/logo.png" }
            },
            inLanguage: "en-GB"
          })
        }}
      />

      {/* HERO */}
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">Help &amp; advice</p>
            <h1 className="mb-6 balance">What to do when someone has died.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              The first few hours and days after a death are practical as much as emotional. This
              guide walks through what needs to happen and roughly when &mdash; depending on where
              the death took place.
            </p>
          </div>
        </div>
      </section>

      {/* AT-A-GLANCE strip */}
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-5 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-sm md:text-[15px]">
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span><strong>Stop.</strong> Most things can wait the first few hours</span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
              <span>If unexpected, call <strong>999</strong>; otherwise the GP or hospice</span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z" /></svg>
              <span>Then call us &mdash; we coordinate the rest</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>If the death was expected and at home</h2>
            <p>
              If the person was being cared for at home and the death was expected, there is no
              emergency. The first call is to their GP surgery (during working hours) or the
              out-of-hours GP service. The GP will visit, formally verify the death, and start the
              process of issuing a Medical Certificate of Cause of Death (MCCD). If the person was
              under hospice care, you call the hospice instead.
            </p>
            <p>
              Once death has been verified, you can call us on{" "}
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a> and we&rsquo;ll arrange
              for the local funeral director to collect &mdash; usually within a few hours, or
              first thing the next morning.
            </p>
            <p>
              You don&rsquo;t need to ring 999. Doing so will lead to police attendance and an
              automatic referral to the coroner, which delays everything.
            </p>

            <h2>If the death was unexpected, or you&rsquo;re not sure</h2>
            <p>
              Call 999. The paramedics will attend, and if they cannot resuscitate they will
              involve the police as a routine matter (this is standard for any death outside a
              medical setting). The death will then be referred to the coroner, who will decide
              whether further investigation is needed.
            </p>
            <p>
              In coroner cases, the funeral director cannot collect until the coroner releases
              your loved one. Timeframes vary &mdash; from a day or two to several weeks if a
              post-mortem is required. See our{" "}
              <Link href="/help-and-advice/coroner-and-procurator-fiscal">coroner and Procurator Fiscal</Link>{" "}
              guide for what to expect.
            </p>

            <h2>If the death was in hospital</h2>
            <p>
              The hospital will look after your loved one until a funeral director collects. The
              ward will tell you who to contact in the bereavement office &mdash; usually the next
              working day. The bereavement office is where the MCCD is signed and where you will
              be given the paperwork you need to register the death.
            </p>
            <p>
              You can call us at any point &mdash; before or after speaking to the bereavement
              office &mdash; and we will coordinate collection from the hospital.
            </p>

            <h2>If the death was in a care home</h2>
            <p>
              The care home will follow its own procedures, which usually include calling the GP to
              verify death and getting the MCCD signed. They will hold your loved one until the
              funeral director collects. You can call us as soon as you&rsquo;re ready and we will
              liaise with the care home directly &mdash; you don&rsquo;t need to be there for the
              collection.
            </p>

            <h2>The next steps once collection is arranged</h2>
            <ol>
              <li>The MCCD is issued by the GP, hospital doctor, or coroner&rsquo;s office.</li>
              <li>You register the death at your local register office &mdash; see our guides for{" "}
                <Link href="/help-and-advice/registering-a-death-england-wales">England &amp; Wales</Link>{" "}
                and{" "}
                <Link href="/help-and-advice/registering-a-death-scotland">Scotland</Link>.
              </li>
              <li>The registrar gives you a Certificate for Burial or Cremation (the &ldquo;green form&rdquo; in England and Wales).</li>
              <li>We complete the cremation paperwork in the meantime.</li>
              <li>The cremation takes place at a local crematorium, usually within one to three weeks.</li>
              <li>Ashes are returned to you, by hand or by tracked courier.</li>
            </ol>

            <h2>Things you don&rsquo;t need to do straight away</h2>
            <p>
              Resist the urge to start cancelling utility accounts, card payments, or government
              services in the first 48 hours. The Government&rsquo;s <strong>Tell Us Once</strong>{" "}
              service handles most of that in one go after the death is registered, and the
              registrar will give you a code to use it.
            </p>
            <p>
              Probate, the will, and the estate all wait. There is no urgency on any of that in
              the first week.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="mb-5 balance">Read next</h2>
            <ul className="space-y-3 text-lg">
              <li><Link href="/help-and-advice/registering-a-death-england-wales" className="text-cta underline">Registering a death in England or Wales</Link></li>
              <li><Link href="/help-and-advice/registering-a-death-scotland" className="text-cta underline">Registering a death in Scotland</Link></li>
              <li><Link href="/help-and-advice/coroner-and-procurator-fiscal" className="text-cta underline">When the coroner or Procurator Fiscal is involved</Link></li>
              <li><Link href="/what-is-a-basic-cremation" className="text-cta underline">What is a basic cremation?</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">If anything is unclear, call us.</h2>
          <p className="text-paper/85 text-lg mb-7 max-w-xl mx-auto pretty">
            Every situation is different. We&rsquo;re happy to talk you through what to do next for your specific circumstances.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
