import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the build works on Render,
// GitHub Pages or any other static host without extra config.
export default defineConfig({
  plugins: [react()],
  base: './',
});
