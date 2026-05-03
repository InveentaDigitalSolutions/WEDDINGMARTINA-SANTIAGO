import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site at /WEDDINGMARTINA-SANTIAGO/.
// The base only kicks in for production builds; dev still serves at /.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/WEDDINGMARTINA-SANTIAGO/' : '/',
  server: {
    port: 5757,
    strictPort: true,
    host: true,
  },
}));
