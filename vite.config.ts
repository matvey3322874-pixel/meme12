// vite.config.ts
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'jotai': path.resolve(__dirname, 'node_modules/jotai')  // фикс для множественных экземпляров
    },
  },
  optimizeDeps: {
    include: ['jotai']  // форсируем пре-бандлинг
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})