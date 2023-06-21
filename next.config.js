/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      disableStaticImages: true,
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'portaty-storage165121-dev.s3.us-east-1.amazonaws.com',
          port: '',
          pathname: '/public/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig
  