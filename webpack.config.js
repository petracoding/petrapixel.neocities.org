const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./js/main.js",
    layoutGenerator: "./js/layout-generator/main.js",
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
