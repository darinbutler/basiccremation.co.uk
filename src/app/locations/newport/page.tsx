import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { newportLocation } from "@/lib/locations/newport";

export const metadata: Metadata = {
  title: newportLocation.metaTitle,
  description: newportLocation.metaDescription,
  alternates: {
    canonical: `/locations/${newportLocation.slug}`
  },
  openGraph: {
    title: newportLocation.metaTitle,
    description: newportLocation.metaDescription,
    url: `/locations/${newportLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={newportLocation} />;
}
