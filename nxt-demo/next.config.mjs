
// const isProd = process.env.NODE_ENV === 'production'
// const prefixPath = !isProd ? '/demo' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: prefixPath,
  // basePath: prefixPath,
  output: 'export',
};

export default nextConfig;
