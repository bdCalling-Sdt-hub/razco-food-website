/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '146.190.130.172',
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