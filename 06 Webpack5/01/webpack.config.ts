import path from "path";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "dist/",
    publicPath: "",
    clean: true, //* or CleanWebpackPlugin
  },
  resolve: {
    extensions: [".ts", ".js"],
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
            plugins: ["@babel/plugin-transform-class-properties"],
          },
        },
      },
      // { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.(ttf)$/, type: "asset/resource" },
      { test: /\.(svg)$/, type: "asset/inline" }, //* For small images like svg files -> data:image/jpeg;base64!
      // {
      //   test: /\.(png|jpg)$/,
      //   type: "asset", //* Webpack decides which method to choose!
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 3 * 1024,
      //     },
      //   },
      // },
      { test: /\.(png|jpg)$/, type: "asset/resource" },
      { test: /\.txt/, type: "asset/source" }, //* .txt files!
      // { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
    ],
  },

  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ["**/*", path.join(process.cwd(), "dist/**/*")],
    // }),
    new HtmlWebpackPlugin({
      // template: "./index.html",
      // favicon: "./favicon.svg",

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
