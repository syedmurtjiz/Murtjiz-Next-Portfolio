/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Environment variables with NEXT_PUBLIC_ are automatically exposed to the browser
  // No need to manually set them in the config
  env: {
    // Keep this empty or remove it
  },
}

module.exports = nextConfig
