const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  devtool: "inline-source-map",
  entry: "./entry.js",
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // library:'mylib'
    globalObject: "this",
    library: {
      name: "mylib",
      type: "umd",
      //export:['product','spec','engine','fuel']
    },
  },
};
