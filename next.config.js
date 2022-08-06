/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', "mkart-products.s3.ap-south-1.amazonaws.com"],
  },
}
// storage.googleapis.com

module.exports = nextConfig
