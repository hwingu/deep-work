/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(wav|mp3|ogg)$/,
      use: ["file-loader"],
    });
    return config;
  },
};
export default nextConfig;
