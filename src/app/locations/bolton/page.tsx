import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { boltonLocation } from "@/lib/locations/bolton";

export const metadata: Metadata = {
  title: boltonLocation.metaTitle,
  description: boltonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${boltonLocation.slug}`
  },
  openGraph: {
    title: boltonLocation.metaTitle,
    description: boltonLocation.metaDescription,
    url: `/locations/${boltonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: boltonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: boltonLocation.cityImageAlt || `Basic Cremation in ${boltonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: boltonLocation.metaTitle,
    description: boltonLocation.metaDescription,
    images: [boltonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: boltonLocation.city, url: `/locations/${boltonLocation.slug}` }
        ]}
      />
      <LocationPage data={boltonLocation} />
    </>
  );
}
