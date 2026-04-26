import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { sheffieldLocation } from "@/lib/locations/sheffield";

export const metadata: Metadata = {
  title: sheffieldLocation.metaTitle,
  description: sheffieldLocation.metaDescription,
  alternates: {
    canonical: `/locations/${sheffieldLocation.slug}`
  },
  openGraph: {
    title: sheffieldLocation.metaTitle,
    description: sheffieldLocation.metaDescription,
    url: `/locations/${sheffieldLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={sheffieldLocation} />;
}
