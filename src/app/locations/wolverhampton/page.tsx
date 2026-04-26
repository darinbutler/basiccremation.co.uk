import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { wolverhamptonLocation } from "@/lib/locations/wolverhampton";

export const metadata: Metadata = {
  title: wolverhamptonLocation.metaTitle,
  description: wolverhamptonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${wolverhamptonLocation.slug}`
  },
  openGraph: {
    title: wolverhamptonLocation.metaTitle,
    description: wolverhamptonLocation.metaDescription,
    url: `/locations/${wolverhamptonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={wolverhamptonLocation} />;
}
