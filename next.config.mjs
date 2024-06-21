/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.favpng.com',
          },
          {
            protocol: 'https',
            hostname: 'e7.pngegg.com',
          },
          {
            protocol: 'https',
            hostname: 'www.clipartmax.com',
          },
        ],
      },
};

export default nextConfig;
