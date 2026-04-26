import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { norwichLocation } from "@/lib/locations/norwich";

export const metadata: Metadata = {
  title: norwichLocation.metaTitle,
  description: norwichLocation.metaDescription,
  alternates: {
    canonical: `/locations/${norwichLocation.slug}`
  },
  openGraph: {
    title: norwichLocation.metaTitle,
    description: norwichLocation.metaDescription,
    url: `/locations/${norwichLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={norwichLocation} />;
}
