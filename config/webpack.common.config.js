const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
    alias: {
      "@": path.resolve(__dirname, "..", "src"),
    },
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/, // 排除 node_modules 目录
      },
    ],
  },
};
