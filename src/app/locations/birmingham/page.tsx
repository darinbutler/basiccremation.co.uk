import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { birminghamLocation } from "@/lib/locations/birmingham";

export const metadata: Metadata = {
  title: birminghamLocation.metaTitle,
  description: birminghamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${birminghamLocation.slug}`
  },
  openGraph: {
    title: birminghamLocation.metaTitle,
    description: birminghamLocation.metaDescription,
    url: `/locations/${birminghamLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={birminghamLocation} />;
}
