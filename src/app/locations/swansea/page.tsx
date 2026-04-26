import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { swanseaLocation } from "@/lib/locations/swansea";

export const metadata: Metadata = {
  title: swanseaLocation.metaTitle,
  description: swanseaLocation.metaDescription,
  alternates: {
    canonical: `/locations/${swanseaLocation.slug}`
  },
  openGraph: {
    title: swanseaLocation.metaTitle,
    description: swanseaLocation.metaDescription,
    url: `/locations/${swanseaLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: swanseaLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: swanseaLocation.cityImageAlt || `Basic Cremation in ${swanseaLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: swanseaLocation.metaTitle,
    description: swanseaLocation.metaDescription,
    images: [swanseaLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: swanseaLocation.city, url: `/locations/${swanseaLocation.slug}` }
        ]}
      />
      <LocationPage data={swanseaLocation} />
    </>
  );
}
