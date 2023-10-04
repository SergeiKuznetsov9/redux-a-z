const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    host: "localhost",
    hot: true,
    open: true,
  },

  module: {
    // При помощи регулярки определяем названия файлов для загрузки которых нужно
    // использовать импортируемый лоудер
    // стоит отметить, что порядок указания лоудеров имеет значение 
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
};
