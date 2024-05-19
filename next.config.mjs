/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'api.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ],
    },
};

export default nextConfig;
