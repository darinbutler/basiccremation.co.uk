import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { newcastleLocation } from "@/lib/locations/newcastle";

export const metadata: Metadata = {
  title: newcastleLocation.metaTitle,
  description: newcastleLocation.metaDescription,
  alternates: {
    canonical: `/locations/${newcastleLocation.slug}`
  },
  openGraph: {
    title: newcastleLocation.metaTitle,
    description: newcastleLocation.metaDescription,
    url: `/locations/${newcastleLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={newcastleLocation} />;
}
