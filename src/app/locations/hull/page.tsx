import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { hullLocation } from "@/lib/locations/hull";

export const metadata: Metadata = {
  title: hullLocation.metaTitle,
  description: hullLocation.metaDescription,
  alternates: {
    canonical: `/locations/${hullLocation.slug}`
  },
  openGraph: {
    title: hullLocation.metaTitle,
    description: hullLocation.metaDescription,
    url: `/locations/${hullLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: hullLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: hullLocation.cityImageAlt || `Basic Cremation in ${hullLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: hullLocation.metaTitle,
    description: hullLocation.metaDescription,
    images: [hullLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: hullLocation.city, url: `/locations/${hullLocation.slug}` }
        ]}
      />
      <LocationPage data={hullLocation} />
    </>
  );
}
