// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { name } = require("./package");

// module.exports = {
//   entry: "./index.js",
//   // devtool: "source-map",
//   devServer: {
//     clientLogLevel: "warning",
//     disableHostCheck: true,
//     compress: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//     overlay: { warnings: false, errors: true },
//   },
//   output: {
//     library: `${name}-[name]`,
//     libraryTarget: "umd",
//     jsonpFunction: `webpackJsonp_${name}`,
//   },
//   mode: "development",
//   resolve: {
//     extensions: [".js", ".jsx", ".ts", ".tsx"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//             plugins: ["@babel/plugin-transform-react-jsx"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       template: "./index.html",
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//       },
//     }),
//   ],

//   optimization: {
//     moduleIds: "hashed",
//     splitChunks: {
//       cacheGroups: {
//         default: false,
//         vendors: false,
//         // vendor chunk
//         vendor: {
//           name: "vendor",
//           // async + async chunks
//           chunks: "all",
//           // import file path containing node_modules
//           test: /node_modules/,
//           priority: 20,
//         },
//       },
//     },
//   },
// };
