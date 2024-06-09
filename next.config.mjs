/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'server.razcofoods.net',
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