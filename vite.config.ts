import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  css: {
    preprocessorOptions: {
      scss: {
        // options sass si nécessaire
        // Par exemple :
        // additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
})


