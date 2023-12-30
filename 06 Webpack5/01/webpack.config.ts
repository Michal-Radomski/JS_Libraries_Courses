import path from "path";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "none",
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
      // { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.(ttf)$/, type: "asset/resource" },
      { test: /\.(svg)$/, type: "asset/inline" }, //* For small images like svg files
      // {
      //   test: /\.(png|jpg)$/,
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 3 * 1024,
      //     },
      //   },
      // },
      { test: /\.(png|jpg)$/, type: "asset/resource" },
      { test: /\.txt/, type: "asset/source" },
      // { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },

  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};

export default config;
