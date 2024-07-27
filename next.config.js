const withNextra = require("nextra")({
	theme: "nextra-theme-blog",
	themeConfig: "./theme.config.js",
	staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: 'out',
	cleanDistDir: true,
};

module.exports = withNextra(nextConfig);
