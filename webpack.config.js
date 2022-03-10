const path = require("path");

// Configures the development server
module.exports = {
  mode: "development",
  entry: "./src/app.ts", // root file of project
  output: {
    filename: "bundle.js", // bundled file name
    path: path.resolve(__dirname, "dist"), // absolute path to dist folder for export
    publicPath: "dist",
  },
  devtool: "inline-source-map",
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
}; // configuration
