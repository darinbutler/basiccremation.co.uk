import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { exeterLocation } from "@/lib/locations/exeter";

export const metadata: Metadata = {
  title: exeterLocation.metaTitle,
  description: exeterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${exeterLocation.slug}`
  },
  openGraph: {
    title: exeterLocation.metaTitle,
    description: exeterLocation.metaDescription,
    url: `/locations/${exeterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: exeterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: exeterLocation.cityImageAlt || `Basic Cremation in ${exeterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: exeterLocation.metaTitle,
    description: exeterLocation.metaDescription,
    images: [exeterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: exeterLocation.city, url: `/locations/${exeterLocation.slug}` }
        ]}
      />
      <LocationPage data={exeterLocation} />
    </>
  );
}
