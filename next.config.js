module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}
