import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { lutonLocation } from "@/lib/locations/luton";

export const metadata: Metadata = {
  title: lutonLocation.metaTitle,
  description: lutonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${lutonLocation.slug}`
  },
  openGraph: {
    title: lutonLocation.metaTitle,
    description: lutonLocation.metaDescription,
    url: `/locations/${lutonLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={lutonLocation} />;
}
