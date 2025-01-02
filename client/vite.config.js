import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // If your backend is using HTTP
        changeOrigin: true,
        secure: false, // Set false if backend doesn't use HTTPS
      },
    },
  },

  plugins: [react()],
})
