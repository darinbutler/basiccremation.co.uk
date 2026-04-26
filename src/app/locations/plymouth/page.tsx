import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { plymouthLocation } from "@/lib/locations/plymouth";

export const metadata: Metadata = {
  title: plymouthLocation.metaTitle,
  description: plymouthLocation.metaDescription,
  alternates: {
    canonical: `/locations/${plymouthLocation.slug}`
  },
  openGraph: {
    title: plymouthLocation.metaTitle,
    description: plymouthLocation.metaDescription,
    url: `/locations/${plymouthLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={plymouthLocation} />;
}
