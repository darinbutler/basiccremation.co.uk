/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      }
    ]
  },
  async redirects() {
    return [
      // ── HIGH-VALUE LEGACY INFO PAGES ─────────────────────────
      // These had explicit URLs on the old WordPress site that mapped 1:1 to
      // a new page. Set as 301 (permanent) so search engines transfer ranking.
      {
        source: '/what-is-basic-cremation/:path*',
        destination: '/what-is-a-basic-cremation',
        permanent: true
      },
      {
        source: '/unattended-cremation/:path*',
        destination: '/what-is-a-basic-cremation',
        permanent: true
      },
      {
        source: '/cremation-prices/:path*',
        destination: '/prices',
        permanent: true
      },
      {
        source: '/cremation/cremation-prices/:path*',
        destination: '/prices',
        permanent: true
      },
      {
        source: '/prepaid-cremations/:path*',
        destination: '/prices',
        permanent: true
      },
      {
        source: '/prepaid-cremation/:path*',
        destination: '/prices',
        permanent: true
      },
      {
        source: '/quote/:path*',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/privacy-policy/:path*',
        destination: '/privacy',
        permanent: true
      },
      {
        source: '/terms-and-conditions/:path*',
        destination: '/terms',
        permanent: true
      },
      // Old WordPress sitemap → new sitemap
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true
      },
      {
        source: '/page-sitemap:n.xml',
        destination: '/sitemap.xml',
        permanent: true
      },
      // ── GENERIC SEO LANDING PAGES (no location) ─────────────
      // These were category-style pages on the old site without a specific
      // location attached. Send to /locations so users can pick or call.
      {
        source: '/affordable-cremation/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/affordable-cremations/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/affordable-cremation-near-me/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/affordable-cremation-services/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/affordable-burial-and-cremation/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/cheap-cremation/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/cheap-cremation-near-me/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/cheap-funeral-packages-near-me/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/low-cost-cremation/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/low-cost-cremation-services-near-me/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/low-cost-funerals/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/affordable-funerals/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/affordable-funerals-and-cremations/:path*',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/direct-cremation/:path*',
        destination: '/what-is-a-basic-cremation',
        permanent: true
      },
      {
        source: '/simple-cremation/:path*',
        destination: '/what-is-a-basic-cremation',
        permanent: true
      },
      // ── DEAD WP ASSETS (just send to home) ──────────────────
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true
      }
      // The 6,000 long-tail location URLs are handled by middleware.ts
      // (matches any /<pattern>-<county>/ shape and 301s to /locations/<city>)
    ];
  }
};

module.exports = nextConfig;
