import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "vueModuleLoader",
    },
    target: "es2015",
    sourcemap: true,
    minify: false,
    terserOptions: {
      format: {
        comments: "all",
      },
    },
  },
  plugins: [dts()],
});
