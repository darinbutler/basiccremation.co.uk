import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { coventryLocation } from "@/lib/locations/coventry";

export const metadata: Metadata = {
  title: coventryLocation.metaTitle,
  description: coventryLocation.metaDescription,
  alternates: {
    canonical: `/locations/${coventryLocation.slug}`
  },
  openGraph: {
    title: coventryLocation.metaTitle,
    description: coventryLocation.metaDescription,
    url: `/locations/${coventryLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={coventryLocation} />;
}
