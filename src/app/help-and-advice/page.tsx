import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export const metadata: Metadata = {
  title: "Help & advice when someone has died | Basic Cremation",
  description: "Practical, step-by-step guides for the days after someone has died — what to do first, registering the death, coroners, and the paperwork involved."
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=75";

const SECTIONS = [
  { href: "/help-and-advice/what-to-do-when-someone-dies", title: "What to do when someone has died", body: "The first practical steps in the first 24 to 72 hours, depending on whether the death was at home, in hospital, or in a care home." },
  { href: "/help-and-advice/registering-a-death-england-wales", title: "Registering a death in England or Wales", body: "Who registers, where, when, what to bring, and what documents you&rsquo;ll receive afterwards." },
  { href: "/help-and-advice/registering-a-death-scotland", title: "Registering a death in Scotland", body: "How registration differs in Scotland, including timeframes, who can register, and the documents the registrar issues." },
  { href: "/help-and-advice/coroner-and-procurator-fiscal", title: "When the coroner or Procurator Fiscal is involved", body: "When a death is referred, what that means for the family, how long it takes, and how the cremation arrangement is affected." }
];

export default function HelpAndAdvicePage() {
  return (
    <>
      {/* HERO — image background, scrim, large heading */}
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">Help &amp; advice</p>
            <h1 className="mb-6 balance">When someone has died.</h1>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed pretty">
              Plain-English guides for the practical things families have to do in the days after a
              death. Written for people who haven&rsquo;t done this before and aren&rsquo;t in any
              state to read jargon.
            </p>
          </div>
        </div>
      </section>

      {/* AT-A-GLANCE strip — quick orientation */}
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-5 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-sm md:text-[15px]">
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Most things <strong>can wait</strong> &mdash; nothing is more urgent than the next breath</span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
              <span>Death must be registered within <strong>5 days</strong> (8 in Scotland)</span>
            </div>
            <div className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-cta flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z" />
              </svg>
              <span>Talk to someone &mdash; we&rsquo;re on <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-cta">{siteConfig.phone}</a> day or night</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">The four guides</p>
          <h2 className="mb-4 balance">Where would you like to start?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="bg-paper border border-sage-200 rounded-xl p-7 md:p-8 hover:shadow-card hover:-translate-y-0.5 hover:border-sage-300 transition-all no-underline">
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
