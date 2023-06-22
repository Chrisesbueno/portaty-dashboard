/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['portaty-storage165121-dev.s3.amazonaws.com'],
    loader: 'default',
    path: '',
    exclude: [
      'https://portaty-storage165121-dev.s3.amazonaws.com/public/app/images/brands/**',
      'https://portaty-storage165121-dev.s3.amazonaws.com/public/app/images/categories/**',
      'https://portaty-storage165121-dev.s3.amazonaws.com/public/app/images/products/**'
    ],
    unoptimized: true
  },
}

module.exports = nextConfig
