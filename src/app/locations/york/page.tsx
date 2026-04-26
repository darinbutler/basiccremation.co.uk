import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { yorkLocation } from "@/lib/locations/york";

export const metadata: Metadata = {
  title: yorkLocation.metaTitle,
  description: yorkLocation.metaDescription,
  alternates: {
    canonical: `/locations/${yorkLocation.slug}`
  },
  openGraph: {
    title: yorkLocation.metaTitle,
    description: yorkLocation.metaDescription,
    url: `/locations/${yorkLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={yorkLocation} />;
}
