const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    main: "./entry.js",
  },
  output: {
    iife: true,
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
