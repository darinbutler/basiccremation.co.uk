import { siteConfig } from "@/lib/site-config";

interface PhoneCTAProps {
  heading?: string;
  body?: string;
  variant?: "default" | "compact" | "dark";
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"
      />
    </svg>
  );
}

export function PhoneCTA({ heading, body, variant = "default" }: PhoneCTAProps) {
  if (variant === "compact") {
    return (
      <div className="my-6">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-3 bg-cta hover:bg-cta-hover text-paper px-6 py-3 rounded-md no-underline hover:no-underline font-medium transition-colors shadow-soft"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <PhoneIcon />
          <span className="font-serif text-xl">{siteConfig.phone}</span>
        </a>
        <p className="text-sm text-ink-500 mt-2">Available 24 hours a day</p>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className="bg-sage-800 text-paper rounded-2xl p-8 md:p-10 my-8 shadow-card">
        {heading && (
          <p className="font-serif text-2xl md:text-3xl mb-3 text-paper">{heading}</p>
        )}
        {body && <p className="text-paper/85 mb-6 leading-relaxed">{body}</p>}
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-3 bg-paper hover:bg-paper-warm text-cta px-6 py-4 rounded-md no-underline hover:no-underline font-medium transition-colors"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <PhoneIcon />
          <span className="font-serif text-2xl">{siteConfig.phone}</span>
        </a>
        <p className="text-sm text-paper/70 mt-4">
          Available 24 hours a day, 7 days a week
        </p>
      </div>
    );
  }

  return (
    <div className="bg-sage-50 border border-sage-200 rounded-2xl p-7 md:p-9 my-8 shadow-soft">
      {heading && (
        <p className="font-serif text-2xl md:text-3xl text-ink-900 mb-3">{heading}</p>
      )}
      {body && <p className="text-ink-700 mb-6 leading-relaxed">{body}</p>}
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="inline-flex items-center gap-3 bg-cta hover:bg-cta-hover text-paper px-6 py-4 rounded-md no-underline hover:no-underline font-medium transition-colors shadow-soft"
        aria-label={`Call ${siteConfig.phone}`}
      >
        <PhoneIcon />
        <span className="font-serif text-2xl">{siteConfig.phone}</span>
      </a>
      <p className="text-sm text-ink-500 mt-4">
        Available 24 hours a day, 7 days a week
      </p>
    </div>
  );
}
