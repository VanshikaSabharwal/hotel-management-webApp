/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
  env: {
    STUDIO_AUTHORIZED_EMAIL: process.env.STUDIO_AUTHORIZED_EMAIL,
  },
  output: "standalone",
};

export default nextConfig;
