import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { huddersfieldLocation } from "@/lib/locations/huddersfield";

export const metadata: Metadata = {
  title: huddersfieldLocation.metaTitle,
  description: huddersfieldLocation.metaDescription,
  alternates: {
    canonical: `/locations/${huddersfieldLocation.slug}`
  },
  openGraph: {
    title: huddersfieldLocation.metaTitle,
    description: huddersfieldLocation.metaDescription,
    url: `/locations/${huddersfieldLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: huddersfieldLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: huddersfieldLocation.cityImageAlt || `Basic Cremation in ${huddersfieldLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: huddersfieldLocation.metaTitle,
    description: huddersfieldLocation.metaDescription,
    images: [huddersfieldLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: huddersfieldLocation.city, url: `/locations/${huddersfieldLocation.slug}` }
        ]}
      />
      <LocationPage data={huddersfieldLocation} />
    </>
  );
}
