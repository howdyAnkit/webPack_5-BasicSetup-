let mode = "development";
const MiniCssExtractPlugin = require("@vusion/mini-css-extract-plugin");

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",

  devServer: {
    contentBase: "./dist", //Relative path for where the project is
    hot: true,
  },
};
