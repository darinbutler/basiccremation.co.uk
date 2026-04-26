import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ipswichLocation } from "@/lib/locations/ipswich";

export const metadata: Metadata = {
  title: ipswichLocation.metaTitle,
  description: ipswichLocation.metaDescription,
  alternates: {
    canonical: `/locations/${ipswichLocation.slug}`
  },
  openGraph: {
    title: ipswichLocation.metaTitle,
    description: ipswichLocation.metaDescription,
    url: `/locations/${ipswichLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: ipswichLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: ipswichLocation.cityImageAlt || `Basic Cremation in ${ipswichLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: ipswichLocation.metaTitle,
    description: ipswichLocation.metaDescription,
    images: [ipswichLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: ipswichLocation.city, url: `/locations/${ipswichLocation.slug}` }
        ]}
      />
      <LocationPage data={ipswichLocation} />
    </>
  );
}
