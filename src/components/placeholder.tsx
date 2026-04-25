import { PhoneCTA } from "@/components/phone-cta";

export function Placeholder({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-page mx-auto px-4 md:px-8 py-16">
      <div className="max-w-prose">
        <h1 className="mb-6">{title}</h1>
        <p className="text-lg text-ink-700 mb-6">
          {description ||
            "We're putting this page together. In the meantime, our team is available to help you 24 hours a day."}
        </p>
        <PhoneCTA heading="Speak to us now" />
      </div>
    </div>
  );
}
