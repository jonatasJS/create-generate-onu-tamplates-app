/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  analyzerMode: "static",
  openAnalyzer: true,
  generate: "static",
  reportFilename: "bundle-analyzer-report.html"
});
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
	images: {
    domains: ['random.imagecdn.app'],
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
// module.exports = nextConfig;
