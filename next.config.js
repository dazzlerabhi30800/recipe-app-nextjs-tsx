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
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://edamam-product-images.s3.amazonaws.com/web-img'
      }
    ]
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
