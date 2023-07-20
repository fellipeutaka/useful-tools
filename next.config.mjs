import "./src/constants/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com", "res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: process.env.NODE_ENV === "development",
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default config;
