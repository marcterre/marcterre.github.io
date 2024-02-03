/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/marcterre.github.io",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
