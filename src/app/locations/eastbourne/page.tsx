import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { eastbourneLocation } from "@/lib/locations/eastbourne";

export const metadata: Metadata = {
  title: eastbourneLocation.metaTitle,
  description: eastbourneLocation.metaDescription,
  alternates: {
    canonical: `/locations/${eastbourneLocation.slug}`
  },
  openGraph: {
    title: eastbourneLocation.metaTitle,
    description: eastbourneLocation.metaDescription,
    url: `/locations/${eastbourneLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: eastbourneLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: eastbourneLocation.cityImageAlt || `Basic Cremation in ${eastbourneLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: eastbourneLocation.metaTitle,
    description: eastbourneLocation.metaDescription,
    images: [eastbourneLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: eastbourneLocation.city, url: `/locations/${eastbourneLocation.slug}` }
        ]}
      />
      <LocationPage data={eastbourneLocation} />
    </>
  );
}
