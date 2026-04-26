import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { bristolLocation } from "@/lib/locations/bristol";

export const metadata: Metadata = {
  title: bristolLocation.metaTitle,
  description: bristolLocation.metaDescription,
  alternates: {
    canonical: `/locations/${bristolLocation.slug}`
  },
  openGraph: {
    title: bristolLocation.metaTitle,
    description: bristolLocation.metaDescription,
    url: `/locations/${bristolLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={bristolLocation} />;
}
