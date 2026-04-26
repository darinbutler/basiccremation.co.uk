import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { portsmouthLocation } from "@/lib/locations/portsmouth";

export const metadata: Metadata = {
  title: portsmouthLocation.metaTitle,
  description: portsmouthLocation.metaDescription,
  alternates: {
    canonical: `/locations/${portsmouthLocation.slug}`
  },
  openGraph: {
    title: portsmouthLocation.metaTitle,
    description: portsmouthLocation.metaDescription,
    url: `/locations/${portsmouthLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={portsmouthLocation} />;
}
