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
};

export default nextConfig;
