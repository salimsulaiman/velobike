/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fsrg6-1.fna.fbcdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG images from remote sources
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Optional, for added security
  },
};

export default nextConfig;
