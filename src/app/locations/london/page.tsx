import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { londonLocation } from "@/lib/locations/london";

export const metadata: Metadata = {
  title: londonLocation.metaTitle,
  description: londonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${londonLocation.slug}`
  },
  openGraph: {
    title: londonLocation.metaTitle,
    description: londonLocation.metaDescription,
    url: `/locations/${londonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: londonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: londonLocation.cityImageAlt || `Basic Cremation in ${londonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: londonLocation.metaTitle,
    description: londonLocation.metaDescription,
    images: [londonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: londonLocation.city, url: `/locations/${londonLocation.slug}` }
        ]}
      />
      <LocationPage data={londonLocation} />
    </>
  );
}
