import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { hastingsLocation } from "@/lib/locations/hastings";

export const metadata: Metadata = {
  title: hastingsLocation.metaTitle,
  description: hastingsLocation.metaDescription,
  alternates: {
    canonical: `/locations/${hastingsLocation.slug}`
  },
  openGraph: {
    title: hastingsLocation.metaTitle,
    description: hastingsLocation.metaDescription,
    url: `/locations/${hastingsLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: hastingsLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: hastingsLocation.cityImageAlt || `Basic Cremation in ${hastingsLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: hastingsLocation.metaTitle,
    description: hastingsLocation.metaDescription,
    images: [hastingsLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: hastingsLocation.city, url: `/locations/${hastingsLocation.slug}` }
        ]}
      />
      <LocationPage data={hastingsLocation} />
    </>
  );
}
