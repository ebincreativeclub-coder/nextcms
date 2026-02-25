import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Removed because we are fetching dynamic data
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
