import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Prevent Next.js from looking for parent workspace
  outputFileTracingRoot: path.join(__dirname),
  // Tree-shake barrel imports for smaller bundles
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Remove console.log in production
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;
