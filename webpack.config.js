const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "public/main.js",
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
    ],
  },
};
