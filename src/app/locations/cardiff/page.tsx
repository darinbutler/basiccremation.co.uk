import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { cardiffLocation } from "@/lib/locations/cardiff";

export const metadata: Metadata = {
  title: cardiffLocation.metaTitle,
  description: cardiffLocation.metaDescription,
  alternates: {
    canonical: `/locations/${cardiffLocation.slug}`
  },
  openGraph: {
    title: cardiffLocation.metaTitle,
    description: cardiffLocation.metaDescription,
    url: `/locations/${cardiffLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={cardiffLocation} />;
}
