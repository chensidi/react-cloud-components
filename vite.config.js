import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '^\/api': {
        target: 'http://zhoup.top:7003',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './components/index.js'),
      name: 'JcLib',
      fileName: (format) => `JcLib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    }
  }
})
