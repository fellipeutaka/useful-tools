import million from 'million/compiler';
import "./src/constants/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // typedRoutes: process.env.NODE_ENV === "development",
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

export default million.next(
  config, { auto: { rsc: true } }
);
