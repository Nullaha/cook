import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),//因为浏览器不支持.vue文件，所有插件plugin-vue

    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers:[
        ElementPlusResolver()
      ]
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({ 
      imports:['vue','vue-router',]
    }),
    // // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    // Layouts(),
  ] 
})
