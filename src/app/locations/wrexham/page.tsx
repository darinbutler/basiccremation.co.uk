import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { wrexhamLocation } from "@/lib/locations/wrexham";

export const metadata: Metadata = {
  title: wrexhamLocation.metaTitle,
  description: wrexhamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${wrexhamLocation.slug}`
  },
  openGraph: {
    title: wrexhamLocation.metaTitle,
    description: wrexhamLocation.metaDescription,
    url: `/locations/${wrexhamLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: wrexhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: wrexhamLocation.cityImageAlt || `Basic Cremation in ${wrexhamLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: wrexhamLocation.metaTitle,
    description: wrexhamLocation.metaDescription,
    images: [wrexhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: wrexhamLocation.city, url: `/locations/${wrexhamLocation.slug}` }
        ]}
      />
      <LocationPage data={wrexhamLocation} />
    </>
  );
}
