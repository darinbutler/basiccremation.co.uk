import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { birminghamLocation } from "@/lib/locations/birmingham";

export const metadata: Metadata = {
  title: birminghamLocation.metaTitle,
  description: birminghamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${birminghamLocation.slug}`
  },
  openGraph: {
    title: birminghamLocation.metaTitle,
    description: birminghamLocation.metaDescription,
    url: `/locations/${birminghamLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: birminghamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: birminghamLocation.cityImageAlt || `Basic Cremation in ${birminghamLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: birminghamLocation.metaTitle,
    description: birminghamLocation.metaDescription,
    images: [birminghamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: birminghamLocation.city, url: `/locations/${birminghamLocation.slug}` }
        ]}
      />
      <LocationPage data={birminghamLocation} />
    </>
  );
}
