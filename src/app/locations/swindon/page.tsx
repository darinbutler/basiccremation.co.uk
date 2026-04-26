import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { swindonLocation } from "@/lib/locations/swindon";

export const metadata: Metadata = {
  title: swindonLocation.metaTitle,
  description: swindonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${swindonLocation.slug}`
  },
  openGraph: {
    title: swindonLocation.metaTitle,
    description: swindonLocation.metaDescription,
    url: `/locations/${swindonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: swindonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: swindonLocation.cityImageAlt || `Basic Cremation in ${swindonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: swindonLocation.metaTitle,
    description: swindonLocation.metaDescription,
    images: [swindonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: swindonLocation.city, url: `/locations/${swindonLocation.slug}` }
        ]}
      />
      <LocationPage data={swindonLocation} />
    </>
  );
}
