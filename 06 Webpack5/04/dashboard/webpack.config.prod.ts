import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

// const { ModuleFederationPlugin } = require("webpack").container;
const {
  container: { ModuleFederationPlugin },
} = webpack;

const config: webpack.Configuration = {
  entry: "./src/dashboard.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "",
    publicPath: "http://localhost:5000/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: ["@babel/plugin-transform-class-properties"],
          },
        },
      },
      { test: /\.(svg)$/, type: "asset/inline" },
      { test: /\.hbs$/, use: ["handlebars-loader"] },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-template.hbs",
      favicon: "./src/assets/favicon.svg",
      filename: "index.html",
      minify: true,
      title: "Dashboard",
      meta: {
        description: "Dashboard",
      },
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
        KiwiApp: "KiwiApp@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};

export default config;
