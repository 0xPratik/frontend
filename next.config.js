/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://picsum.photos",
      "picsum.photos",
      "https://fakestoreapi.com",
      "fakestoreapi.com",
    ],
  },
  // compiler: {
  //   removeConsole: true,
  // },
};

module.exports = nextConfig;
