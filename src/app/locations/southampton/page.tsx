import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { southamptonLocation } from "@/lib/locations/southampton";

export const metadata: Metadata = {
  title: southamptonLocation.metaTitle,
  description: southamptonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${southamptonLocation.slug}`
  },
  openGraph: {
    title: southamptonLocation.metaTitle,
    description: southamptonLocation.metaDescription,
    url: `/locations/${southamptonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: southamptonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: southamptonLocation.cityImageAlt || `Basic Cremation in ${southamptonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: southamptonLocation.metaTitle,
    description: southamptonLocation.metaDescription,
    images: [southamptonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: southamptonLocation.city, url: `/locations/${southamptonLocation.slug}` }
        ]}
      />
      <LocationPage data={southamptonLocation} />
    </>
  );
}
