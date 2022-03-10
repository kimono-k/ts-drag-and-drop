const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

// Configures the development server
module.exports = {
  mode: "production",
  entry: "./src/app.ts", // root file of project
  output: {
    filename: "bundle.js", // bundled file name
    path: path.resolve(__dirname, "dist"), // absolute path to dist folder for export
  },
  devtool: "hidden-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // look for x files
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
}; // configuration
