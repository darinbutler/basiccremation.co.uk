import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { bournemouthLocation } from "@/lib/locations/bournemouth";

export const metadata: Metadata = {
  title: bournemouthLocation.metaTitle,
  description: bournemouthLocation.metaDescription,
  alternates: {
    canonical: `/locations/${bournemouthLocation.slug}`
  },
  openGraph: {
    title: bournemouthLocation.metaTitle,
    description: bournemouthLocation.metaDescription,
    url: `/locations/${bournemouthLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={bournemouthLocation} />;
}
