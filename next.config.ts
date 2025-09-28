import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  nodeMiddleware: true,
  /* config options here */
};

export default nextConfig;
