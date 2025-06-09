import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '8000',
    //     pathname: '/storage/**',
    //     search: '',
    //   },
    //   {
    //     protocol: 'http',
    //     hostname: 'host.docker.internal',
    //     port: '8000',
    //     pathname: '/storage/**',
    //     search: '',
    //   },
    // ],
  }
};

export default nextConfig;
