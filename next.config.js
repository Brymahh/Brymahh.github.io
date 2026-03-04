const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // 1. REQUIRED FOR GITHUB PAGES: Exports the site as static HTML
  output: "export",

  // 2. REQUIRED FOR GITHUB PAGES: Disables Next.js image server
  images: {
    unoptimized: true,
  },

  // 3. KEPT FROM YOUR CODE: Allows your PDF CV download to work!
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },

  // 4. KEPT FROM YOUR CODE: Performance optimizations
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // NOTE: The `async headers()` section was completely removed because 
  // static hosting (GitHub Pages) cannot process server-side headers.
});



// const withBundleAnalyzer = require("@next/bundle-analyzer")({
// 	enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer({
// 	// your Next.js configuration
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: "https",
// 				hostname: "i.scdn.co",
// 			},
// 		],
// 		// Add image optimization settings
// 		formats: ["image/avif", "image/webp"],
// 		minimumCacheTTL: 60,
// 	},
// 	webpack: (config, options) => {
// 		config.module.rules.push({
// 			test: /\.pdf$/i,
// 			type: "asset/source",
// 		});

// 		return config;
// 	},
// 	async headers() {
// 		return [
// 			{
// 				source: "/sitemap.xml.gz",
// 				headers: [
// 					{
// 						key: "Content-Type",
// 						value: "application/gzip",
// 					},
// 					{
// 						key: "Cache-Control",
// 						value: "public, max-age=3600", // Cache for 1 hour
// 					},
// 				],
// 			},
// 			{
// 				source: "/:path*",
// 				headers: [
// 					{
// 						key: "X-Content-Type-Options",
// 						value: "nosniff",
// 					},
// 					{
// 						key: "X-Frame-Options",
// 						value: "DENY",
// 					},
// 					{
// 						key: "X-XSS-Protection",
// 						value: "1; mode=block",
// 					},
// 				],
// 			},
// 		];
// 	},
// 	// Add performance optimizations
// 	reactStrictMode: true,
// 	compiler: {
// 		removeConsole:
// 			process.env.NODE_ENV === "production"
// 				? {
// 						exclude: ["error", "warn"],
// 				  }
// 				: false,
// 	},
// });
