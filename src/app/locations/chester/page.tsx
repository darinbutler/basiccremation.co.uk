import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { chesterLocation } from "@/lib/locations/chester";

export const metadata: Metadata = {
  title: chesterLocation.metaTitle,
  description: chesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${chesterLocation.slug}`
  },
  openGraph: {
    title: chesterLocation.metaTitle,
    description: chesterLocation.metaDescription,
    url: `/locations/${chesterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: chesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: chesterLocation.cityImageAlt || `Basic Cremation in ${chesterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: chesterLocation.metaTitle,
    description: chesterLocation.metaDescription,
    images: [chesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: chesterLocation.city, url: `/locations/${chesterLocation.slug}` }
        ]}
      />
      <LocationPage data={chesterLocation} />
    </>
  );
}
