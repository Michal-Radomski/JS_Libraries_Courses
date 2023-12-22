//* command: npx webpack --config ./webpack.config.js
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  //* development
  // mode:'development',
  // devtool:'inline-source-map',
  //* production
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./entry.js",
  },
  output: {
    iife: true,
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // watch: true, // or: --watch
  watch: false,
  watchOptions: {
    //ignored:/node_modules/
    //ignored:[path.resolve(__dirname,'node_modules')]
    ignored: ["**/node_modules"],
  },
};
