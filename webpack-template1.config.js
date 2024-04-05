const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/templates/template1.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "public/assets/templates/template1.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: "head",
              injectType: "singletonStyleTag",
            },
          },
          ,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
