import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
}

/**
 * The "basiccremation" wordmark. Pure typography with a small leaf-flame mark.
 * Inspired by tradieinsurance.co.nz (lowercase wordmark) and col.co.uk (icon + wordmark).
 *
 * The mark is a simple geometric leaf — symbol of remembrance, growth, peace.
 * Designed to scale cleanly to favicon size and to read well at small sizes.
 */
export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const colorClass = variant === "light" ? "text-paper" : "text-ink-900";
  const accentClass = variant === "light" ? "text-sage-300" : "text-cta";

  const sizeMap = {
    sm: { mark: "w-6 h-6", text: "text-lg" },
    md: { mark: "w-8 h-8", text: "text-xl md:text-2xl" },
    lg: { mark: "w-10 h-10", text: "text-2xl md:text-3xl" }
  };
  const s = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 no-underline hover:no-underline group ${colorClass}`}
      aria-label="Basic Cremation home"
    >
      {/* The mark — a simple leaf shape */}
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={`${s.mark} ${accentClass} flex-shrink-0 transition-transform group-hover:scale-110 duration-300`}
        aria-hidden="true"
      >
        {/* Outer circle */}
        <circle
          cx="16"
          cy="16"
          r="14.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.4"
        />
        {/* Stylised leaf */}
        <path
          d="M 16 6 C 11 10, 8.5 14.5, 9 19 C 9.3 22, 11.5 24.5, 14 25.5 C 14.5 22, 14.7 18.5, 16 15 C 17.3 18.5, 17.5 22, 18 25.5 C 20.5 24.5, 22.7 22, 23 19 C 23.5 14.5, 21 10, 16 6 Z"
          fill="currentColor"
        />
      </svg>

      {/* Wordmark — lowercase, single weight, brand colour on second word */}
      <span className={`font-serif ${s.text} tracking-tight leading-none`}>
        <span className="font-semibold">basic</span>
        <span className={`font-medium ${accentClass}`}>cremation</span>
      </span>
    </Link>
  );
}
