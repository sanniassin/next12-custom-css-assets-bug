/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      sideEffects: true,
      test: /\.css$/,
      // style-loader isn't compatible with server rendering
      use: isServer ? ["css-loader"] : ["style-loader", "css-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
