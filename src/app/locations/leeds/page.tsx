import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { leedsLocation } from "@/lib/locations/leeds";

export const metadata: Metadata = {
  title: leedsLocation.metaTitle,
  description: leedsLocation.metaDescription,
  alternates: {
    canonical: `/locations/${leedsLocation.slug}`
  },
  openGraph: {
    title: leedsLocation.metaTitle,
    description: leedsLocation.metaDescription,
    url: `/locations/${leedsLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: leedsLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: leedsLocation.cityImageAlt || `Basic Cremation in ${leedsLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: leedsLocation.metaTitle,
    description: leedsLocation.metaDescription,
    images: [leedsLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: leedsLocation.city, url: `/locations/${leedsLocation.slug}` }
        ]}
      />
      <LocationPage data={leedsLocation} />
    </>
  );
}
