import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { oldhamLocation } from "@/lib/locations/oldham";

export const metadata: Metadata = {
  title: oldhamLocation.metaTitle,
  description: oldhamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${oldhamLocation.slug}`
  },
  openGraph: {
    title: oldhamLocation.metaTitle,
    description: oldhamLocation.metaDescription,
    url: `/locations/${oldhamLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: oldhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: oldhamLocation.cityImageAlt || `Basic Cremation in ${oldhamLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: oldhamLocation.metaTitle,
    description: oldhamLocation.metaDescription,
    images: [oldhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: oldhamLocation.city, url: `/locations/${oldhamLocation.slug}` }
        ]}
      />
      <LocationPage data={oldhamLocation} />
    </>
  );
}
