import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { cheltenhamLocation } from "@/lib/locations/cheltenham";

export const metadata: Metadata = {
  title: cheltenhamLocation.metaTitle,
  description: cheltenhamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${cheltenhamLocation.slug}`
  },
  openGraph: {
    title: cheltenhamLocation.metaTitle,
    description: cheltenhamLocation.metaDescription,
    url: `/locations/${cheltenhamLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: cheltenhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: cheltenhamLocation.cityImageAlt || `Basic Cremation in ${cheltenhamLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: cheltenhamLocation.metaTitle,
    description: cheltenhamLocation.metaDescription,
    images: [cheltenhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: cheltenhamLocation.city, url: `/locations/${cheltenhamLocation.slug}` }
        ]}
      />
      <LocationPage data={cheltenhamLocation} />
    </>
  );
}
