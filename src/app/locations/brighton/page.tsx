import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { brightonLocation } from "@/lib/locations/brighton";

export const metadata: Metadata = {
  title: brightonLocation.metaTitle,
  description: brightonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${brightonLocation.slug}`
  },
  openGraph: {
    title: brightonLocation.metaTitle,
    description: brightonLocation.metaDescription,
    url: `/locations/${brightonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={brightonLocation} />;
}
