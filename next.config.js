/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["edamam-product-images.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
