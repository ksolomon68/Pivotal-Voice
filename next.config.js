/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@livekit/components-react', '@livekit/components-core'],
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
}

module.exports = nextConfig
