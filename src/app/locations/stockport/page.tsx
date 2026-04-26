import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { stockportLocation } from "@/lib/locations/stockport";

export const metadata: Metadata = {
  title: stockportLocation.metaTitle,
  description: stockportLocation.metaDescription,
  alternates: {
    canonical: `/locations/${stockportLocation.slug}`
  },
  openGraph: {
    title: stockportLocation.metaTitle,
    description: stockportLocation.metaDescription,
    url: `/locations/${stockportLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: stockportLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: stockportLocation.cityImageAlt || `Basic Cremation in ${stockportLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: stockportLocation.metaTitle,
    description: stockportLocation.metaDescription,
    images: [stockportLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: stockportLocation.city, url: `/locations/${stockportLocation.slug}` }
        ]}
      />
      <LocationPage data={stockportLocation} />
    </>
  );
}
