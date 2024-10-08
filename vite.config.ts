import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unocss(),
    autoImport({
      imports: ['react'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/hooks', 'src/stores', 'src/components/**'],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@libs/': `${path.resolve(__dirname, 'src/libs')}/`,
      '~/': `${path.resolve(__dirname, '.')}/`, 
    },
  },
  server: {
    port: 8888,
    open: true,
  },
});
