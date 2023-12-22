const path = require("path");
const html = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  entry: "./entry.js",
  optimization: {
    chunkIds: "named",
    splitChunks: {
      minSize: 2000, // bytes
      chunks: "async", // async, all, initial
    },
  },
  plugins: [
    new html({
      filename: "index.html",
      minify: false, // true under prod. mode
      inject: "body", // default head
      title: "by htmlWebpackPlugin",
      template: "./tpl.html",
    }),
  ],
  output: {
    asyncChunks: true, // default to true
    clean: true,
    filename: "[name].ini.js", // initial chunk
    chunkFilename: "[id].chunk.js",
    path: path.resolve(__dirname, "dist"),
  },
  watchOptions: { ignored: [path.resolve(__dirname, "node_modules")] },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};
