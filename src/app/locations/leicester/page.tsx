import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { leicesterLocation } from "@/lib/locations/leicester";

export const metadata: Metadata = {
  title: leicesterLocation.metaTitle,
  description: leicesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${leicesterLocation.slug}`
  },
  openGraph: {
    title: leicesterLocation.metaTitle,
    description: leicesterLocation.metaDescription,
    url: `/locations/${leicesterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: leicesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: leicesterLocation.cityImageAlt || `Basic Cremation in ${leicesterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: leicesterLocation.metaTitle,
    description: leicesterLocation.metaDescription,
    images: [leicesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: leicesterLocation.city, url: `/locations/${leicesterLocation.slug}` }
        ]}
      />
      <LocationPage data={leicesterLocation} />
    </>
  );
}
