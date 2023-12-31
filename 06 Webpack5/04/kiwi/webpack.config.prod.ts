import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

// const { ModuleFederationPlugin } = require("webpack").container;
const {
  container: { ModuleFederationPlugin },
} = webpack;

const config: webpack.Configuration = {
  entry: "./src/kiwi.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "",
    publicPath: "http://localhost:3001/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.hbs$/, use: ["handlebars-loader"] },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      { test: /\.(svg)$/, type: "asset/inline" },
      { test: /\.jpg$/, type: "asset/resource" },
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      minify: true,
      template: "./src/page-template.hbs",
      favicon: "./src/assets/favicon.svg",
      title: "Kiwi",
      meta: {
        description: "Kiwi",
      },
    }),
    new ModuleFederationPlugin({
      name: "KiwiApp",
      // remotes: {
      //   HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
      // },
      filename: "remoteEntry.js",
      exposes: {
        "./KiwiPage": "./src/components/KiwiPage.ts",
      },
    }),
  ],
};

export default config;
