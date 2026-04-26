import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { readingLocation } from "@/lib/locations/reading";

export const metadata: Metadata = {
  title: readingLocation.metaTitle,
  description: readingLocation.metaDescription,
  alternates: {
    canonical: `/locations/${readingLocation.slug}`
  },
  openGraph: {
    title: readingLocation.metaTitle,
    description: readingLocation.metaDescription,
    url: `/locations/${readingLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: readingLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: readingLocation.cityImageAlt || `Basic Cremation in ${readingLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: readingLocation.metaTitle,
    description: readingLocation.metaDescription,
    images: [readingLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: readingLocation.city, url: `/locations/${readingLocation.slug}` }
        ]}
      />
      <LocationPage data={readingLocation} />
    </>
  );
}
