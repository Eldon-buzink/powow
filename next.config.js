/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.simpleicons.org"
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; 