const path = require("path");
const config = {
  entry: path.join(__dirname, "./src/index.tsx"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "mint_bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".txt"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: [path.resolve("src")],
        loader: "ts-loader",
        options: {
          transpileOnly: false,
          compilerOptions: {
            module: "esnext",
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
module.exports = config;