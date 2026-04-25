import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "When the coroner or Procurator Fiscal is involved | Basic Cremation",
  description: "What it means when a death is referred to the coroner (England, Wales, NI) or Procurator Fiscal (Scotland), how long it takes, and how it affects the cremation."
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=2400&q=75";

export default function CoronerPFPage() {
  return (
    <>
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
            <h1 className="mb-6 balance">When the coroner or Procurator Fiscal is involved.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              Some deaths must be reported to the coroner (in England and Wales) or the Procurator
              Fiscal (in Scotland) before the family can take any next step. This is normal &mdash;
              it doesn&rsquo;t mean anyone has done anything wrong &mdash; but it does change the
              timing of the cremation.
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
              <span>Most cases resolved in <strong>1&ndash;3 days</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
              <span><strong>No change</strong> to the £{siteConfig.basePrice.toLocaleString()} cremation price</span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 5h6m-6 5h4M5 5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" /></svg>
              <span>We <strong>handle the paperwork</strong> with the coroner&rsquo;s office</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>When is a death referred?</h2>
            <p>
              The doctor who would normally sign the Medical Certificate of Cause of Death (MCCD)
              is required to refer a death to the coroner (or Procurator Fiscal) when:
            </p>
            <ul>
              <li>The cause of death is unknown</li>
              <li>The death was sudden, unexpected, or unexplained</li>
              <li>The deceased had not been seen by a doctor in the last 14 days (England and Wales) or recently (Scotland)</li>
              <li>The death may have been caused by an accident, suicide, violence, or neglect</li>
              <li>The death occurred during or shortly after surgery, an anaesthetic, or other medical procedure</li>
              <li>The death may be due to industrial disease (e.g. asbestos exposure)</li>
              <li>The death occurred in custody or while detained under the Mental Health Act</li>
            </ul>
            <p>
              Most referrals are routine. The majority are resolved with a phone-call review and a
              decision that no further investigation is needed &mdash; the doctor is then free to
              issue the MCCD and the family proceeds as normal, with only a day or two of delay.
            </p>

            <h2>What the coroner or Procurator Fiscal can decide</h2>
            <p>There are essentially three outcomes:</p>
            <ol>
              <li>
                <strong>No investigation needed.</strong> After reviewing the medical history, the
                coroner / PF decides the cause of death is clear and authorises the doctor to
                issue the MCCD. Typical delay: one to three working days.
              </li>
              <li>
                <strong>Post-mortem examination.</strong> A pathologist examines the body to
                establish the cause of death. After the post-mortem, if no inquest is required,
                the coroner issues a Form 100B (in E&amp;W) or Form 14 equivalent (in Scotland) and
                registration can proceed. Typical delay: one to three weeks.
              </li>
              <li>
                <strong>Inquest.</strong> A formal investigation in front of the coroner. An
                interim certificate may be issued so that the funeral can go ahead, but the full
                death certificate is not issued until the inquest concludes. Inquests can take
                months. The cremation itself can usually proceed once the coroner has issued the
                relevant authorisation.
              </li>
            </ol>

            <h2>How this affects the cremation</h2>
            <p>
              The funeral director cannot collect from the place of death until the coroner&rsquo;s
              office (or Procurator Fiscal&rsquo;s office) releases your loved one. Once they do,
              everything proceeds as normal &mdash; the £{siteConfig.basePrice.toLocaleString()}{" "}
              base price doesn&rsquo;t change because of coroner involvement.
            </p>
            <p>
              In some cases, the coroner may require additional cremation paperwork (a coroner&rsquo;s
              certificate authorising cremation, sometimes called Form 6 or a Form Cremation 6).
              We handle this for you.
            </p>

            <h2>Can family attend the post-mortem or be told about it?</h2>
            <p>
              You will be informed that a post-mortem is taking place but you do not need to be
              present and would not normally attend. The coroner&rsquo;s office will tell you the
              outcome and provide the cause of death once the post-mortem is complete. They will
              also tell you when your loved one is ready to be released to the funeral director.
            </p>

            <h2>How to make this easier</h2>
            <p>
              When you call us, tell us if a coroner or Procurator Fiscal is involved. We&rsquo;ll
              liaise with their office directly so you don&rsquo;t have to chase &mdash; and so we
              can get the cremation arranged the moment release is given.
            </p>
            <p>
              Coroner cases can feel like a long wait, especially when nothing is happening from
              the family&rsquo;s end. We&rsquo;ll ring with updates so you&rsquo;re not left in the
              dark.
            </p>

            <h2>Procurator Fiscal in Scotland</h2>
            <p>
              In Scotland, the Procurator Fiscal performs the equivalent role of the coroner. The
              process is similar &mdash; review, possible post-mortem, occasionally a Fatal
              Accident Inquiry (the Scottish equivalent of an inquest, but reserved for a narrower
              set of cases). Most referrals to the PF are resolved within a few days.
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
              <li><Link href="/help-and-advice/what-to-do-when-someone-dies" className="text-cta underline">What to do when someone has died</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sage-700 text-paper">
        <div className="container-page py-12 md:py-16 text-center">
          <h2 className="text-paper mb-4 balance">Coroner case? We can help.</h2>
          <p className="text-paper/85 text-lg mb-7 max-w-xl mx-auto pretty">
            We deal with coroner and Procurator Fiscal cases regularly. Call us and we&rsquo;ll explain what to expect for your specific situation.
          </p>
          <PhoneCTA variant="light-on-image" />
        </div>
      </section>
    </>
  );
}
