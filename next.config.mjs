/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/wikipedia/commons/**',
          },
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/img/ecommerce-images/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app/**',
          }
        ],
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors. res.cloudinary.com/dh6ipg8bj/image/upload/v1701278366/parking-resercar-app
        ignoreDuringBuilds: true,
      }
};

export default nextConfig;
