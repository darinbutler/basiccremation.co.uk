import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { colchesterLocation } from "@/lib/locations/colchester";

export const metadata: Metadata = {
  title: colchesterLocation.metaTitle,
  description: colchesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${colchesterLocation.slug}`
  },
  openGraph: {
    title: colchesterLocation.metaTitle,
    description: colchesterLocation.metaDescription,
    url: `/locations/${colchesterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: colchesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: colchesterLocation.cityImageAlt || `Basic Cremation in ${colchesterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: colchesterLocation.metaTitle,
    description: colchesterLocation.metaDescription,
    images: [colchesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: colchesterLocation.city, url: `/locations/${colchesterLocation.slug}` }
        ]}
      />
      <LocationPage data={colchesterLocation} />
    </>
  );
}
