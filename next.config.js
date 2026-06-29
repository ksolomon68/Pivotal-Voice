/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable React Strict Mode to prevent double-mount / double-invoke
    // of useEffect in development. Strict Mode intentionally unmounts and
    // remounts every component which fires the AbortError on in-flight requests.
    reactStrictMode: false,

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
