/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'portaty-storage165121-dev.s3.us-east-1.amazonaws.com',
          port: '',
          pathname: '/public/app/images/brands/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig
  