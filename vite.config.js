import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     port: 3000,
  },
  base: "/Car-rental",
  build: {
    rollupOptions: {
      input: '/public/index.html', // Change 'src/main.js' to the actual path of your entry JavaScript file.
    },
  },
})
