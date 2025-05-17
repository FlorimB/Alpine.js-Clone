import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "esbuild",
    lib: {
      entry: "src/main.js",
      name: "Snowcap",
      fileName: (format) => `Snowcap.${format}.js`,
      formats: ["es", "cjs", "iife"],
    },
    rollupOptions: {
      external: ["@vue/reactivity"],
      output: {
        globals: {
          "@vue/reactivity": "VueReactivity",
        },
      },
    },
  },
});
