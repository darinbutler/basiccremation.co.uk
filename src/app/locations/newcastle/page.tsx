import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { newcastleLocation } from "@/lib/locations/newcastle";

export const metadata: Metadata = {
  title: newcastleLocation.metaTitle,
  description: newcastleLocation.metaDescription,
  alternates: {
    canonical: `/locations/${newcastleLocation.slug}`
  },
  openGraph: {
    title: newcastleLocation.metaTitle,
    description: newcastleLocation.metaDescription,
    url: `/locations/${newcastleLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: newcastleLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: newcastleLocation.cityImageAlt || `Basic Cremation in ${newcastleLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: newcastleLocation.metaTitle,
    description: newcastleLocation.metaDescription,
    images: [newcastleLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: newcastleLocation.city, url: `/locations/${newcastleLocation.slug}` }
        ]}
      />
      <LocationPage data={newcastleLocation} />
    </>
  );
}
