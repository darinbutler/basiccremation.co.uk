import { PhoneCTA } from "@/components/phone-cta";

export function Placeholder({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="container-page py-16 md:py-24">
      <div className="max-w-prose">
        <h1 className="mb-6 balance">{title}</h1>
        <p className="text-lg text-ink-700 leading-relaxed mb-8">
          {description ||
            "We're putting this page together. In the meantime, our team is available to help you 24 hours a day."}
        </p>
        <PhoneCTA heading="Speak to us now" />
      </div>
    </div>
  );
}
