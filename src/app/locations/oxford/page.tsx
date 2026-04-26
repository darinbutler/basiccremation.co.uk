import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { oxfordLocation } from "@/lib/locations/oxford";

export const metadata: Metadata = {
  title: oxfordLocation.metaTitle,
  description: oxfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${oxfordLocation.slug}`
  },
  openGraph: {
    title: oxfordLocation.metaTitle,
    description: oxfordLocation.metaDescription,
    url: `/locations/${oxfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: oxfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: oxfordLocation.cityImageAlt || `Basic Cremation in ${oxfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: oxfordLocation.metaTitle,
    description: oxfordLocation.metaDescription,
    images: [oxfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: oxfordLocation.city, url: `/locations/${oxfordLocation.slug}` }
        ]}
      />
      <LocationPage data={oxfordLocation} />
    </>
  );
}
