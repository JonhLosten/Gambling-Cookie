import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base relative pour GitHub Pages (fonctionne quelle que soit l'URL du projet)
  base: './',
});
