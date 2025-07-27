import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/vietnam-travel/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },

  // Optional: for better debugging
  server: {
    port: 3000
  }
})
