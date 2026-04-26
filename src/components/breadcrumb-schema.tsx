import { siteConfig } from "@/lib/site-config";

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Renders BreadcrumbList JSON-LD for SEO. Pass an array of {name, url} items in order from root.
 * URLs should be path-only (e.g. "/help-and-advice") — the component prefixes siteConfig.url.
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
