import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { southendLocation } from "@/lib/locations/southend";

export const metadata: Metadata = {
  title: southendLocation.metaTitle,
  description: southendLocation.metaDescription,
  alternates: {
    canonical: `/locations/${southendLocation.slug}`
  },
  openGraph: {
    title: southendLocation.metaTitle,
    description: southendLocation.metaDescription,
    url: `/locations/${southendLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={southendLocation} />;
}
