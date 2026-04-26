import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { wolverhamptonLocation } from "@/lib/locations/wolverhampton";

export const metadata: Metadata = {
  title: wolverhamptonLocation.metaTitle,
  description: wolverhamptonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${wolverhamptonLocation.slug}`
  },
  openGraph: {
    title: wolverhamptonLocation.metaTitle,
    description: wolverhamptonLocation.metaDescription,
    url: `/locations/${wolverhamptonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: wolverhamptonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: wolverhamptonLocation.cityImageAlt || `Basic Cremation in ${wolverhamptonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: wolverhamptonLocation.metaTitle,
    description: wolverhamptonLocation.metaDescription,
    images: [wolverhamptonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: wolverhamptonLocation.city, url: `/locations/${wolverhamptonLocation.slug}` }
        ]}
      />
      <LocationPage data={wolverhamptonLocation} />
    </>
  );
}
