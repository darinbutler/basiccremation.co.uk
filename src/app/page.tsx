import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export default function HomePage() {
  return (
    <>
      {/* HERO — image background hook ready */}
      <section
        className="hero-image relative"
        style={{
          // Replace with: backgroundImage: "url('/images/hero.jpg'), linear-gradient(...)"
          // Or use a Next.js <Image> component layered behind the content.
        }}
      >
        <div className="bg-scrim-side">
          <div className="container-page py-20 md:py-28 lg:py-32">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-paper/90 mb-5 font-medium">
                Help arranging a basic cremation
              </p>
              <h1 className="text-paper mb-6 balance">
                A simple, dignified cremation when you need it most.
              </h1>
              <p className="text-lg md:text-xl text-paper/95 mb-8 leading-relaxed pretty">
                If you&rsquo;ve lost a loved one and need to arrange a basic cremation in England,
                Scotland or Wales, we can help. Speak to someone now &mdash; any time, day or night.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center gap-3 bg-paper hover:bg-paper-warm text-cta px-7 py-4 rounded-md no-underline hover:no-underline font-medium transition-colors shadow-card"
                  aria-label={`Call ${siteConfig.phone}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"/>
                  </svg>
                  <span className="font-serif text-2xl">{siteConfig.phone}</span>
                </a>
                <span className="text-paper/85 text-sm">
                  Available 24 hours a day, every day of the year
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS strip */}
      <section className="bg-paper-warm border-b border-ink-200">
        <div className="container-page py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center md:text-left">
            {[
              ["24/7", "Calls answered any time, day or night"],
              ["£1,499", "All-inclusive single price"],
              ["Local", "Trusted independent funeral directors"],
              ["Nationwide", "England, Scotland and Wales"]
            ].map(([title, body]) => (
              <div key={title} className="flex md:items-start gap-3 flex-col md:flex-row items-center">
                <span className="font-serif text-2xl text-cta">{title}</span>
                <span className="text-sm text-ink-700 leading-snug max-w-[14rem]">{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS A BASIC CREMATION */}
      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-medium">
              What you need to know
            </p>
            <h2 className="mb-6 balance">What is a basic cremation?</h2>
          </div>
          <div className="md:col-span-7">
            <div className="prose-content">
              <p>
                A basic cremation &mdash; sometimes called a direct cremation, simple cremation or
                unattended cremation &mdash; is a straightforward, respectful cremation that takes
                place without a funeral service or mourners present at the crematorium.
              </p>
              <p>
                Many families choose a basic cremation because it removes the cost and complexity of a
                traditional funeral while still giving them the freedom to remember their loved one in
                their own way &mdash; whether that&rsquo;s a private gathering at home, a celebration
                of life later on, or scattering the ashes somewhere meaningful.
              </p>
              <p>
                <Link href="/what-is-a-basic-cremation" className="font-medium">
                  Read more about what&rsquo;s involved &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BREAK with imagery hook — price feature */}
      <section className="section-image relative border-y border-ink-200">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-prose">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-medium">
              Clear, all-inclusive pricing
            </p>
            <h2 className="mb-6">A single price. No hidden extras.</h2>
            <div className="bg-paper border border-sage-200 rounded-2xl p-7 md:p-9 shadow-card mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-5xl md:text-6xl text-cta tracking-tight">
                  &pound;{siteConfig.basePrice.toLocaleString()}
                </span>
                <span className="text-ink-500">complete</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Collection from a hospital or coroner's mortuary",
                  "Professional care in a local mortuary",
                  "A suitable coffin",
                  "All paperwork and arrangements",
                  "Cremation at a local crematorium",
                  "Ashes returned to you, or scattered on your behalf"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700">
                    <svg
                      className="w-5 h-5 text-cta flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-ink-700 mb-6">
              The only additional fee that may apply is a{" "}
              <strong>&pound;{siteConfig.priorityCarePrice} Priority Care collection</strong>{" "}
              charge if your loved one is at home, in a care home, or hospice. This is always explained
              clearly before anything happens.
            </p>
            <Link href="/prices" className="font-medium">
              See full price list &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS WHEN YOU CALL */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-medium">
            What to expect
          </p>
          <h2 className="mb-4 balance">What happens when you call</h2>
          <p className="text-lg text-ink-700 leading-relaxed pretty">
            Five simple steps, taken at your pace, with someone to talk you through every one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              n: "1",
              title: "You call us",
              body: "Day or night. Our team will gently take you through what needs to happen and answer any questions."
            },
            {
              n: "2",
              title: "Local care",
              body: "A trusted independent funeral director near you will respectfully bring your loved one into their care."
            },
            {
              n: "3",
              title: "Paperwork",
              body: "Your funeral director helps with all legal paperwork and books the cremation locally."
            },
            {
              n: "4",
              title: "Local cremation",
              body: "A dignified cremation takes place at a crematorium close to home — never transported across the country."
            },
            {
              n: "5",
              title: "Ashes returned",
              body: "The ashes can be returned to you for a memorial of your choosing, or scattered with care."
            }
          ].map((step) => (
            <div
              key={step.n}
              className="bg-paper-warm border border-ink-200 rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-cta text-paper font-serif text-xl flex items-center justify-center mb-4">
                {step.n}
              </div>
              <p className="font-serif text-xl text-ink-900 mb-2 leading-snug">{step.title}</p>
              <p className="text-sm text-ink-700 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HELP & ADVICE SECTION — image background hook */}
      <section className="section-image relative border-y border-ink-200">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-prose mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-medium">
              Practical guidance
            </p>
            <h2 className="mb-4 balance">If you&rsquo;ve just lost someone</h2>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              For many people, arranging a funeral is something they&rsquo;ve never done before. These
              short guides walk you through what needs to happen &mdash; at your own pace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/help-and-advice/what-to-do-when-someone-dies",
                title: "What to do when someone dies",
                body: "A step-by-step guide to the first hours and days."
              },
              {
                href: "/help-and-advice/registering-a-death-england-wales",
                title: "Registering a death",
                body: "How registration works in England, Wales and Scotland."
              },
              {
                href: "/help-and-advice/coroner-and-procurator-fiscal",
                title: "When the coroner is involved",
                body: "What happens when a death is referred to a coroner."
              }
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block bg-paper border border-ink-200 rounded-xl p-7 no-underline hover:no-underline shadow-soft hover:shadow-cardHover hover:-translate-y-0.5 transition-all group"
              >
                <p className="font-serif text-xl text-ink-900 mb-2 leading-snug group-hover:text-cta transition-colors">
                  {card.title}
                </p>
                <p className="text-sm text-ink-700 leading-relaxed mb-4">{card.body}</p>
                <span className="text-sm text-cta font-medium inline-flex items-center gap-1">
                  Read guide
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <PhoneCTA
            variant="dark"
            heading="Need help right now?"
            body="There's always someone available to talk you through what needs to happen. Calls are answered day and night, every day of the year."
          />
        </div>
      </section>
    </>
  );
}
