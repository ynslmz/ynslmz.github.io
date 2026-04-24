import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 4200,
  },
});
