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
	images: {
		loader: 'imgix',
		path: '',
	}
};

module.exports = withNextra(nextConfig);
