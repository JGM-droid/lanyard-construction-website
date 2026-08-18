import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/lanyard-construction-website' : '',
  assetPrefix: isGitHubPages ? '/lanyard-construction-website/' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
