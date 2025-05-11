import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

// const { ModuleFederationPlugin } = require("webpack").container;
const {
  container: { ModuleFederationPlugin },
} = webpack;

const config: webpack.Configuration = {
  entry: "./src/dashboard.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "",
    publicPath: "http://localhost:5000/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    port: 5000,
    open: false,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    historyApiFallback: {
      index: "index.html",
    },
  },
  mode: "development",
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
