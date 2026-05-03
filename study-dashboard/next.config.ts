import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Removed output: 'export' because API routes (/api/search, /api/proxy) require a Node.js runtime and cannot be statically exported.
  // ...(isDev ? {} : { output: "export", basePath: "/BCA-2ND-SEM" }),
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
