import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { southendLocation } from "@/lib/locations/southend";

export const metadata: Metadata = {
  title: southendLocation.metaTitle,
  description: southendLocation.metaDescription,
  alternates: {
    canonical: `/locations/${southendLocation.slug}`
  },
  openGraph: {
    title: southendLocation.metaTitle,
    description: southendLocation.metaDescription,
    url: `/locations/${southendLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: southendLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: southendLocation.cityImageAlt || `Basic Cremation in ${southendLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: southendLocation.metaTitle,
    description: southendLocation.metaDescription,
    images: [southendLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: southendLocation.city, url: `/locations/${southendLocation.slug}` }
        ]}
      />
      <LocationPage data={southendLocation} />
    </>
  );
}
