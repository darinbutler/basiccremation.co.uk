import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { wrexhamLocation } from "@/lib/locations/wrexham";

export const metadata: Metadata = {
  title: wrexhamLocation.metaTitle,
  description: wrexhamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${wrexhamLocation.slug}`
  },
  openGraph: {
    title: wrexhamLocation.metaTitle,
    description: wrexhamLocation.metaDescription,
    url: `/locations/${wrexhamLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={wrexhamLocation} />;
}
