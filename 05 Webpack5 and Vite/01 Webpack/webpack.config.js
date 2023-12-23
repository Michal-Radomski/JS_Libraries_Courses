//* command: npx webpack --config ./webpack.config.js
//* command: npx webpack serve
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

  //entry:'./entry.js',// [] {}
  //entry:['./entry.js','./entryTwo.js'],

  //   entry:{
  //     pageOne:{
  //         import:'./entry.js',
  //         filename:'./PageOne/[name].js',
  //         dependOn:'shared'
  //     },
  //     pageTwo:{
  //         import:'./entryTwo.js',
  //         dependOn:'shared'
  //     },
  //     shared:'./shared.js'
  // },

  optimization: {
    // providedExports: true,
    // usedExports: true,
    sideEffects: false,
    minimize: false, // default to true under prod. mode
    // minimizer:['...', new plugin()] // JS, CSS, HTML
  },
  output: {
    iife: true,
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // watch: true, // or: --watch
  // watch: false,
  watchOptions: {
    //ignored:/node_modules/
    //ignored:[path.resolve(__dirname,'node_modules')]
    ignored: ["**/node_modules"],
  },
  devServer: {
    port: 8080,
    hot: true,
    watchFiles: ["**/src/backend/*"],
    static: [
      {
        directory: path.resolve(__dirname, "public"),
        watch: true,
        publicPath: "/",
      },
      {
        directory: path.resolve(__dirname, "style"),
        watch: false,
        publicPath: "/style/",
        serveIndex: false, // default to true
        staticOptions: {
          index: "about.html",
        },
      },
    ],
  },
};
