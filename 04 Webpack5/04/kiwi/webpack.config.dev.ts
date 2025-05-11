import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

// const { ModuleFederationPlugin } = require("webpack").container;
const {
  container: { ModuleFederationPlugin },
} = webpack;

const config: webpack.Configuration = {
  entry: "./src/kiwi.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "",
    publicPath: "http://localhost:3001/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    port: 3001,
    open: false,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  mode: "development",
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
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  plugins: [
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
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./KiwiPage": "./src/components/KiwiPage.ts",
      },
    }),
  ],
};

export default config;
