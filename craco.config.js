'use strict';

const { when } = require("@craco/craco");
//process.env.NODE_ENV_CROWDED === "single"

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: when(process.env.NODE_ENV_CROWDED === "single", () => {
    return {
      configure: {
        output: {
          filename: 'main.js',
        },
        optimization: {
          runtimeChunk: false,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              // vendor chunk
            },
          },
        },
      }
    };
  })
}