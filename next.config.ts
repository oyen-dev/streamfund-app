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
      "api.testnet.streamfund.live",
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "encoding");
    return config;
  },
};

export default nextConfig;
