/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.simpleicons.org",
      "media2.giphy.com",
      "tenor.com",
      "media.tenor.com",
    ],
  },
  // FitForMe proposal: a self-contained, encrypted static page outside the Next layout (no analytics)
  async rewrites() {
    return [
      { source: "/pitch/fitforme", destination: "/pitch/fitforme/index.html" },
      { source: "/pitch/fitforme-b", destination: "/pitch/fitforme-b/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/pitch/:dir(fitforme|fitforme-b)/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
      {
        source: "/pitch/:dir(fitforme|fitforme-b)",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
