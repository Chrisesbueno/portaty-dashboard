/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['s3bybus220215-dev.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3bybus220215-dev.s3.amazonaws.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
}

module.exports = nextConfig
  