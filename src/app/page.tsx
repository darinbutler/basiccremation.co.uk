import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

// Unsplash placeholder URLs — calm, age-agnostic, no funeral iconography.
// All chosen for warmth and brightness.

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2400&q=75";
// ^ Misty country path at dawn — peaceful, contemplative

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=2000&q=75";
// ^ Bright English countryside hillside — open, hopeful

const PRICING_IMAGE = "/images/pricing-memorial.jpg";
// ^ Locally hosted — provided memorial scene (Image 4)

const ADVICE_IMAGE =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=75";
// ^ Bright sunlit lake and mountains — open, light, optimistic

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>

        <div className="relative z-10 container-page py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">
              Help arranging a basic cremation
            </p>
            <h1 className="text-ink-900 mb-6 balance">
              A simple, dignified cremation &mdash; arranged with care.
            </h1>
            <p className="text-lg md:text-xl text-ink-700 mb-8 leading-relaxed pretty">
              If you&rsquo;re arranging a cremation for a parent, partner or loved one, we can help.
              No church service, no procession, no hidden costs &mdash; just a respectful cremation,
              with the time and space afterwards to remember them in your own way.
            </p>
            <PhoneCTA variant="light-on-image" />
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS strip — slim version */}
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-5 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <p className="text-sm text-ink-500 font-medium uppercase tracking-wider md:flex-shrink-0">
              Trusted across the UK
            </p>
            <div className="grid grid-cols-2 md:flex md:items-center gap-3 md:gap-8">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-coral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M10 1l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 14.5l-5.2 2.7 1-5.9L1.5 7.2l5.9-.9z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-ink-700"><span className="font-semibold">Reviews</span> on Trustpilot</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink-700">
                <svg className="w-4 h-4 text-cta" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 4a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <span><span className="font-semibold">NAFD &amp; SAIF</span> accredited network</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink-700">
                <svg className="w-4 h-4 text-cta" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><span className="font-semibold">24/7</span> phone support</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink-700">
                <svg className="w-4 h-4 text-cta" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 5h6m-6 5h4M5 5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
                </svg>
                <span><span className="font-semibold">£{siteConfig.basePrice.toLocaleString()}</span> all-inclusive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE US — bordered, animated, lifted cards */}
      <section className="container-page py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
            Why families choose us
          </p>
          <h2 className="mb-4 balance">A cremation handled locally, not centrally.</h2>
          <p className="text-lg text-ink-700 leading-relaxed pretty">
            Most direct-cremation companies move loved ones across the country to one central facility.
            We don&rsquo;t. The whole process happens close to home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Local funeral directors",
              body: "A trusted, independent funeral director near you takes care of your loved one in their own funeral home — no transport across the country.",
              icon: (
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M24 6L8 14v8c0 12 7 19 16 22 9-3 16-10 16-22v-8L24 6z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 24l4 4 8-8"/>
                </svg>
              )
            },
            {
              title: "One clear price",
              body: `£${siteConfig.basePrice.toLocaleString()} covers everything you need. Collection from a hospital or coroner's mortuary is included. Collection from a home, hospice or care home requires a £${siteConfig.priorityCarePrice} Priority Care fee, explained upfront.`,
              icon: (
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="18" strokeLinecap="round"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M28 18h-6a3 3 0 000 6h4a3 3 0 010 6h-7M24 14v4M24 30v4"/>
                </svg>
              )
            },
            {
              title: "Always someone to talk to",
              body: "Calls answered 24 hours a day, 7 days a week — by people who do this every day, not by a chatbot or a switchboard.",
              icon: (
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 10a4 4 0 014-4h4.5a4 4 0 014 3l1.4 5.6a4 4 0 01-.9 3.8L17 21.8a32 32 0 0012 12l3.4-3a4 4 0 013.8-.9L41.8 31.5A4 4 0 0145 35.5V40a4 4 0 01-4 4h-2C20 44 4 28 4 9V8z"/>
                </svg>
              )
            }
          ].map((item) => (
            <div key={item.title} className="trust-card">
              <div className="w-16 h-16 mx-auto mb-5 text-cta">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl md:text-2xl">{item.title}</h3>
              <p className="text-ink-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS A BASIC CREMATION — brighter image background */}
      <section className="relative border-y border-ink-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={ABOUT_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-paper/75"></div>
        </div>

        <div className="relative z-10 container-page py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
                What you need to know
              </p>
              <h2 className="mb-6 balance">What is a basic cremation?</h2>
            </div>
            <div className="md:col-span-7">
              <div className="prose-content">
                <p>
                  A basic cremation &mdash; sometimes called a direct or unattended cremation &mdash;
                  is a respectful cremation that takes place without a funeral service or mourners
                  present at the crematorium.
                </p>
                <p>
                  Many families choose it because it removes the cost and complexity of a traditional
                  funeral while leaving them free to remember their loved one in their own way: a
                  private gathering at home, a celebration of life later on, or scattering the ashes
                  somewhere meaningful.
                </p>
                <p>
                  <Link href="/what-is-a-basic-cremation" className="font-medium">
                    Read more about what&rsquo;s involved &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — image of bright sunlit garden alongside */}
      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-card order-2 md:order-1">
            <Image
              src={PRICING_IMAGE}
              alt="A family gathering in remembrance"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              Clear, all-inclusive pricing
            </p>
            <h2 className="mb-6 balance">A single price. No hidden extras.</h2>
            <div className="bg-paper-warm border border-sage-200 rounded-2xl p-6 md:p-8 mb-6">
              <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-sage-200">
                <span className="font-serif text-5xl md:text-6xl text-cta tracking-tight font-medium">
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
                  "Ashes returned to you, or scattered with care"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700">
                    <svg className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-ink-700 mb-4">
              The £{siteConfig.basePrice.toLocaleString()} price covers collection from a hospital or coroner&rsquo;s mortuary.
              Collection from a home, hospice or care home requires a{" "}
              <strong>&pound;{siteConfig.priorityCarePrice} Priority Care collection</strong> fee &mdash; making
              the total £{(siteConfig.basePrice + siteConfig.priorityCarePrice).toLocaleString()}. This is always explained clearly
              before anything happens, never added retrospectively.
            </p>
            <Link href="/prices" className="font-medium">
              See full price list &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS WHEN YOU CALL — coloured process cards */}
      <section className="bg-paper-warm border-y border-ink-100">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              What to expect
            </p>
            <h2 className="mb-4 balance">What happens when you call</h2>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              Five clear steps, taken at your pace, with someone to talk you through every one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { n: "1", title: "You call us", body: "Day or night. Our team listens and gently takes you through what needs to happen.", alt: false },
              { n: "2", title: "Local care", body: "An independent local funeral director near you brings your loved one into their care.", alt: true },
              { n: "3", title: "Paperwork", body: "We help with all legal paperwork and book the cremation at a local crematorium.", alt: false },
              { n: "4", title: "Local cremation", body: "A dignified cremation takes place close to home — never transported across the country.", alt: true },
              { n: "5", title: "Ashes returned", body: "The ashes can be returned to you for a memorial of your choosing, or scattered with care.", alt: false }
            ].map((step) => (
              <div key={step.n} className={step.alt ? "process-card-alt" : "process-card"}>
                <div className={`w-10 h-10 rounded-full bg-paper/15 backdrop-blur text-paper font-serif text-xl flex items-center justify-center mb-4 border border-paper/20`}>
                  {step.n}
                </div>
                <p className="font-serif text-xl text-paper mb-2 leading-snug font-medium">{step.title}</p>
                <p className="text-sm text-paper/85 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP & ADVICE — brighter background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={ADVICE_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-paper/72"></div>
        </div>

        <div className="relative z-10 container-page py-16 md:py-20">
          <div className="max-w-prose mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
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
                body: "A step-by-step guide to the first hours and days after a death."
              },
              {
                href: "/help-and-advice/registering-a-death-england-wales",
                title: "Registering a death",
                body: "How registration works in England, Wales and Scotland — they're different."
              },
              {
                href: "/help-and-advice/coroner-and-procurator-fiscal",
                title: "When the coroner is involved",
                body: "What happens when a death is referred to a coroner or Procurator Fiscal."
              }
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block bg-paper border border-ink-100 rounded-xl p-7 no-underline hover:no-underline shadow-soft hover:shadow-cardHover hover:-translate-y-0.5 transition-all group"
              >
                <p className="font-serif text-xl text-ink-900 mb-2 leading-snug font-medium group-hover:text-cta transition-colors">
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
      <section className="container-page py-16 md:py-20">
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
