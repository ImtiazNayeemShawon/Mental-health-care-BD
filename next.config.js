/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // distDir: "build",
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
