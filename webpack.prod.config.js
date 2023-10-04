const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    build: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),

    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  mode: "production",
};
