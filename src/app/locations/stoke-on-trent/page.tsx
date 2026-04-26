import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { stokeOnTrentLocation } from "@/lib/locations/stoke-on-trent";

export const metadata: Metadata = {
  title: stokeOnTrentLocation.metaTitle,
  description: stokeOnTrentLocation.metaDescription,
  alternates: {
    canonical: `/locations/${stokeOnTrentLocation.slug}`
  },
  openGraph: {
    title: stokeOnTrentLocation.metaTitle,
    description: stokeOnTrentLocation.metaDescription,
    url: `/locations/${stokeOnTrentLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: stokeOnTrentLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: stokeOnTrentLocation.cityImageAlt || `Basic Cremation in ${stokeOnTrentLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: stokeOnTrentLocation.metaTitle,
    description: stokeOnTrentLocation.metaDescription,
    images: [stokeOnTrentLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: stokeOnTrentLocation.city, url: `/locations/${stokeOnTrentLocation.slug}` }
        ]}
      />
      <LocationPage data={stokeOnTrentLocation} />
    </>
  );
}
