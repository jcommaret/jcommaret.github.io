import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from 'vite-plugin-sitemap'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://jcommaret.github.io', 
      dynamicRoutes: [
        '/',
        '/#/about',
        '/#/projects',
        '/#/resume'
      ]
     })
  ],
  base: "",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
