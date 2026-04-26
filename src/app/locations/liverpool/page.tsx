import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { liverpoolLocation } from "@/lib/locations/liverpool";

export const metadata: Metadata = {
  title: liverpoolLocation.metaTitle,
  description: liverpoolLocation.metaDescription,
  alternates: {
    canonical: `/locations/${liverpoolLocation.slug}`
  },
  openGraph: {
    title: liverpoolLocation.metaTitle,
    description: liverpoolLocation.metaDescription,
    url: `/locations/${liverpoolLocation.slug}`,
    type: "website",
    locale: "en_GB"
  }
};

export default function Page() {
  return <LocationPage data={liverpoolLocation} />;
}
