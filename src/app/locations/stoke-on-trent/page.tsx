import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { stokeOnTrentLocation } from "@/lib/locations/stoke-on-trent";

export const metadata: Metadata = {
  title: stokeOnTrentLocation.metaTitle,
  description: stokeOnTrentLocation.metaDescription,
  alternates: {
    canonical: `/locations/${stokeOnTrentLocation.slug}`
  },
  openGraph: {
    title: stokeOnTrentLocation.metaTitle,
    description: stokeOnTrentLocation.metaDescription,
    url: `/locations/${stokeOnTrentLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={stokeOnTrentLocation} />;
}
