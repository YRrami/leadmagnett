import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensure all routes fallback to index.html
  },
  build: {
    outDir: 'dist', // Directory where the build will be output
  },
});
