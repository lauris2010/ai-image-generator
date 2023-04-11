/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["1000logos.net", "aiimagesgeneratora1df206.blob.core.windows.net"]
  }
}

module.exports = nextConfig
