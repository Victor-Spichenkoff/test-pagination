// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  }
}

module.exports = nextConfig
