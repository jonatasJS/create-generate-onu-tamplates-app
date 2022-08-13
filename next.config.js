/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
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
const withSVGR = require('next-svgr');

module.exports = withPlugins([
  // [withPWA, { pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV === 'development',
  //   runtimeCaching: [
  //     {
  //       urlPattern: /^https:\/\/fonts\.googleapis\.com/,
  //       handler: 'cacheFirst',
  //       options: {
  //         cacheName: 'google-fonts-cache',
  //         expiration: {
  //           maxEntries: 5,
  //           maxAgeSeconds: 60 * 60 * 24 * 365,
  //         },
  //       },
  //     },
  //     {
  //       urlPattern: /^https:\/\/fonts\.gstatic\.com/,
  //       handler: 'cacheFirst',
  //       options: {
  //         cacheName: 'google-fonts-cache',
  //         expiration: {
  //           maxEntries: 5,
  //           maxAgeSeconds: 60 * 60 * 24 * 365,
  //         },
  //       },
  //     }
  //   ],
  //   register: true,
  //   sw: '/pwabuilder-sw/pwabuilder-sw.js' || 'pwabuilder-sw.js' || '/sw.js'

  // } }],
  withSVGR,
  withBundleAnalyzer,
], nextConfig);
// module.exports = nextConfig;
