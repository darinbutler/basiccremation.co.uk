import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { sunderlandLocation } from "@/lib/locations/sunderland";

export const metadata: Metadata = {
  title: sunderlandLocation.metaTitle,
  description: sunderlandLocation.metaDescription,
  alternates: {
    canonical: `/locations/${sunderlandLocation.slug}`
  },
  openGraph: {
    title: sunderlandLocation.metaTitle,
    description: sunderlandLocation.metaDescription,
    url: `/locations/${sunderlandLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={sunderlandLocation} />;
}
