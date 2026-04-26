import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { maidstoneLocation } from "@/lib/locations/maidstone";

export const metadata: Metadata = {
  title: maidstoneLocation.metaTitle,
  description: maidstoneLocation.metaDescription,
  alternates: {
    canonical: `/locations/${maidstoneLocation.slug}`
  },
  openGraph: {
    title: maidstoneLocation.metaTitle,
    description: maidstoneLocation.metaDescription,
    url: `/locations/${maidstoneLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: maidstoneLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: maidstoneLocation.cityImageAlt || `Basic Cremation in ${maidstoneLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: maidstoneLocation.metaTitle,
    description: maidstoneLocation.metaDescription,
    images: [maidstoneLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: maidstoneLocation.city, url: `/locations/${maidstoneLocation.slug}` }
        ]}
      />
      <LocationPage data={maidstoneLocation} />
    </>
  );
}
