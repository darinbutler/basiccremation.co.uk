import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Registering a death in Scotland | Basic Cremation",
  description: "How registering a death works in Scotland — the eight-day rule, who can register, the documents the registrar issues, and how it differs from England and Wales."
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2400&q=75";

export default function RegisterScotlandPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Help & advice", url: "/help-and-advice" },
          { name: "Registering a death (Scotland)", url: "/help-and-advice/registering-a-death-scotland" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Registering a death in Scotland",
            description: "How registering a death works in Scotland — the eight-day rule, who can register, the documents the registrar issues, and how it differs from England and Wales.",
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
            <h1 className="mb-6 balance">Registering a death in Scotland.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              Death registration in Scotland is run by the National Records of Scotland and works
              slightly differently from England and Wales. This guide covers the timing, who
              registers, and what you receive.
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
              <span>Within <strong>8 days</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M17.7 14.7A8 8 0 1 0 6.3 14.7l5.7 6.3 5.7-6.3z" /><circle cx="12" cy="11" r="2.5" /></svg>
              <span><strong>Any registry office in Scotland</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
              <span><strong>Form 14</strong> needed for the cremation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>When and where to register</h2>
            <p>
              In Scotland, a death must be registered within <strong>eight days</strong>. Unlike in
              England and Wales, you can register at <strong>any registration office in Scotland</strong>{" "}
              &mdash; not only the office covering the place of death. Most families choose the
              office nearest where they live.
            </p>
            <p>
              Most offices are appointment-only. Search for &ldquo;register a death&rdquo; plus
              your local council on the Scottish council&rsquo;s website to book.
            </p>

            <h2>Who can register</h2>
            <p>The registrar will normally accept registration from:</p>
            <ul>
              <li>Any relative of the person who died</li>
              <li>Anyone present at the death</li>
              <li>The deceased&rsquo;s executor or other legal representative</li>
              <li>The occupier of the premises where the death took place</li>
              <li>Any other person who has knowledge of the particulars to be registered</li>
            </ul>

            <h2>What to bring</h2>
            <p>
              The Medical Certificate of Cause of Death (Form 11) is sent to the registrar
              electronically by the doctor &mdash; you don&rsquo;t bring a copy. You will be asked
              for:
            </p>
            <ul>
              <li>Full name and any names previously used</li>
              <li>Date and place of birth</li>
              <li>Date and place of death</li>
              <li>Last address</li>
              <li>Occupation</li>
              <li>Marital status, and the name and occupation of any spouse or civil partner</li>
              <li>Names and occupations of the deceased&rsquo;s parents</li>
              <li>Whether the deceased was receiving a state pension or other benefits</li>
            </ul>
            <p>
              Bring the deceased&rsquo;s birth certificate, marriage certificate, and NHS card if
              you have them &mdash; not essential, but helpful.
            </p>

            <h2>What you receive</h2>
            <p>The registrar will give you:</p>
            <ul>
              <li>
                <strong>An Abbreviated or Extract of an Entry from the Register of Deaths</strong>{" "}
                (the death certificate). The first extract is included; additional copies are
                charged per copy.
              </li>
              <li>
                <strong>Form 14 (Certificate of Registration of Death)</strong>, which the funeral
                director will need before a cremation can go ahead. This is the Scottish equivalent
                of the &ldquo;green form&rdquo;.
              </li>
              <li>
                <strong>A unique reference for Tell Us Once</strong> if available in your council
                area. Tell Us Once is now widely available in Scotland and notifies most relevant
                government departments in one go.
              </li>
              <li>
                <strong>Form BD8</strong> (notification of death for benefits purposes).
              </li>
            </ul>

            <h2>If a Procurator Fiscal is involved</h2>
            <p>
              In Scotland, suspicious or unexplained deaths are investigated by the Procurator
              Fiscal rather than a coroner. If the death has been reported to the Procurator
              Fiscal, the registrar cannot register it until the Procurator Fiscal&rsquo;s
              investigation is complete and they authorise registration. See our{" "}
              <Link href="/help-and-advice/coroner-and-procurator-fiscal">Procurator Fiscal guide</Link>.
            </p>

            <h2>How this differs from England and Wales</h2>
            <ul>
              <li><strong>Timeframe</strong>: 8 days in Scotland vs. 5 days in England and Wales.</li>
              <li><strong>Where</strong>: any office in Scotland; in E&amp;W you need the office covering the place of death.</li>
              <li><strong>Who investigates suspicious deaths</strong>: Procurator Fiscal in Scotland; coroner in E&amp;W.</li>
              <li><strong>The cremation form</strong>: Form 14 in Scotland; the &ldquo;green form&rdquo; (Certificate for Burial or Cremation) in E&amp;W.</li>
            </ul>
            <p>
              We work with families across the UK regardless of which system applies. Call us on{" "}
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a> if you have questions
              about the Scottish process specifically.
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
              <li><Link href="/help-and-advice/coroner-and-procurator-fiscal" className="text-cta underline">When the Procurator Fiscal is involved</Link></li>
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
