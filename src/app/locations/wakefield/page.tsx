import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { wakefieldLocation } from "@/lib/locations/wakefield";

export const metadata: Metadata = {
  title: wakefieldLocation.metaTitle,
  description: wakefieldLocation.metaDescription,
  alternates: {
    canonical: `/locations/${wakefieldLocation.slug}`
  },
  openGraph: {
    title: wakefieldLocation.metaTitle,
    description: wakefieldLocation.metaDescription,
    url: `/locations/${wakefieldLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: wakefieldLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: wakefieldLocation.cityImageAlt || `Basic Cremation in ${wakefieldLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: wakefieldLocation.metaTitle,
    description: wakefieldLocation.metaDescription,
    images: [wakefieldLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: wakefieldLocation.city, url: `/locations/${wakefieldLocation.slug}` }
        ]}
      />
      <LocationPage data={wakefieldLocation} />
    </>
  );
}
