import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/BCA-2ND-SEM", // Must match your GitHub repository name
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Embedder-Policy", value: "require-corp" }
      ]
    }];
  },
};

export default nextConfig;
