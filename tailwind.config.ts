// 自定义配置
import type { Config } from 'tailwindcss'
import { basePreset, elementPlusPreset, miniprogramBasePreset } from 'tailwind-extensions'
import { isMp, isQuickapp } from '@uni-helper/uni-env'
import colors from './tailwind.colors'

const presets: Config['presets'] = [basePreset]
if (isMp || isQuickapp) {
  presets.push(
    elementPlusPreset({
      baseSelectors: [':root', 'page'],
    }),
    miniprogramBasePreset,
  )
} else {
  presets.push(elementPlusPreset())
}

const config: Config = {
  // 不在 content 包括的文件内，你编写的 class，是不会生成对应的 css 工具类的
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets,
  darkMode: 'media',
  theme: { // 覆盖默认 tailwindcss 配置
    // 简写：text-属性名
    textColor: {
      primary: colors.neutral[9],
      secondary: colors.neutral[8],
      tertiary: colors.neutral[7],
      remind: colors.neutral[6],
      disable: colors.neutral[5],
      inverse: '#fff',
      link: colors.blue[6],
      brand: colors.blue[6],
      success: colors.green[6],
      warning: colors.orange[6],
      error: colors.red[6],
    },
    // 简写：bg-属性名
    backgroundColor: {
      default: colors.neutral[1],
      inverse: '#fff',
      brand: colors.blue[6],
      'brand.light': colors.blue[1],
      info: colors.blue[6],
      'info.light': colors.blue[1],
      success: colors.green[6],
      'success.light': colors.green[1],
      warning: colors.orange[6],
      'warning.light': colors.orange[1],
      error: colors.red[6],
      'error.light': colors.red[1],
      ...colors,
    },
    // 简写：border-属性名
    borderColor: {
      default: colors.neutral[4],
      brand: colors.blue[6],
      info: colors.blue[6],
      success: colors.green[6],
      warning: colors.orange[6],
      error: colors.red[6],
      divider: colors.neutral[3],
      ...colors,
    },
    // 简写：text-属性名，说明设置字体大小和行高
    fontSize: {
      xs: ['20rpx', '28rpx'],
      sm: ['24rpx', '36rpx'],
      md: ['28rpx', '40rpx'],
      lg: ['32rpx', '44rpx'],
      xl: ['36rpx', '52rpx'],
      '2xl': ['40rpx', '56rpx'],
      '3xl': ['48rpx', '68rpx'],
    },
    // 简写：font-属性名
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    // 间距设置，作用于 padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding
    // 比如使用 padding，则 p-属性名
    spacing: {
      0: '0',
      sm: '8rpx',
      md: '16rpx',
      lg: '24rpx',
      xl: '32rpx',
      '2xl': '48rpx',
      '3xl': '64rpx',
    },
    // 简写：rounded-属性名
    borderRadius: {
      sm: '8rpx',
      md: '12rpx',
      lg: '24rpx',
      xl: '48rpx',
      full: '9999rpx',
    },
    // 简写：shadow-属性名
    boxShadow: {
      DEFAULT: '0 4rpx 16rpx rgba(0, 0, 0, 0.02)',
      sm: '0 6rpx 16rpx rgba(0, 0, 0, 0.08)',
      md: '0 10rpx 28rpx rgba(0, 0, 0, 0.09)',
      lg: '0 16rpx 40rpx rgba(0, 0, 0, 0.1)',
    },
    extend: {
      // 设置默认边框宽度为 1rpx
      borderWidth: {
        thin: '1rpx',
      },
    },
  },
  corePlugins: {
    preflight: false, // 默认样式关闭
  },
}

export default config
