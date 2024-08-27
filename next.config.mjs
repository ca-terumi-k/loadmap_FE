/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "developers.google.com",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
            },
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
            },
        ],
    },
    output: "standalone",
    reactStrictMode: true,
};

export default nextConfig;
