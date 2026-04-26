import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { boltonLocation } from "@/lib/locations/bolton";

export const metadata: Metadata = {
  title: boltonLocation.metaTitle,
  description: boltonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${boltonLocation.slug}`
  },
  openGraph: {
    title: boltonLocation.metaTitle,
    description: boltonLocation.metaDescription,
    url: `/locations/${boltonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={boltonLocation} />;
}
