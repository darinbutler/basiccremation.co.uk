import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { manchesterLocation } from "@/lib/locations/manchester";

export const metadata: Metadata = {
  title: manchesterLocation.metaTitle,
  description: manchesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${manchesterLocation.slug}`
  },
  openGraph: {
    title: manchesterLocation.metaTitle,
    description: manchesterLocation.metaDescription,
    url: `/locations/${manchesterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: manchesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: manchesterLocation.cityImageAlt || `Basic Cremation in ${manchesterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: manchesterLocation.metaTitle,
    description: manchesterLocation.metaDescription,
    images: [manchesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: manchesterLocation.city, url: `/locations/${manchesterLocation.slug}` }
        ]}
      />
      <LocationPage data={manchesterLocation} />
    </>
  );
}
