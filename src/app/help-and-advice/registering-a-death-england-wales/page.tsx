import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Registering a death in England or Wales | Basic Cremation",
  description: "Step-by-step guide to registering a death in England or Wales — who registers, when, what to bring, and what documents you receive."
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=75";

export default function RegisterEWPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Help & advice", url: "/help-and-advice" },
          { name: "Registering a death (E&W)", url: "/help-and-advice/registering-a-death-england-wales" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Registering a death in England or Wales",
            description: "Step-by-step guide to registering a death in England or Wales — who registers, when, what to bring, and what documents you receive.",
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
            <h1 className="mb-6 balance">Registering a death in England or Wales.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              The death must be registered with the local register office within five days
              (eight days in some cases). This guide walks through who registers, where, what
              to bring, and the documents you&rsquo;ll receive.
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
              <span>Within <strong>5 days</strong> (8 if a coroner&rsquo;s involved)</span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M17.7 14.7A8 8 0 1 0 6.3 14.7l5.7 6.3 5.7-6.3z" /><circle cx="12" cy="11" r="2.5" /></svg>
              <span>Local register office &mdash; <strong>book online</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
              <span>Bring no MCCD &mdash; <strong>sent electronically</strong> by the doctor</span>
            </div>
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
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
