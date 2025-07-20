import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve:{
   alias:{
       '@': path.resolve(__dirname, './src'),
   },
  },
  build: {
    outDir: 'dist',         // Render publica a pasta "dist"
    emptyOutDir: true,      // limpa a pasta antes de cada build
  },
  server: {
    port: 5173,             // porta local (opcional)
  },
  base: '/',                // importante para roteamento relativo
  
});
