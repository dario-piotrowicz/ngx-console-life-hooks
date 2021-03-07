const path = require("path");
const TypescriptDeclarationPlugin = require("../custom-typescript-declaration-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/lib/console-hooks",
  output: {
    libraryTarget: "umd",
    library: "ngx-console-life-hooks",
    umdNamedDefine: true,
    path: path.join(__dirname, "../dist-lib"),
    filename: "ngx-console-life-hooks.js",
  },
  plugins: [
    new TypescriptDeclarationPlugin({
      out: "ngx-console-life-hooks.d.ts",
    }),
  ],
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "lib/tsconfig.json",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
