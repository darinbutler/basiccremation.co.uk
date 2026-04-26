import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { rotherhamLocation } from "@/lib/locations/rotherham";

export const metadata: Metadata = {
  title: rotherhamLocation.metaTitle,
  description: rotherhamLocation.metaDescription,
  alternates: {
    canonical: `/locations/${rotherhamLocation.slug}`
  },
  openGraph: {
    title: rotherhamLocation.metaTitle,
    description: rotherhamLocation.metaDescription,
    url: `/locations/${rotherhamLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: rotherhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: rotherhamLocation.cityImageAlt || `Basic Cremation in ${rotherhamLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: rotherhamLocation.metaTitle,
    description: rotherhamLocation.metaDescription,
    images: [rotherhamLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: rotherhamLocation.city, url: `/locations/${rotherhamLocation.slug}` }
        ]}
      />
      <LocationPage data={rotherhamLocation} />
    </>
  );
}
