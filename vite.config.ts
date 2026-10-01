import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: false, // Keep security debugger traps
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.trace'],
        passes: 3,
      },
      mangle: {
        toplevel: true,
        properties: false,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        comments: false,
      },
    },
  },
})
