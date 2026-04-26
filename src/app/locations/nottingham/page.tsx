import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { nottinghamLocation } from "@/lib/locations/nottingham";

export const metadata: Metadata = {
  title: nottinghamLocation.metaTitle,
  description: nottinghamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${nottinghamLocation.slug}`
  },
  openGraph: {
    title: nottinghamLocation.metaTitle,
    description: nottinghamLocation.metaDescription,
    url: `/locations/${nottinghamLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={nottinghamLocation} />;
}
