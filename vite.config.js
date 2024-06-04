import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/my-vue-app/' : '/',
  build:{
    chunkSizeWarningLimit: 1000, // 单位是 KB
  }
})
