import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { northamptonLocation } from "@/lib/locations/northampton";

export const metadata: Metadata = {
  title: northamptonLocation.metaTitle,
  description: northamptonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${northamptonLocation.slug}`
  },
  openGraph: {
    title: northamptonLocation.metaTitle,
    description: northamptonLocation.metaDescription,
    url: `/locations/${northamptonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={northamptonLocation} />;
}
