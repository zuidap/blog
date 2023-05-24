/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['iw233.cn'],
  },
  // output: 'export',
};

module.exports = nextConfig;
