/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["*.giphy.com", "media1.giphy.com"],
  },
};

module.exports = nextConfig;
