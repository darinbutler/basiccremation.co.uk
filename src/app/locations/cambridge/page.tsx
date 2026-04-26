import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { cambridgeLocation } from "@/lib/locations/cambridge";

export const metadata: Metadata = {
  title: cambridgeLocation.metaTitle,
  description: cambridgeLocation.metaDescription,
  alternates: {
    canonical: `/locations/${cambridgeLocation.slug}`
  },
  openGraph: {
    title: cambridgeLocation.metaTitle,
    description: cambridgeLocation.metaDescription,
    url: `/locations/${cambridgeLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: cambridgeLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: cambridgeLocation.cityImageAlt || `Basic Cremation in ${cambridgeLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: cambridgeLocation.metaTitle,
    description: cambridgeLocation.metaDescription,
    images: [cambridgeLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: cambridgeLocation.city, url: `/locations/${cambridgeLocation.slug}` }
        ]}
      />
      <LocationPage data={cambridgeLocation} />
    </>
  );
}
