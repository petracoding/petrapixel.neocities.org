const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./js/main.js",
    tutorials: "./js/tutorials/main.js",
    template1: "./js/templates/template1.js",
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "public/assets/js/[name].js",
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
