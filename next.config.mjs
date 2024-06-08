/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '192.168.10.16',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
1