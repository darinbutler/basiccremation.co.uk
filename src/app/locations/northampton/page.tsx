import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { northamptonLocation } from "@/lib/locations/northampton";

export const metadata: Metadata = {
  title: northamptonLocation.metaTitle,
  description: northamptonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${northamptonLocation.slug}`
  },
  openGraph: {
    title: northamptonLocation.metaTitle,
    description: northamptonLocation.metaDescription,
    url: `/locations/${northamptonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: northamptonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: northamptonLocation.cityImageAlt || `Basic Cremation in ${northamptonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: northamptonLocation.metaTitle,
    description: northamptonLocation.metaDescription,
    images: [northamptonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: northamptonLocation.city, url: `/locations/${northamptonLocation.slug}` }
        ]}
      />
      <LocationPage data={northamptonLocation} />
    </>
  );
}
