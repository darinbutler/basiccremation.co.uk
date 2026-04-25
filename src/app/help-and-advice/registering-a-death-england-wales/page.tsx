import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "Registering a death in England or Wales | Basic Cremation",
  description: "Step-by-step guide to registering a death in England or Wales — who registers, when, what to bring, and what documents you receive."
};

export default function RegisterEWPage() {
  return (
    <>
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">Help &amp; advice</p>
            <h1 className="mb-5 balance">Registering a death in England or Wales.</h1>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              The death must be registered with the local register office within five days
              (eight days in some cases). This guide walks through who registers, where, what
              to bring, and the documents you&rsquo;ll receive.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>When to register</h2>
            <p>
              In England and Wales, a death must be registered within <strong>five days</strong> of
              the death (or eight days if the registrar is told it has been referred to the coroner).
              The five-day clock pauses if the coroner is investigating &mdash; the registrar will
              guide you on timing.
            </p>

            <h2>Where to register</h2>
            <p>
              You should register the death at the register office covering the area where the
              death occurred. Many offices accept what&rsquo;s called a <em>declaration</em> at a
              different register office &mdash; you give the information there and it&rsquo;s sent
              on to the right office &mdash; but this adds a few days, so wherever possible go to
              the local one.
            </p>
            <p>
              Most register offices are appointment-only. Search &ldquo;register a death&rdquo;
              plus your local council on GOV.UK to find the booking page. Same-week appointments
              are usually available.
            </p>

            <h2>Who can register</h2>
            <p>
              The registrar will normally accept a registration from any of the following, in
              roughly this order of preference:
            </p>
            <ul>
              <li>A relative of the person who died</li>
              <li>Someone present at the death</li>
              <li>The person arranging the funeral (this is where we can help, in some cases)</li>
              <li>An official from the hospital, care home, or hospice</li>
            </ul>
            <p>
              You don&rsquo;t need to bring other family members &mdash; one person registering is
              the standard.
            </p>

            <h2>What to bring</h2>
            <p>
              You&rsquo;ll be asked for the following information about the person who died &mdash;
              if you don&rsquo;t have it all to hand, the registrar can usually proceed with what
              you do have:
            </p>
            <ul>
              <li>Full name (and any names previously used, e.g. maiden name)</li>
              <li>Date and place of birth</li>
              <li>Date and place of death</li>
              <li>Last address</li>
              <li>Occupation (or last occupation if retired)</li>
              <li>Whether they were married, in a civil partnership, or widowed &mdash; and the spouse&rsquo;s details</li>
              <li>Whether they were receiving a state pension or other state benefits</li>
            </ul>
            <p>
              You don&rsquo;t need to bring the Medical Certificate of Cause of Death (MCCD) &mdash;
              the doctor who signed it sends it directly to the registrar electronically.
            </p>
            <p>
              It&rsquo;s helpful (but not essential) to bring the deceased&rsquo;s birth certificate,
              marriage certificate, NHS card, and any current passport.
            </p>

            <h2>What you receive</h2>
            <p>The registrar will give you:</p>
            <ul>
              <li>
                <strong>The Certificate for Burial or Cremation</strong> (sometimes called the
                &ldquo;green form&rdquo;). This is the document the funeral director needs in order
                for the cremation to go ahead. We&rsquo;ll ask for it.
              </li>
              <li>
                <strong>The Certificate of Registration of Death</strong> (Form BD8) &mdash; used
                for benefits and pensions purposes.
              </li>
              <li>
                <strong>A unique reference number for Tell Us Once</strong> &mdash; the
                Government&rsquo;s service that notifies most government departments (DWP, HMRC,
                DVLA, Passport Office, local council, NHS) in one go. We strongly recommend using
                it.
              </li>
              <li>
                <strong>Death certificates</strong> on request. Buy several copies (typically
                £12.50 each in England and Wales as of 2026 &mdash; check current fee with your
                local office). Banks, insurers, and pension providers usually require the original;
                photocopies are not always accepted.
              </li>
            </ul>
            <p>
              A reasonable rule of thumb is one death certificate per significant account or asset
              that needs closing &mdash; banks, insurers, pension providers, share registrars,
              property leases. For a typical estate, families buy four to six.
            </p>

            <h2>If a coroner is involved</h2>
            <p>
              When the coroner is investigating, the registrar cannot register the death until the
              coroner gives them either an Order for Burial / Form 100B (after a post-mortem with
              no inquest) or, if there&rsquo;s an inquest, the coroner&rsquo;s certificate after
              inquest. Until then, you&rsquo;re in a holding pattern. See our{" "}
              <Link href="/help-and-advice/coroner-and-procurator-fiscal">coroner guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="mb-5 balance">Read next</h2>
            <ul className="space-y-3 text-lg">
              <li><Link href="/help-and-advice/registering-a-death-scotland" className="text-cta underline">Registering a death in Scotland</Link></li>
              <li><Link href="/help-and-advice/coroner-and-procurator-fiscal" className="text-cta underline">When the coroner is involved</Link></li>
              <li><Link href="/help-and-advice/what-to-do-when-someone-dies" className="text-cta underline">What to do when someone has died</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <PhoneCTA variant="light-on-dark" />
        </div>
      </section>
    </>
  );
}
