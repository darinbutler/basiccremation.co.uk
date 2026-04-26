import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { warringtonLocation } from "@/lib/locations/warrington";

export const metadata: Metadata = {
  title: warringtonLocation.metaTitle,
  description: warringtonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${warringtonLocation.slug}`
  },
  openGraph: {
    title: warringtonLocation.metaTitle,
    description: warringtonLocation.metaDescription,
    url: `/locations/${warringtonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: warringtonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: warringtonLocation.cityImageAlt || `Basic Cremation in ${warringtonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: warringtonLocation.metaTitle,
    description: warringtonLocation.metaDescription,
    images: [warringtonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: warringtonLocation.city, url: `/locations/${warringtonLocation.slug}` }
        ]}
      />
      <LocationPage data={warringtonLocation} />
    </>
  );
}
