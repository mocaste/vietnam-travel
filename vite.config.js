import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vietnam-travel/',  // Important for GitHub Pages
  build: {
    outDir: 'dist'
  }
})
