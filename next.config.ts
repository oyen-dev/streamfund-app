import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "assets.coingecko.com",
      "coin-images.coingecko.com",
      "localhost",
      "api.dicebear.com",
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "encoding");
    return config;
  },
};

export default nextConfig;
