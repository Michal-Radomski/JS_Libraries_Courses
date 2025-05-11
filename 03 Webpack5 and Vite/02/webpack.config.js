const path = require("path");
const html = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  //entry:'./entry.js',
  entry: {
    pageOne: {
      import: "./entry.js",
      dependOn: "shared",
    },
    pageTwo: {
      import: "./entryTwo.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  optimization: {
    chunkIds: "named",
    splitChunks: {
      minSize: 2000, // bytes
      chunks: "async", // async, all, initial
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash",
      join: ["lodash", "join"],
      func: "./functions.js",
      default_func: ["./functions.js", "default"],
      sayHi: ["./functions.js", "sayHi"],
    }),
    new html({
      filename: "pageOne.html",
      chunks: ["pageOne", "shared"],
      minify: false, // true under prod. mode
      inject: "body", // default head
      title: "by htmlWebpackPlugin",
      template: "./tpl.html",
    }),
    new html({
      filename: "pageTwo.html",
      chunks: ["pageTwo", "shared"],
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
