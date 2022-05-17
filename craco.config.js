const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  webpack: {
    plugins: [
      new SimpleProgressWebpackPlugin(),
      new DefinePlugin({
        "process.env.NETWORK_ENV": JSON.stringify(process.env.NETWORK_ENV),
      }),
   
    ],
  },
};
