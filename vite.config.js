import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts';
import Unocss from 'unocss/vite'
import{presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,} from 'unocss'

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
      // include: [
      //   /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      //   /\.vue$/, /\.vue\?vue/, // .vue
      //   /\.md$/, // .md
      // ],
      imports:['vue','vue-router',]
    }),
    // // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    // Layouts(),
    // https://github.com/unocss/unocss
    Unocss({
      shortcuts: [
        ['tag', 'text-sm cursor-pointer inline-flex justify-center items-center transition shadow hover:shadow-md'],
        ['btn', 'text-sm px-4 py-1 rounded inline-block bg-green-600 text-white cursor-pointer hover:bg-green-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-green-600'],
        ['menu-btn','cursor-pointer inline-block hover:text-green-600 mx-2'],
        ['upload-input',''],
        ['searchSuggestUl','m-t-0 p-x-5 list-none text-gray-600 opacity-75']
      ],
      // presets: [],
      // rules:[
      //   [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
      //   [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
      // ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
        presetTypography(),
        presetWebFonts({
          fonts: {
            sans: 'DM Sans',
            serif: 'DM Serif Display',
            mono: 'DM Mono',
          },
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ],
    }),
  ] 
})
