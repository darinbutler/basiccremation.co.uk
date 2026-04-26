import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { cambridgeLocation } from "@/lib/locations/cambridge";

export const metadata: Metadata = {
  title: cambridgeLocation.metaTitle,
  description: cambridgeLocation.metaDescription,
  alternates: {
    canonical: `/locations/${cambridgeLocation.slug}`
  },
  openGraph: {
    title: cambridgeLocation.metaTitle,
    description: cambridgeLocation.metaDescription,
    url: `/locations/${cambridgeLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={cambridgeLocation} />;
}
