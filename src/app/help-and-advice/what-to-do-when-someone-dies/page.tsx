import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "What to do when someone has died | Basic Cremation",
  description: "Step-by-step guidance for the first 24 to 72 hours after someone has died — at home, in hospital, in a care home, or unexpectedly."
};

export default function WhatToDoPage() {
  return (
    <>
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">Help &amp; advice</p>
            <h1 className="mb-5 balance">What to do when someone has died.</h1>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              The first few hours and days after a death are practical as much as emotional. This
              guide walks through what needs to happen and roughly when &mdash; depending on where
              the death took place.
            </p>
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
          <PhoneCTA variant="light-on-dark" />
        </div>
      </section>
    </>
  );
}
