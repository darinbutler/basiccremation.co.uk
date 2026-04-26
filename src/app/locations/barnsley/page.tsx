import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { barnsleyLocation } from "@/lib/locations/barnsley";

export const metadata: Metadata = {
  title: barnsleyLocation.metaTitle,
  description: barnsleyLocation.metaDescription,
  alternates: {
    canonical: `/locations/${barnsleyLocation.slug}`
  },
  openGraph: {
    title: barnsleyLocation.metaTitle,
    description: barnsleyLocation.metaDescription,
    url: `/locations/${barnsleyLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: barnsleyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: barnsleyLocation.cityImageAlt || `Basic Cremation in ${barnsleyLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: barnsleyLocation.metaTitle,
    description: barnsleyLocation.metaDescription,
    images: [barnsleyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: barnsleyLocation.city, url: `/locations/${barnsleyLocation.slug}` }
        ]}
      />
      <LocationPage data={barnsleyLocation} />
    </>
  );
}
