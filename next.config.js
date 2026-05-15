/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/ravijeet-portfolio",
  assetPrefix: "/ravijeet-portfolio/",
};

module.exports = nextConfig;