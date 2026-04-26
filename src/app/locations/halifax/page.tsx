import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { halifaxLocation } from "@/lib/locations/halifax";

export const metadata: Metadata = {
  title: halifaxLocation.metaTitle,
  description: halifaxLocation.metaDescription,
  alternates: {
    canonical: `/locations/${halifaxLocation.slug}`
  },
  openGraph: {
    title: halifaxLocation.metaTitle,
    description: halifaxLocation.metaDescription,
    url: `/locations/${halifaxLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: halifaxLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: halifaxLocation.cityImageAlt || `Basic Cremation in ${halifaxLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: halifaxLocation.metaTitle,
    description: halifaxLocation.metaDescription,
    images: [halifaxLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: halifaxLocation.city, url: `/locations/${halifaxLocation.slug}` }
        ]}
      />
      <LocationPage data={halifaxLocation} />
    </>
  );
}
