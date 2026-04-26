import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { derbyLocation } from "@/lib/locations/derby";

export const metadata: Metadata = {
  title: derbyLocation.metaTitle,
  description: derbyLocation.metaDescription,
  alternates: {
    canonical: `/locations/${derbyLocation.slug}`
  },
  openGraph: {
    title: derbyLocation.metaTitle,
    description: derbyLocation.metaDescription,
    url: `/locations/${derbyLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={derbyLocation} />;
}
