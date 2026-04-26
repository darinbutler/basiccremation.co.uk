import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { doncasterLocation } from "@/lib/locations/doncaster";

export const metadata: Metadata = {
  title: doncasterLocation.metaTitle,
  description: doncasterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${doncasterLocation.slug}`
  },
  openGraph: {
    title: doncasterLocation.metaTitle,
    description: doncasterLocation.metaDescription,
    url: `/locations/${doncasterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: doncasterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: doncasterLocation.cityImageAlt || `Basic Cremation in ${doncasterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: doncasterLocation.metaTitle,
    description: doncasterLocation.metaDescription,
    images: [doncasterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: doncasterLocation.city, url: `/locations/${doncasterLocation.slug}` }
        ]}
      />
      <LocationPage data={doncasterLocation} />
    </>
  );
}
