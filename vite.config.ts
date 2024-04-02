import { defineConfig } from 'vite'
import nested from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import tailwindcssConfig from './tailwind.config.ts'
import postcssPresetEnv from 'postcss-preset-env'
import uni from '@dcloudio/vite-plugin-uni'
import autoImport from 'unplugin-auto-import/vite'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import { isMp } from '@uni-helper/uni-env'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        nested(),
        tailwindcss({
          config: tailwindcssConfig,
        }),
        postcssPresetEnv({
          stage: 3,
          features: { 'nesting-rules': false },
        }),
      ],
    },
  },
  plugins: [
    uni(),
    uniTailwind({
      shouldApply: isMp, // 编译小程序需要设置
    }),
    autoImport({
      include: [/\.vue$/, /\.vue\?vue/],
      imports: [
        'vue',
        'uni-app',
        'pinia',
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: true,
    }),
  ],
})
