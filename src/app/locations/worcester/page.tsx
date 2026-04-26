import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { worcesterLocation } from "@/lib/locations/worcester";

export const metadata: Metadata = {
  title: worcesterLocation.metaTitle,
  description: worcesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${worcesterLocation.slug}`
  },
  openGraph: {
    title: worcesterLocation.metaTitle,
    description: worcesterLocation.metaDescription,
    url: `/locations/${worcesterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: worcesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: worcesterLocation.cityImageAlt || `Basic Cremation in ${worcesterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: worcesterLocation.metaTitle,
    description: worcesterLocation.metaDescription,
    images: [worcesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: worcesterLocation.city, url: `/locations/${worcesterLocation.slug}` }
        ]}
      />
      <LocationPage data={worcesterLocation} />
    </>
  );
}
