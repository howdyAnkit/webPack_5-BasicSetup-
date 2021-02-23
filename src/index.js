import "./styles/index.scss";
const webpackBasic = {
  BasicSetup: true, //file --> webpack.config.js && package.json
  hotReload: true, // file --> package.json (yarn start)
  bundlerIntialization: true, //file --> webpack.config.js
};

const webpackBasicDefination = {
  BasicSetup:
    "We are trying to set (start && watch) which is better serve or dev-server? (https://stackoverflow.com/questions/49418818/how-is-webpack-serve-different-from-webpack-dev-server)",
  hotReload:
    "We are achieving live reloading of any pages when any content Changes with the help of --watch also set hot to true",
  ContentBase:
    "ContentBase Just directs the entryPoint where should the server look for files instead of just showing directory if there are no contentbase providede it will load the directory instead of Page in Browser",
};

const webpackSpreadSyntax = {
  ...webpackBasicDefination, //The spread syntax
  SpreadSyntax:
    "When we use spread Syntax the Webpack is just injecting that but not building in to dist/main folder and that's where the BabelSupport jumps in",
};

const CssLoader = {
  MiniCssExtractPlugin:
    "The MiniCssExtractPlugin Creates a final Css one single file.Alternative can be Style Loader",
  Application:
    "Webpack reads from right to left in an array and it loads the css-loader first and then binds the property to the MiniCssExtractPlugin",
};

const SassLoader = {};

// const webpackCssLoader = {
//   CssLoader: "css-Loader",
//   CssPlugin: "mini-css-extract-plugin",
// };

// console.log(webpackBasic);
// console.log(webpackBasicDefination.hotReload);
