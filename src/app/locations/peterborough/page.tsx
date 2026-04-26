import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { peterboroughLocation } from "@/lib/locations/peterborough";

export const metadata: Metadata = {
  title: peterboroughLocation.metaTitle,
  description: peterboroughLocation.metaDescription,
  alternates: {
    canonical: `/locations/${peterboroughLocation.slug}`
  },
  openGraph: {
    title: peterboroughLocation.metaTitle,
    description: peterboroughLocation.metaDescription,
    url: `/locations/${peterboroughLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={peterboroughLocation} />;
}
