/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'server.razcofoods.net',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            pathname: '**',
          },{
            protocol: 'http',
            hostname: '192.168.10.185',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
1