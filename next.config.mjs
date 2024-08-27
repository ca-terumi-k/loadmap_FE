/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: process.env.VERCEL_URL,
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
};

export default nextConfig;
