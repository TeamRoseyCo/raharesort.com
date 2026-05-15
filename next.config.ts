import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/menu",
        destination: "https://menu.raharesort.com",
        permanent: false,
      },
      {
        source: "/menu/:path*",
        destination: "https://menu.raharesort.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
