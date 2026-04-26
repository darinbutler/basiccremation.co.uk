import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { bournemouthLocation } from "@/lib/locations/bournemouth";

export const metadata: Metadata = {
  title: bournemouthLocation.metaTitle,
  description: bournemouthLocation.metaDescription,
  alternates: {
    canonical: `/locations/${bournemouthLocation.slug}`
  },
  openGraph: {
    title: bournemouthLocation.metaTitle,
    description: bournemouthLocation.metaDescription,
    url: `/locations/${bournemouthLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: bournemouthLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: bournemouthLocation.cityImageAlt || `Basic Cremation in ${bournemouthLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: bournemouthLocation.metaTitle,
    description: bournemouthLocation.metaDescription,
    images: [bournemouthLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: bournemouthLocation.city, url: `/locations/${bournemouthLocation.slug}` }
        ]}
      />
      <LocationPage data={bournemouthLocation} />
    </>
  );
}
