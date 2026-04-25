import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "Help & advice when someone has died | Basic Cremation",
  description: "Practical, step-by-step guides for the days after someone has died — what to do first, registering the death, coroners, and the paperwork involved."
};

const SECTIONS = [
  { href: "/help-and-advice/what-to-do-when-someone-dies", title: "What to do when someone has died", body: "The first practical steps in the first 24 to 72 hours, depending on whether the death was at home, in hospital, or in a care home." },
  { href: "/help-and-advice/registering-a-death-england-wales", title: "Registering a death in England or Wales", body: "Who registers, where, when, what to bring, and what documents you&rsquo;ll receive afterwards." },
  { href: "/help-and-advice/registering-a-death-scotland", title: "Registering a death in Scotland", body: "How registration differs in Scotland, including timeframes, who can register, and the documents the registrar issues." },
  { href: "/help-and-advice/coroner-and-procurator-fiscal", title: "When the coroner or Procurator Fiscal is involved", body: "When a death is referred, what that means for the family, how long it takes, and how the cremation arrangement is affected." }
];

export default function HelpAndAdvicePage() {
  return (
    <>
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">Help &amp; advice</p>
            <h1 className="mb-6 balance">When someone has died.</h1>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              Plain-English guides for the practical things families have to do in the days after a
              death. Written for people who haven&rsquo;t done this before and aren&rsquo;t in any
              state to read jargon.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="bg-paper border border-sage-200 rounded-xl p-7 md:p-8 hover:shadow-card hover:-translate-y-0.5 transition-all no-underline">
              <h3 className="text-2xl font-serif text-ink-900 mb-3 leading-snug">{s.title}</h3>
              <p className="text-ink-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.body }} />
              <p className="mt-4 text-cta text-sm font-semibold">Read the guide &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="mb-4 balance">If you&rsquo;d rather just talk it through</h2>
            <p className="prose-content mb-6">
              Reading guides is useful, but if you&rsquo;d rather have someone walk you through it
              over the phone, we&rsquo;re here. There&rsquo;s no charge and no commitment for an
              initial conversation.
            </p>
            <PhoneCTA variant="default" />
          </div>
        </div>
      </section>
    </>
  );
}
