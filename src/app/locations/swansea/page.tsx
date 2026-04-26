import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { swanseaLocation } from "@/lib/locations/swansea";

export const metadata: Metadata = {
  title: swanseaLocation.metaTitle,
  description: swanseaLocation.metaDescription,
  alternates: {
    canonical: `/locations/${swanseaLocation.slug}`
  },
  openGraph: {
    title: swanseaLocation.metaTitle,
    description: swanseaLocation.metaDescription,
    url: `/locations/${swanseaLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={swanseaLocation} />;
}
