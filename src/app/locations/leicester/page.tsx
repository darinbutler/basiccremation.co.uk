import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { leicesterLocation } from "@/lib/locations/leicester";

export const metadata: Metadata = {
  title: leicesterLocation.metaTitle,
  description: leicesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${leicesterLocation.slug}`
  },
  openGraph: {
    title: leicesterLocation.metaTitle,
    description: leicesterLocation.metaDescription,
    url: `/locations/${leicesterLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={leicesterLocation} />;
}
