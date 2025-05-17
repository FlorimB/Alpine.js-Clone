import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'Snowcap',
      fileName: (format) => `Snowcap.${format}.js`,
      formats: ['es', 'cjs', 'iife'], 
    },
    rollupOptions: {
      external: ['@vue/reactivity'],
      output: {
        globals: {
          '@vue/reactivity': 'VueReactivity'
        }
      }
    }
  }
});
