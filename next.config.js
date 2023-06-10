/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["avatars.dicebear.com"],
  },
};

module.exports = nextConfig;
