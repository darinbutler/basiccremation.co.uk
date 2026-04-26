import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { hullLocation } from "@/lib/locations/hull";

export const metadata: Metadata = {
  title: hullLocation.metaTitle,
  description: hullLocation.metaDescription,
  alternates: {
    canonical: `/locations/${hullLocation.slug}`
  },
  openGraph: {
    title: hullLocation.metaTitle,
    description: hullLocation.metaDescription,
    url: `/locations/${hullLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={hullLocation} />;
}
