/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["edamam-product-images.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        // protocol: "**",
        port: "",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
