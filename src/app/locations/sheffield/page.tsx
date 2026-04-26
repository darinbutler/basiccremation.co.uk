import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { sheffieldLocation } from "@/lib/locations/sheffield";

export const metadata: Metadata = {
  title: sheffieldLocation.metaTitle,
  description: sheffieldLocation.metaDescription,
  alternates: {
    canonical: `/locations/${sheffieldLocation.slug}`
  },
  openGraph: {
    title: sheffieldLocation.metaTitle,
    description: sheffieldLocation.metaDescription,
    url: `/locations/${sheffieldLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: sheffieldLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: sheffieldLocation.cityImageAlt || `Basic Cremation in ${sheffieldLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: sheffieldLocation.metaTitle,
    description: sheffieldLocation.metaDescription,
    images: [sheffieldLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: sheffieldLocation.city, url: `/locations/${sheffieldLocation.slug}` }
        ]}
      />
      <LocationPage data={sheffieldLocation} />
    </>
  );
}
