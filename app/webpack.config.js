const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: require.resolve("./src/index.tsx"),
  mode: isDevelopment ? "development" : "production",
  devtool: false,
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: [
              require.resolve("@babel/preset-env"),
              require.resolve("@babel/preset-react"),
              require.resolve("@babel/preset-typescript"),
            ],
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: false,
                  version: require("@babel/runtime/package.json").version,
                  regenerator: true,
                },
              ],
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: "raw-loader",
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".ts", ".tsx", ".json", ".jsx", ".js"],
    alias: {
      "README.md": path.resolve(__dirname, "..", "README.md"),
    },
  },
  stats: "minimal",
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ].filter(Boolean),
  devServer: {
    hot: true,
    port: 3001,
    open: true
  },
};
