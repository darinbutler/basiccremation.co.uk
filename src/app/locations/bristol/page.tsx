import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { bristolLocation } from "@/lib/locations/bristol";

export const metadata: Metadata = {
  title: bristolLocation.metaTitle,
  description: bristolLocation.metaDescription,
  alternates: {
    canonical: `/locations/${bristolLocation.slug}`
  },
  openGraph: {
    title: bristolLocation.metaTitle,
    description: bristolLocation.metaDescription,
    url: `/locations/${bristolLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: bristolLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: bristolLocation.cityImageAlt || `Basic Cremation in ${bristolLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: bristolLocation.metaTitle,
    description: bristolLocation.metaDescription,
    images: [bristolLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: bristolLocation.city, url: `/locations/${bristolLocation.slug}` }
        ]}
      />
      <LocationPage data={bristolLocation} />
    </>
  );
}
