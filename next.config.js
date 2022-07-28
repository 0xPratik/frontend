/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://fakestoreapi.com", "fakestoreapi.com"],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
