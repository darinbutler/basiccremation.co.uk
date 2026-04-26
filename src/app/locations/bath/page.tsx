import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { bathLocation } from "@/lib/locations/bath";

export const metadata: Metadata = {
  title: bathLocation.metaTitle,
  description: bathLocation.metaDescription,
  alternates: {
    canonical: `/locations/${bathLocation.slug}`
  },
  openGraph: {
    title: bathLocation.metaTitle,
    description: bathLocation.metaDescription,
    url: `/locations/${bathLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: bathLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: bathLocation.cityImageAlt || `Basic Cremation in ${bathLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: bathLocation.metaTitle,
    description: bathLocation.metaDescription,
    images: [bathLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: bathLocation.city, url: `/locations/${bathLocation.slug}` }
        ]}
      />
      <LocationPage data={bathLocation} />
    </>
  );
}
