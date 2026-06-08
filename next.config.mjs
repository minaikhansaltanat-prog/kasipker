const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'azyqcompany';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
