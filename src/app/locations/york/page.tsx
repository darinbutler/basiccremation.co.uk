import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { yorkLocation } from "@/lib/locations/york";

export const metadata: Metadata = {
  title: yorkLocation.metaTitle,
  description: yorkLocation.metaDescription,
  alternates: {
    canonical: `/locations/${yorkLocation.slug}`
  },
  openGraph: {
    title: yorkLocation.metaTitle,
    description: yorkLocation.metaDescription,
    url: `/locations/${yorkLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: yorkLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: yorkLocation.cityImageAlt || `Basic Cremation in ${yorkLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: yorkLocation.metaTitle,
    description: yorkLocation.metaDescription,
    images: [yorkLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: yorkLocation.city, url: `/locations/${yorkLocation.slug}` }
        ]}
      />
      <LocationPage data={yorkLocation} />
    </>
  );
}
