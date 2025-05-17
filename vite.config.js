import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'Snowcap', // Global variable name in IIFE
      fileName: () => 'index.js',
      formats: ['iife']
    }
  }
});
