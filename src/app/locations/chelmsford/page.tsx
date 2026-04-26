import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { chelmsfordLocation } from "@/lib/locations/chelmsford";

export const metadata: Metadata = {
  title: chelmsfordLocation.metaTitle,
  description: chelmsfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${chelmsfordLocation.slug}`
  },
  openGraph: {
    title: chelmsfordLocation.metaTitle,
    description: chelmsfordLocation.metaDescription,
    url: `/locations/${chelmsfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: chelmsfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: chelmsfordLocation.cityImageAlt || `Basic Cremation in ${chelmsfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: chelmsfordLocation.metaTitle,
    description: chelmsfordLocation.metaDescription,
    images: [chelmsfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: chelmsfordLocation.city, url: `/locations/${chelmsfordLocation.slug}` }
        ]}
      />
      <LocationPage data={chelmsfordLocation} />
    </>
  );
}
