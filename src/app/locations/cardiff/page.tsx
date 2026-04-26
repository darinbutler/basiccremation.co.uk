import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { cardiffLocation } from "@/lib/locations/cardiff";

export const metadata: Metadata = {
  title: cardiffLocation.metaTitle,
  description: cardiffLocation.metaDescription,
  alternates: {
    canonical: `/locations/${cardiffLocation.slug}`
  },
  openGraph: {
    title: cardiffLocation.metaTitle,
    description: cardiffLocation.metaDescription,
    url: `/locations/${cardiffLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: cardiffLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: cardiffLocation.cityImageAlt || `Basic Cremation in ${cardiffLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: cardiffLocation.metaTitle,
    description: cardiffLocation.metaDescription,
    images: [cardiffLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: cardiffLocation.city, url: `/locations/${cardiffLocation.slug}` }
        ]}
      />
      <LocationPage data={cardiffLocation} />
    </>
  );
}
