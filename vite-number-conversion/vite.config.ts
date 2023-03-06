import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const globalVars = {
  '@mobile-max-width': '780px',
  '@page-max-width': '1280px',
  '@color-my-green':'#284e7e'
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // 输出目录
    // assetsDir: 'assets', // 静态资源目录
    rollupOptions: {
      // 输出文件名
      output: {
        // 禁用哈希值后缀
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  plugins: [react()],
  css:{
    preprocessorOptions: {
      less: {
      charset: false,
      globalVars: globalVars,
      // additionalData: '@import "./src/assets/style/global.less";',
      },
      },
  },
  base:"/",
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  },
  
})
