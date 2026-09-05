import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        transition1: resolve(__dirname, 'src/pages/transition1.html'),
        transition2: resolve(__dirname, 'src/pages/transition2.html'),
        transition3: resolve(__dirname, 'src/pages/transition3.html'),
      },
    },
  },
});