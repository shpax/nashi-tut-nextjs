/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.DIRECTUS_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
