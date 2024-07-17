/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/uploads/:path*',
            destination: '/uploads/:path*',
          },
        ];
      },
    // reactStrictMode: true,
    // async rewrites() {
    //   return [
    //     {
    //       source: '/uploads/:path*',
    //       destination: path.join(__dirname, 'uploads', ':path*'),
    //     },
    //   ];
    // },
    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     config.resolve.fallback = {
    //       fs: false,
    //       path: false,
    //       stream: false,
    //     };
    //   }
    //   return config;
    // },
};

export default nextConfig;
