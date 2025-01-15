/** @type {import('next').NextConfig} */
const nextConfig =
{
  webpack: (config) => {
    config.module.rules.push({
      test: /\.hbs$/,
      loader: "handlebars-loader",
    });
    return config;
  },
};

export default nextConfig;
