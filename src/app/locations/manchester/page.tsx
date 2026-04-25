import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { manchesterLocation } from "@/lib/locations/manchester";

export const metadata: Metadata = {
  title: manchesterLocation.metaTitle,
  description: manchesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${manchesterLocation.slug}`
  },
  openGraph: {
    title: manchesterLocation.metaTitle,
    description: manchesterLocation.metaDescription,
    url: `/locations/${manchesterLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={manchesterLocation} />;
}
