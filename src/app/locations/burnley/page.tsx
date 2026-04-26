import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { burnleyLocation } from "@/lib/locations/burnley";

export const metadata: Metadata = {
  title: burnleyLocation.metaTitle,
  description: burnleyLocation.metaDescription,
  alternates: {
    canonical: `/locations/${burnleyLocation.slug}`
  },
  openGraph: {
    title: burnleyLocation.metaTitle,
    description: burnleyLocation.metaDescription,
    url: `/locations/${burnleyLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: burnleyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: burnleyLocation.cityImageAlt || `Basic Cremation in ${burnleyLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: burnleyLocation.metaTitle,
    description: burnleyLocation.metaDescription,
    images: [burnleyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: burnleyLocation.city, url: `/locations/${burnleyLocation.slug}` }
        ]}
      />
      <LocationPage data={burnleyLocation} />
    </>
  );
}
