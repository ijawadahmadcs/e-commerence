/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image configuration
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
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Build optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Output configuration for Vercel
  output: 'standalone',
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // Compression
  compress: true,
  
  // Build timeout (in seconds)
  staticPageGenerationTimeout: 60,
  
  // Memory optimization
  swcMinify: true,
};

module.exports = nextConfig;