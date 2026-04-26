import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { readingLocation } from "@/lib/locations/reading";

export const metadata: Metadata = {
  title: readingLocation.metaTitle,
  description: readingLocation.metaDescription,
  alternates: {
    canonical: `/locations/${readingLocation.slug}`
  },
  openGraph: {
    title: readingLocation.metaTitle,
    description: readingLocation.metaDescription,
    url: `/locations/${readingLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={readingLocation} />;
}
