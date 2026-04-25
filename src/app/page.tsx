import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneCTA } from "@/components/phone-cta";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper-warm border-b border-ink-300/30">
        <div className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-accent-dark mb-4">
              Help arranging a basic cremation
            </p>
            <h1 className="mb-6">A simple, dignified cremation when you need it most.</h1>
            <p className="text-xl text-ink-700 mb-8 leading-relaxed">
              If you&rsquo;ve lost a loved one and need to arrange a basic cremation in England,
              Scotland or Wales, we can help. Speak to someone now &mdash; any time, day or night.
            </p>
            <PhoneCTA
              heading="Speak to us now"
              body="Our team is here 24 hours a day to help you arrange a basic cremation."
            />
          </div>
        </div>
      </section>

      {/* What is a basic cremation */}
      <section className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-prose">
          <h2 className="mb-6">What is a basic cremation?</h2>
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
              <Link href="/what-is-a-basic-cremation">Read more about what&rsquo;s involved &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Price block */}
      <section className="bg-paper-warm border-y border-ink-300/30">
        <div className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-prose">
            <h2 className="mb-4">A clear, single price</h2>
            <p className="mb-6">
              <span className="font-serif text-5xl text-accent-dark block">
                &pound;{siteConfig.basePrice.toLocaleString()}
              </span>
              <span className="block text-base text-ink-500 mt-1">
                complete basic cremation, all-inclusive
              </span>
            </p>
            <p className="text-lg text-ink-700 mb-4 leading-relaxed">
              The price includes everything needed to care for your loved one: collection from a
              hospital or coroner&rsquo;s mortuary, professional care, a suitable coffin, all
              paperwork, cremation at a local crematorium, and the return of the ashes.
            </p>
            <p className="text-lg text-ink-700 mb-6 leading-relaxed">
              The only additional fee that may apply is a &pound;{siteConfig.priorityCarePrice}{" "}
              Priority Care collection charge if your loved one is at home, in a care home or
              hospice. This is always explained clearly before anything happens.
            </p>
            <p>
              <Link href="/prices">See full price list &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

      {/* What happens when you call */}
      <section className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-prose">
          <h2 className="mb-8">What happens when you call</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent-dark font-serif text-xl flex items-center justify-center">
                1
              </span>
              <div>
                <p className="font-serif text-xl text-ink-900 mb-1">You call us</p>
                <p className="text-ink-700">
                  Day or night. Our team will gently take you through what needs to happen and answer
                  any questions you have.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent-dark font-serif text-xl flex items-center justify-center">
                2
              </span>
              <div>
                <p className="font-serif text-xl text-ink-900 mb-1">A local funeral director takes care</p>
                <p className="text-ink-700">
                  A trusted independent funeral director near you will respectfully bring your loved
                  one into their care at their own funeral home.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent-dark font-serif text-xl flex items-center justify-center">
                3
              </span>
              <div>
                <p className="font-serif text-xl text-ink-900 mb-1">Paperwork and arrangements</p>
                <p className="text-ink-700">
                  Your funeral director will help with all the legal paperwork and book the cremation
                  at a local crematorium.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent-dark font-serif text-xl flex items-center justify-center">
                4
              </span>
              <div>
                <p className="font-serif text-xl text-ink-900 mb-1">A local cremation</p>
                <p className="text-ink-700">
                  A dignified cremation takes place at a crematorium close to home &mdash; not
                  transported across the country to a centralised facility.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent-dark font-serif text-xl flex items-center justify-center">
                5
              </span>
              <div>
                <p className="font-serif text-xl text-ink-900 mb-1">The ashes are returned</p>
                <p className="text-ink-700">
                  The ashes can be returned to you for a memorial of your choosing, or scattered at
                  the crematorium&rsquo;s garden of remembrance.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Help and advice */}
      <section className="bg-paper-warm border-t border-ink-300/30">
        <div className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-16">
          <h2 className="mb-2">If you&rsquo;ve just lost someone</h2>
          <p className="text-ink-700 mb-8 max-w-prose">
            For many people, arranging a funeral is something they&rsquo;ve never done before. These
            short guides walk you through what needs to happen &mdash; at your own pace.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/help-and-advice/what-to-do-when-someone-dies"
              className="block bg-paper border border-ink-300/30 rounded-lg p-6 no-underline hover:border-accent transition-colors"
            >
              <p className="font-serif text-xl text-ink-900 mb-2">What to do when someone dies</p>
              <p className="text-sm text-ink-700">
                A step-by-step guide to the first hours and days.
              </p>
            </Link>
            <Link
              href="/help-and-advice/registering-a-death-england-wales"
              className="block bg-paper border border-ink-300/30 rounded-lg p-6 no-underline hover:border-accent transition-colors"
            >
              <p className="font-serif text-xl text-ink-900 mb-2">Registering a death</p>
              <p className="text-sm text-ink-700">
                How registration works in England and Wales &mdash; or in Scotland.
              </p>
            </Link>
            <Link
              href="/help-and-advice/coroner-and-procurator-fiscal"
              className="block bg-paper border border-ink-300/30 rounded-lg p-6 no-underline hover:border-accent transition-colors"
            >
              <p className="font-serif text-xl text-ink-900 mb-2">When the coroner is involved</p>
              <p className="text-sm text-ink-700">
                What happens when a death is referred to a coroner or Procurator Fiscal.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-prose">
          <PhoneCTA
            heading="Need help right now?"
            body="There&rsquo;s always someone available to talk you through what needs to happen. Calls are answered day and night, every day of the year."
          />
        </div>
      </section>
    </>
  );
}
