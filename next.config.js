/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

// const withMDX = require('@next/mdx')();
// module.exports = withMDX(nextConfig);
module.exports = nextConfig