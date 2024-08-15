/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify the configuration for the client (browser) build
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }

    // You can also customize other webpack configuration options here if needed

    return config;
  },
};


module.exports = nextConfig
