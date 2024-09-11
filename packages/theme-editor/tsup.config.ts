import { defineConfig } from "tsup";

import babelPlugin from "@chialab/esbuild-plugin-babel";
import { ReactCompilerEsbuildPlugin } from "./react-compiler-esbuild";
export default defineConfig({
  entry: ["src/index.tsx"],
  dts: true,
  format: ["cjs", "esm"],

  esbuildPlugins: [ReactCompilerEsbuildPlugin({
    filter: /\.tsx?$/,
    sourceMaps: true,
    runtimeModulePath: path.resolve(__dirname, "./runtime.ts"),
  })],
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
});
