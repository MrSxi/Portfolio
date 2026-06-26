import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a subpath like github.com/username/repo,
  // uncomment and set these:
  // basePath: "/repo-name",
  // assetPrefix: "/repo-name/",
};

export default nextConfig;
