import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";
import type { LocationData } from "@/lib/location-types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2400&q=75";

const PRICING_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=75";

const ADVICE_IMAGE =
  "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=2000&q=75";

interface LocationPageProps {
  data: LocationData;
}

export function LocationPage({ data }: LocationPageProps) {
  const registerLink =
    data.country === "Scotland"
      ? "/help-and-advice/registering-a-death-scotland"
      : "/help-and-advice/registering-a-death-england-wales";

  const coronerLink = "/help-and-advice/coroner-and-procurator-fiscal";

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-fallback">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 scrim-down-dark"></div>
          <div className="absolute inset-0 scrim-left-light md:bg-gradient-to-r md:from-paper/90 md:via-paper/60 md:to-transparent"></div>
        </div>

        <div className="relative z-10 container-page py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-5 font-semibold">
              {data.city} · {data.country}
            </p>
            <h1 className="text-ink-900 mb-6 balance">{data.h1}</h1>
            <p className="text-lg md:text-xl text-ink-700 mb-8 leading-relaxed pretty">
              {data.lede}
            </p>
            <PhoneCTA variant="light-on-image" />
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS strip */}
      <section className="bg-paper-warm border-b border-ink-100">
        <div className="container-page py-5 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <p className="text-sm text-ink-500 font-medium uppercase tracking-wider md:flex-shrink-0">
              Trusted across the UK
            </p>
            <div className="grid grid-cols-2 md:flex md:items-center gap-3 md:gap-8">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-coral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M10 1l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 14.5l-5.2 2.7 1-5.9L1.5 7.2l5.9-.9z" />
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

      {/* IN-PAGE NAV — anchors for long-format scannability */}
      <nav className="container-page py-5 md:py-6 border-b border-ink-100" aria-label="On this page">
        <div className="max-w-page mx-auto">
          <p className="text-xs uppercase tracking-wider text-ink-500 mb-3 font-medium">On this page</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {[
              ["#about", `About in ${data.city}`],
              ["#pricing", "Pricing"],
              ["#crematoria", "Crematoria"],
              ["#areas", "Areas covered"],
              ["#process", "What happens"],
              ["#registering", "Registering a death"],
              ["#coroner", "When the coroner is involved"],
              ["#support", "Bereavement support"],
              ["#funding", "Help with costs"],
              ["#faqs", "FAQs"]
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-ink-700 no-underline hover:text-cta hover:underline transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* LOCAL INTRO */}
      <section id="about" className="container-page py-14 md:py-20 scroll-mt-24">
        <div className="max-w-prose mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
            About our service in {data.city}
          </p>
          <h2 className="mb-6 balance">A local cremation, arranged with care.</h2>
          <div className="prose-content">
            {data.localIntro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-paper-warm border-y border-ink-100 scroll-mt-24">
        <div className="container-page py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-card order-2 md:order-1">
              <Image
                src={PRICING_IMAGE}
                alt={`A bright sunlit garden — celebration of life ${data.city}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
                Pricing in {data.city}
              </p>
              <h2 className="mb-6 balance">A single price. No hidden extras.</h2>
              <div className="bg-paper border border-sage-200 rounded-2xl p-6 md:p-8 mb-6 shadow-soft">
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
                    `Cremation at a local ${data.region} crematorium`,
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
                The only additional fee that may apply is a{" "}
                <strong>&pound;{siteConfig.priorityCarePrice} Priority Care collection</strong> charge if
                your loved one is at home, in a care home or hospice in {data.city} or anywhere in {data.region}.
                This is always explained clearly before anything happens.
              </p>
              <Link href="/prices" className="font-medium">
                See full price list &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CREMATORIA — substantive named-with-detail content */}
      <section id="crematoria" className="container-page py-14 md:py-20 scroll-mt-24">
        <div className="max-w-prose mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
            Local crematoria
          </p>
          <h2 className="mb-4 balance">The crematoria we use across {data.region}</h2>
          {data.crematoriaIntro && (
            <p className="text-lg text-ink-700 leading-relaxed pretty">{data.crematoriaIntro}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {data.crematoria.map((crem) => (
            <div
              key={crem.name}
              className="bg-paper border border-sage-200 rounded-xl p-6 md:p-7 shadow-soft hover:shadow-card transition-shadow"
            >
              <h3 className="text-xl md:text-2xl mb-2">{crem.name}</h3>
              <p className="text-sm text-ink-500 mb-3">{crem.address}</p>
              <p className="text-ink-700 leading-relaxed text-[15px]">{crem.note}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-500 mt-8 italic max-w-prose">
          The exact crematorium used depends on the area of {data.region} you&rsquo;re in, and on
          availability. The local funeral director arranges this directly and tells you the date and
          time in advance.
        </p>
      </section>

      {/* AREAS COVERED */}
      <section id="areas" className="bg-paper-warm border-y border-ink-100 scroll-mt-24">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-prose mx-auto mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              Areas covered
            </p>
            <h2 className="mb-4 balance">{data.region} and surrounding areas</h2>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              We arrange basic cremations across the whole of {data.region}. The price is the same in every area.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {data.areasCovered.map((area) => (
              <div
                key={area}
                className="bg-paper border border-ink-100 rounded-lg px-4 py-3 text-center text-sm text-ink-700 shadow-soft"
              >
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-ink-500 mt-8">
            Don&rsquo;t see your area? We almost certainly cover it &mdash; call us to check.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section id="process" className="container-page py-14 md:py-20 scroll-mt-24">
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
            { n: "2", title: `Local ${data.city} care`, body: `An independent funeral director near you brings your loved one into their care at their own funeral home.`, alt: true },
            { n: "3", title: "Paperwork", body: "We help with all legal paperwork and book the cremation at a local crematorium.", alt: false },
            { n: "4", title: `Local ${data.region} cremation`, body: `A dignified cremation takes place at one of ${data.region}'s established crematoria.`, alt: true },
            { n: "5", title: "Ashes returned", body: "The ashes can be returned to you for a memorial of your choosing, or scattered with care.", alt: false }
          ].map((step) => (
            <div key={step.n} className={step.alt ? "process-card-alt" : "process-card"}>
              <div className="w-10 h-10 rounded-full bg-paper/15 backdrop-blur text-paper font-serif text-xl flex items-center justify-center mb-4 border border-paper/20">
                {step.n}
              </div>
              <p className="font-serif text-xl text-paper mb-2 leading-snug font-medium">{step.title}</p>
              <p className="text-sm text-paper/85 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-prose mx-auto mt-10 text-ink-700 leading-relaxed text-center">
          <p>{data.transitNote}</p>
        </div>
      </section>

      {/* REGISTER OFFICE */}
      <section id="registering" className="bg-paper-warm border-y border-ink-100 scroll-mt-24">
        <div className="container-page py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
                Registering a death in {data.city}
              </p>
              <h2 className="mb-6 balance">{data.registerOffice.name}</h2>

              <div className="bg-paper border border-sage-200 rounded-xl p-5 md:p-6 mb-6 shadow-soft">
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-ink-500 uppercase tracking-wider text-[11px] font-semibold">Address</dt>
                    <dd className="text-ink-900 mt-1">{data.registerOffice.address}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-500 uppercase tracking-wider text-[11px] font-semibold">Phone</dt>
                    <dd className="text-ink-900 mt-1">
                      <a href={`tel:${data.registerOffice.phone.replace(/\s/g, "")}`} className="text-cta">
                        {data.registerOffice.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-500 uppercase tracking-wider text-[11px] font-semibold">Email</dt>
                    <dd className="text-ink-900 mt-1 break-all">
                      <a href={`mailto:${data.registerOffice.email}`} className="text-cta">
                        {data.registerOffice.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="prose-content">
                <p>{data.registerOffice.notes}</p>
                <p>
                  <Link href={registerLink} className="font-medium">
                    Read the full guide to registering a death &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Hospital bereavement contacts */}
          {data.hospitalBereavement && data.hospitalBereavement.length > 0 && (
            <div className="mt-12 pt-12 border-t border-ink-200">
              <h3 className="mb-4">Hospital bereavement offices in {data.region}</h3>
              <p className="text-ink-700 mb-6 max-w-prose leading-relaxed">
                If your loved one died in hospital, the hospital&rsquo;s bereavement office handles the
                paperwork that needs to go to the Medical Examiner before the death can be registered.
                Your funeral director will normally liaise with them on your behalf.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 md:gap-4">
                {data.hospitalBereavement.map((h) => (
                  <li key={h.name} className="bg-paper border border-ink-100 rounded-lg p-4 shadow-soft">
                    <p className="font-semibold text-ink-900 mb-1">{h.name}</p>
                    <p className="text-sm text-ink-700 leading-relaxed">{h.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CORONER */}
      <section id="coroner" className="container-page py-14 md:py-20 scroll-mt-24">
        <div className="max-w-prose mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
            When the coroner is involved
          </p>
          <h2 className="mb-6 balance">If the death has been referred to the coroner</h2>
          <div className="prose-content">
            {data.coronerNotes.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p>
              <Link href={coronerLink} className="font-medium">
                Read more about the coroner&rsquo;s role &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* BEREAVEMENT SUPPORT — image background */}
      <section id="support" className="relative overflow-hidden border-y border-ink-100 scroll-mt-24">
        <div className="absolute inset-0 z-0">
          <Image src={ADVICE_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-paper/85"></div>
        </div>
        <div className="relative z-10 container-page py-14 md:py-20">
          <div className="max-w-prose mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
              Local support
            </p>
            <h2 className="mb-4 balance">Bereavement support in {data.region}</h2>
            <p className="text-lg text-ink-700 leading-relaxed pretty">
              Grief takes time, and there&rsquo;s no right way to feel. These local services in {data.region} provide
              free, confidential support &mdash; whether you need someone to talk to today or in a few months&rsquo; time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {data.supportServices.map((service) => (
              <div
                key={service.name}
                className="bg-paper border border-sage-200 rounded-xl p-6 shadow-soft"
              >
                <h3 className="text-xl mb-2">{service.name}</h3>
                {service.phone && (
                  <p className="mb-3">
                    <a href={`tel:${service.phone.replace(/\s/g, "")}`} className="font-serif text-cta text-lg">
                      {service.phone}
                    </a>
                  </p>
                )}
                <p className="text-ink-700 leading-relaxed text-[15px] mb-3">{service.description}</p>
                {service.url && (
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-cta font-medium inline-flex items-center gap-1"
                  >
                    Visit website
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP WITH FUNERAL COSTS */}
      <section id="funding" className="container-page py-14 md:py-20 scroll-mt-24">
        <div className="max-w-prose mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold">
            Help with funeral costs
          </p>
          <h2 className="mb-6 balance">If you&rsquo;re worried about the cost</h2>
          <div className="prose-content">
            {data.fundingHelp.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-sm text-ink-500 italic">
              We&rsquo;re not financial advisors and can&rsquo;t make benefit applications on your
              behalf, but the team is happy to talk you through what&rsquo;s available before you commit
              to anything.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="bg-paper-warm border-y border-ink-100 scroll-mt-24">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-cta mb-4 font-semibold text-center">
              Frequently asked questions
            </p>
            <h2 className="mb-10 text-center balance">{data.city} questions, answered</h2>

            <dl className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-paper border border-sage-200 rounded-xl p-5 md:p-6 group shadow-soft"
                >
                  <summary className="font-serif text-xl text-ink-900 cursor-pointer list-none flex justify-between items-start gap-4 leading-snug">
                    <span>{faq.question}</span>
                    <span className="text-cta flex-shrink-0 transition-transform group-open:rotate-45 mt-1" aria-hidden>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-ink-700 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <PhoneCTA
            variant="dark"
            heading={`Speak to us about a cremation in ${data.city}`}
            body="There's always someone available to talk you through what needs to happen. Calls are answered day and night, every day of the year."
          />
        </div>
      </section>

      {/* JSON-LD: LocalBusiness / FuneralHome schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FuneralHome",
            "@id": `${siteConfig.url}/locations/${data.slug}/`,
            name: `Basic Cremation — ${data.city}`,
            description: data.metaDescription,
            url: `${siteConfig.url}/locations/${data.slug}/`,
            telephone: siteConfig.phoneTel,
            priceRange: "££",
            areaServed: {
              "@type": "AdministrativeArea",
              name: data.region
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: data.city,
              addressCountry: "GB",
              addressRegion: data.country
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59"
              }
            ],
            offers: {
              "@type": "Offer",
              name: "Basic Cremation",
              priceCurrency: "GBP",
              price: siteConfig.basePrice,
              availability: "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* JSON-LD: FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
