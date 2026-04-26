import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { southamptonLocation } from "@/lib/locations/southampton";

export const metadata: Metadata = {
  title: southamptonLocation.metaTitle,
  description: southamptonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${southamptonLocation.slug}`
  },
  openGraph: {
    title: southamptonLocation.metaTitle,
    description: southamptonLocation.metaDescription,
    url: `/locations/${southamptonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={southamptonLocation} />;
}
