import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const globalVars = {
  '@mobile-max-width': '780px',
  '@page-max-width': '1340px',
  '@color-my-green':'#284e7e'
}
// https://vitejs.dev/config/
export default defineConfig({
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

})
