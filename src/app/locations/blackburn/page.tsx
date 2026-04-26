import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { blackburnLocation } from "@/lib/locations/blackburn";

export const metadata: Metadata = {
  title: blackburnLocation.metaTitle,
  description: blackburnLocation.metaDescription,
  alternates: {
    canonical: `/locations/${blackburnLocation.slug}`
  },
  openGraph: {
    title: blackburnLocation.metaTitle,
    description: blackburnLocation.metaDescription,
    url: `/locations/${blackburnLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: blackburnLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: blackburnLocation.cityImageAlt || `Basic Cremation in ${blackburnLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: blackburnLocation.metaTitle,
    description: blackburnLocation.metaDescription,
    images: [blackburnLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: blackburnLocation.city, url: `/locations/${blackburnLocation.slug}` }
        ]}
      />
      <LocationPage data={blackburnLocation} />
    </>
  );
}
