import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { oxfordLocation } from "@/lib/locations/oxford";

export const metadata: Metadata = {
  title: oxfordLocation.metaTitle,
  description: oxfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${oxfordLocation.slug}`
  },
  openGraph: {
    title: oxfordLocation.metaTitle,
    description: oxfordLocation.metaDescription,
    url: `/locations/${oxfordLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={oxfordLocation} />;
}
