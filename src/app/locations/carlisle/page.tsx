import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { carlisleLocation } from "@/lib/locations/carlisle";

export const metadata: Metadata = {
  title: carlisleLocation.metaTitle,
  description: carlisleLocation.metaDescription,
  alternates: {
    canonical: `/locations/${carlisleLocation.slug}`
  },
  openGraph: {
    title: carlisleLocation.metaTitle,
    description: carlisleLocation.metaDescription,
    url: `/locations/${carlisleLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: carlisleLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: carlisleLocation.cityImageAlt || `Basic Cremation in ${carlisleLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: carlisleLocation.metaTitle,
    description: carlisleLocation.metaDescription,
    images: [carlisleLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: carlisleLocation.city, url: `/locations/${carlisleLocation.slug}` }
        ]}
      />
      <LocationPage data={carlisleLocation} />
    </>
  );
}
