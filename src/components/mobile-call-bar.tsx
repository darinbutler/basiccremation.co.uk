import { siteConfig } from "@/lib/site-config";

export function MobileCallBar() {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-accent-dark text-white px-4 py-3 flex items-center justify-between no-underline shadow-lg"
      aria-label={`Call ${siteConfig.phone}`}
    >
      <span className="text-sm">
        <span className="block text-xs opacity-80">24 hours, every day</span>
        <span className="font-serif text-lg">Call {siteConfig.phone}</span>
      </span>
      <span aria-hidden className="text-2xl">&rarr;</span>
    </a>
  );
}
