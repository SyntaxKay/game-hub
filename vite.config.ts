import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
