import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/BCA-2ND-SEM", // Must match your GitHub repository name
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
