import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { salfordLocation } from "@/lib/locations/salford";

export const metadata: Metadata = {
  title: salfordLocation.metaTitle,
  description: salfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${salfordLocation.slug}`
  },
  openGraph: {
    title: salfordLocation.metaTitle,
    description: salfordLocation.metaDescription,
    url: `/locations/${salfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: salfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: salfordLocation.cityImageAlt || `Basic Cremation in ${salfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: salfordLocation.metaTitle,
    description: salfordLocation.metaDescription,
    images: [salfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: salfordLocation.city, url: `/locations/${salfordLocation.slug}` }
        ]}
      />
      <LocationPage data={salfordLocation} />
    </>
  );
}
