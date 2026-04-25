import { siteConfig } from "@/lib/site-config";

interface PhoneCTAProps {
  heading?: string;
  body?: string;
  variant?: "default" | "compact" | "dark" | "light-on-image";
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"/>
    </svg>
  );
}

export function PhoneCTA({ heading, body, variant = "default" }: PhoneCTAProps) {
  if (variant === "compact") {
    return (
      <div className="my-6">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-3 bg-cta hover:bg-cta-hover text-paper px-6 py-3.5 rounded-md no-underline hover:no-underline font-medium transition-all shadow-soft hover:shadow-card"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <PhoneIcon />
          <span className="font-serif text-xl leading-none">{siteConfig.phone}</span>
        </a>
        <p className="text-sm text-ink-500 mt-2">Available 24 hours a day</p>
      </div>
    );
  }

  if (variant === "light-on-image") {
    return (
      <div className="flex flex-wrap gap-4 items-center">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-3 bg-paper hover:bg-paper-warm text-cta px-7 py-4 rounded-md no-underline hover:no-underline font-medium transition-all shadow-card"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <PhoneIcon />
          <span className="font-serif text-2xl leading-none">{siteConfig.phone}</span>
        </a>
        <span className="text-paper/95 text-sm">
          Available 24 hours a day, every day of the year
        </span>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className="bg-sage-800 text-paper rounded-2xl p-8 md:p-10 my-8 shadow-card">
        {heading && <h3 className="text-paper mb-3">{heading}</h3>}
        {body && <p className="text-paper/85 mb-6 leading-relaxed text-lg">{body}</p>}
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-3 bg-paper hover:bg-paper-warm text-cta px-6 py-4 rounded-md no-underline hover:no-underline font-medium transition-colors"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <PhoneIcon />
          <span className="font-serif text-2xl leading-none">{siteConfig.phone}</span>
        </a>
        <p className="text-sm text-paper/70 mt-4">
          Available 24 hours a day, 7 days a week
        </p>
      </div>
    );
  }

  return (
    <div className="bg-sage-50 border border-sage-200 rounded-2xl p-7 md:p-9 my-8 shadow-soft">
      {heading && <h3 className="text-ink-900 mb-3">{heading}</h3>}
      {body && <p className="text-ink-700 mb-6 leading-relaxed text-lg">{body}</p>}
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="inline-flex items-center gap-3 bg-cta hover:bg-cta-hover text-paper px-6 py-4 rounded-md no-underline hover:no-underline font-medium transition-all shadow-soft hover:shadow-card"
        aria-label={`Call ${siteConfig.phone}`}
      >
        <PhoneIcon />
        <span className="font-serif text-2xl leading-none">{siteConfig.phone}</span>
      </a>
      <p className="text-sm text-ink-500 mt-4">
        Available 24 hours a day, 7 days a week
      </p>
    </div>
  );
}
