import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { nottinghamLocation } from "@/lib/locations/nottingham";

export const metadata: Metadata = {
  title: nottinghamLocation.metaTitle,
  description: nottinghamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${nottinghamLocation.slug}`
  },
  openGraph: {
    title: nottinghamLocation.metaTitle,
    description: nottinghamLocation.metaDescription,
    url: `/locations/${nottinghamLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: nottinghamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: nottinghamLocation.cityImageAlt || `Basic Cremation in ${nottinghamLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: nottinghamLocation.metaTitle,
    description: nottinghamLocation.metaDescription,
    images: [nottinghamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: nottinghamLocation.city, url: `/locations/${nottinghamLocation.slug}` }
        ]}
      />
      <LocationPage data={nottinghamLocation} />
    </>
  );
}
