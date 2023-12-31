import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
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
            plugins: ["@babel/plugin-transform-class-properties"],
          },
        },
      },
      { test: /\.(ttf)$/, type: "asset/resource" },
      { test: /\.(svg)$/, type: "asset/inline" },
      { test: /\.(png|jpg)$/, type: "asset/resource" },
      { test: /\.txt/, type: "asset/source" },
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.hbs",
      favicon: "./src/assets/favicon.svg",
      title: "Webpack 5 Course HBS",
      meta: {
        description: "Webpack 5 Course HBS",
      },
    }),
  ],
};

export default config;
