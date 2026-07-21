import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // GitHub Pages serves this repository from /Vision-AI. Keep the Sites and
  // local builds at the domain root while exporting a static Pages build.
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/Vision-AI" : "",
  assetPrefix: isGitHubPages ? "/Vision-AI/" : undefined,
  trailingSlash: isGitHubPages,
  // db/ and worker/ contain Cloudflare-only imports used by the Sites build.
  // The public Pages export is fully static and does not load those modules.
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
