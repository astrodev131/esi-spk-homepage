/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable Image Optimization (required for static export)
  },
};

export default nextConfig;
