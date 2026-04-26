import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { londonLocation } from "@/lib/locations/london";

export const metadata: Metadata = {
  title: londonLocation.metaTitle,
  description: londonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${londonLocation.slug}`
  },
  openGraph: {
    title: londonLocation.metaTitle,
    description: londonLocation.metaDescription,
    url: `/locations/${londonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={londonLocation} />;
}
