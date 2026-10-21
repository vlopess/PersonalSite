import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      "/api/medium": {
        target: "https://www.toptal.com",
        changeOrigin: true,
        rewrite: () =>
          "/developers/feed2json/convert?url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Victorldev&minify=on",
      },
    },
  },
})
