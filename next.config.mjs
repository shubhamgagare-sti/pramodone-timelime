/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/images/:path*',
      },
    ]
  },
}

export default nextConfig
