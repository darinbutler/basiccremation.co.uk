import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { telfordLocation } from "@/lib/locations/telford";

export const metadata: Metadata = {
  title: telfordLocation.metaTitle,
  description: telfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${telfordLocation.slug}`
  },
  openGraph: {
    title: telfordLocation.metaTitle,
    description: telfordLocation.metaDescription,
    url: `/locations/${telfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: telfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: telfordLocation.cityImageAlt || `Basic Cremation in ${telfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: telfordLocation.metaTitle,
    description: telfordLocation.metaDescription,
    images: [telfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: telfordLocation.city, url: `/locations/${telfordLocation.slug}` }
        ]}
      />
      <LocationPage data={telfordLocation} />
    </>
  );
}
