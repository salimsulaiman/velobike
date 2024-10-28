/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fsrg6-1.fna.fbcdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
