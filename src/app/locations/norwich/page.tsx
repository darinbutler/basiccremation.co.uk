import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { norwichLocation } from "@/lib/locations/norwich";

export const metadata: Metadata = {
  title: norwichLocation.metaTitle,
  description: norwichLocation.metaDescription,
  alternates: {
    canonical: `/locations/${norwichLocation.slug}`
  },
  openGraph: {
    title: norwichLocation.metaTitle,
    description: norwichLocation.metaDescription,
    url: `/locations/${norwichLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: norwichLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: norwichLocation.cityImageAlt || `Basic Cremation in ${norwichLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: norwichLocation.metaTitle,
    description: norwichLocation.metaDescription,
    images: [norwichLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: norwichLocation.city, url: `/locations/${norwichLocation.slug}` }
        ]}
      />
      <LocationPage data={norwichLocation} />
    </>
  );
}
