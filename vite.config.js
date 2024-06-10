import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    proxy:{
      "/api":{
        target: 'http://localhost:8000', // The target server to proxy to
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: rewrite the URL path
      
      }},
    } 
})
