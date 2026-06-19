const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Build mode: enables optimizations like minification
  mode: "production",

  // Controls how much information Webpack prints to the console
  stats: {
    errorDetails: true, // include full error stack/details
  },

  entry: {
    main: "./js/main.js",
    layoutGenerator: "./js/layout-generator/main.js",
    indieWebDB: "./js/indiewebdb/main.js",
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "js/[name].js",
    assetModuleFilename: "[path][name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,

        use: [
          // Extract CSS into separate files instead of injecting into JS
          MiniCssExtractPlugin.loader,

          {
            // Resolves @import and url() in CSS
            loader: "css-loader",
            options: {
              // Disable url() handling so Webpack does NOT process images (Eleventy is handling images instead)
              url: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/i,

        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },

          // Compiles SCSS → CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        // Prevent Webpack from processing images in this folder because Eleventy already copies them
        exclude: path.resolve(__dirname, "assets/img"),
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Output filename for extracted CSS
      // [name] corresponds to entry names (main, layoutGenerator)
      filename: "[name].css",
    }),
  ],

  // Generate source maps for debugging (maps compiled code back to source)
  devtool: "source-map",
};
