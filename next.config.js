/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
