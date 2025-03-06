import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.kaktoos.example',
        port: '',
        pathname: '/storage/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
