/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: false, // 👈 disables Turbopack, enables Webpack
    },
};

export default nextConfig;
