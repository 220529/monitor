// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "../package.json";

const file = (type) => `dist/${pkg.name}.${type}.js`;

export default {
  input: "src/index.ts",
  output: [
    {
      file: file("esm"),
      format: "es",
    },
    {
      name: "nsMonitor",
      file: file("umd"),
      format: "umd",
    },
  ],
  plugins: [
    resolve(), // 解析第三方模块，将源码与依赖的第三方库进行合并
    commonjs(), // 将 CommonJS 模块转换为 ES 模块
    typescript({ compilerOptions: { declaration: true, outDir: "dist" } }),
  ],
};
