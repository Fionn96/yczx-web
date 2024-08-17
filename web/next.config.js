const MillionLint = require('@million/lint');
const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  staticImage: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    loader: 'imgix',
    path: ''
  }
};
module.exports = MillionLint.next()(withNextra(nextConfig));