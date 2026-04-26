import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { swindonLocation } from "@/lib/locations/swindon";

export const metadata: Metadata = {
  title: swindonLocation.metaTitle,
  description: swindonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${swindonLocation.slug}`
  },
  openGraph: {
    title: swindonLocation.metaTitle,
    description: swindonLocation.metaDescription,
    url: `/locations/${swindonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={swindonLocation} />;
}
