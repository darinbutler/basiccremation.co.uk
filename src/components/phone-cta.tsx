import { siteConfig } from "@/lib/site-config";

interface PhoneCTAProps {
  heading?: string;
  body?: string;
  variant?: "default" | "compact";
}

export function PhoneCTA({ heading, body, variant = "default" }: PhoneCTAProps) {
  if (variant === "compact") {
    return (
      <div className="my-6">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-3 bg-accent-dark hover:bg-accent text-white px-5 py-3 rounded no-underline font-serif text-xl transition-colors"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <span aria-hidden>&#9742;</span>
          {siteConfig.phone}
        </a>
        <p className="text-sm text-ink-500 mt-2">Available 24 hours a day</p>
      </div>
    );
  }

  return (
    <div className="bg-accent-light border border-accent/20 rounded-lg p-6 md:p-8 my-8">
      {heading && <p className="font-serif text-2xl text-ink-900 mb-2">{heading}</p>}
      {body && <p className="text-ink-700 mb-4">{body}</p>}
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="inline-flex items-center gap-3 bg-accent-dark hover:bg-accent text-white px-6 py-4 rounded no-underline font-serif text-2xl transition-colors"
        aria-label={`Call ${siteConfig.phone}`}
      >
        <span aria-hidden>&#9742;</span>
        {siteConfig.phone}
      </a>
      <p className="text-sm text-ink-500 mt-3">Available 24 hours a day, 7 days a week</p>
    </div>
  );
}
