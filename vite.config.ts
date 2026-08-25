import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        attentionByDesign: resolve(__dirname, 'attention-by-design/index.html'),
        theFirelitMind: resolve(__dirname, 'the-firelit-mind/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
})
