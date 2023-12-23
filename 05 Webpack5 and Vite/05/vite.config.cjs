const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  //mode
  //root:process.cwd(),
  root: path.resolve(__dirname, "src"), // ./ -> process.cwd()
  //base:'/',
  //publicDir:'public', // false to disable; ./ -> vite root
  publicDir: path.resolve(__dirname, "public"),
  build: {
    target: "modules",
    minify: "esbuild",
    emptyOutDir: true,
    //outDir:'dist', // ./ -> vite root
    outDir: path.resolve(__dirname, "dist"),
    assetsDir: "myAssets", // relative to outDir
    rollupOptions: {
      //input:{}, default: index: vite root / index.html
      //output:{}
    },
  },
});
