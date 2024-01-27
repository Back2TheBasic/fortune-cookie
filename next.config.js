/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/share/:id',
        destination: '/share/[id]',
      },
    ];
  },
};

module.exports = nextConfig;
