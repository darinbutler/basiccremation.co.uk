import { siteConfig } from "@/lib/site-config";

export function MobileCallBar() {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-cta text-paper px-5 py-3.5 flex items-center justify-between no-underline hover:no-underline shadow-cardHover"
      aria-label={`Call ${siteConfig.phone}`}
    >
      <span className="flex flex-col">
        <span className="text-[11px] uppercase tracking-wider opacity-80 font-medium">
          24 hours, every day
        </span>
        <span className="font-serif text-lg leading-tight">Call {siteConfig.phone}</span>
      </span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.7 2.808a2 2 0 0 1-.45 1.9L8.09 10.91a16 16 0 0 0 6 6l1.687-1.38a2 2 0 0 1 1.9-.45l2.808.7A2 2 0 0 1 22 17.72V20a2 2 0 0 1-2 2h-1C9.954 22 2 14.046 2 4V3z"/>
      </svg>
    </a>
  );
}
