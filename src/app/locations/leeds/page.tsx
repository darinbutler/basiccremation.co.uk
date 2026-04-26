import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { leedsLocation } from "@/lib/locations/leeds";

export const metadata: Metadata = {
  title: leedsLocation.metaTitle,
  description: leedsLocation.metaDescription,
  alternates: {
    canonical: `/locations/${leedsLocation.slug}`
  },
  openGraph: {
    title: leedsLocation.metaTitle,
    description: leedsLocation.metaDescription,
    url: `/locations/${leedsLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={leedsLocation} />;
}
