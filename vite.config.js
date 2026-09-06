import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        transition1: resolve(__dirname, 'transition1.html'),
        transition2: resolve(__dirname, 'transition2.html'),
        transition3: resolve(__dirname, 'transition3.html'),
      },
    },
  },
});