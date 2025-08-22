/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**'
      },
      { 
        protocol: 'https', 
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**'
      }
    ],
  },
  
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  poweredByHeader: false,
  compress: true,
  staticPageGenerationTimeout: 60,
};

module.exports = nextConfig;