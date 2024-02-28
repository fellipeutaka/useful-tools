await import("./src/lib/env/index.js");

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
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

/**
 * @param {string} phase
 * @param {{ defaultConfig: import('next').NextConfig }} options
 */
const nextConfigWithPlugins = async () => {
  /* Dynamically import plugins from devDependencies to reduce bundle size */
  const withNextIntl = (await import("next-intl/plugin")).default(
    "./src/lib/i18n",
  );

  // const million = await import("million/compiler");

  if (process.env.NODE_ENV !== "production") {
    return withNextIntl(config);

    // return million.next(withNextIntl(config), {
    //   auto: true,
    //   rsc: true,
    // });
  }

  const withPWA = (await import("@ducanh2912/next-pwa")).default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
  });

  return withPWA(withNextIntl(config));

  // return million.next(withPWA(withNextIntl(config)), {
  //   auto: true,
  //   rsc: true,
  // });
};

export default nextConfigWithPlugins;
