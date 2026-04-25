import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "Registering a death in Scotland | Basic Cremation",
  description: "How registering a death works in Scotland — the eight-day rule, who can register, the documents the registrar issues, and how it differs from England and Wales."
};

export default function RegisterScotlandPage() {
  return (
    <>
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">Help &amp; advice</p>
            <h1 className="mb-5 balance">Registering a death in Scotland.</h1>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              Death registration in Scotland is run by the National Records of Scotland and works
              slightly differently from England and Wales. This guide covers the timing, who
              registers, and what you receive.
            </p>
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
