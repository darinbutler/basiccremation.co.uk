import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { derbyLocation } from "@/lib/locations/derby";

export const metadata: Metadata = {
  title: derbyLocation.metaTitle,
  description: derbyLocation.metaDescription,
  alternates: {
    canonical: `/locations/${derbyLocation.slug}`
  },
  openGraph: {
    title: derbyLocation.metaTitle,
    description: derbyLocation.metaDescription,
    url: `/locations/${derbyLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: derbyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: derbyLocation.cityImageAlt || `Basic Cremation in ${derbyLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: derbyLocation.metaTitle,
    description: derbyLocation.metaDescription,
    images: [derbyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: derbyLocation.city, url: `/locations/${derbyLocation.slug}` }
        ]}
      />
      <LocationPage data={derbyLocation} />
    </>
  );
}
