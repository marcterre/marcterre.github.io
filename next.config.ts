import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  compiler: {
    styledComponents: true,
  },
  allowedDevOrigins: ["127.0.0.1", "localhost", "10.0.1.109"],
};

export default nextConfig;
