import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { bradfordLocation } from "@/lib/locations/bradford";

export const metadata: Metadata = {
  title: bradfordLocation.metaTitle,
  description: bradfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${bradfordLocation.slug}`
  },
  openGraph: {
    title: bradfordLocation.metaTitle,
    description: bradfordLocation.metaDescription,
    url: `/locations/${bradfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: bradfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: bradfordLocation.cityImageAlt || `Basic Cremation in ${bradfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: bradfordLocation.metaTitle,
    description: bradfordLocation.metaDescription,
    images: [bradfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: bradfordLocation.city, url: `/locations/${bradfordLocation.slug}` }
        ]}
      />
      <LocationPage data={bradfordLocation} />
    </>
  );
}
