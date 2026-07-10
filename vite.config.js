import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite = the tool that runs the site while you work, and packs it up for the internet.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
