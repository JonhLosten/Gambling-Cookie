import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT pour GitHub Pages : doit être le nom du repo
  base: '/Gambling-Cookie/',
});
