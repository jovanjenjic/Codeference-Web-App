/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  ...withVideos()
}
