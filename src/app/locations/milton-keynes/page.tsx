import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { miltonKeynesLocation } from "@/lib/locations/milton-keynes";

export const metadata: Metadata = {
  title: miltonKeynesLocation.metaTitle,
  description: miltonKeynesLocation.metaDescription,
  alternates: {
    canonical: `/locations/${miltonKeynesLocation.slug}`
  },
  openGraph: {
    title: miltonKeynesLocation.metaTitle,
    description: miltonKeynesLocation.metaDescription,
    url: `/locations/${miltonKeynesLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={miltonKeynesLocation} />;
}
