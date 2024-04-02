<!-- 自定义页面上中下布局模板 -->
<template>
  <view class="page-layout" :style="pageStyle">
    <view v-show="$slots.header" class="page-layout-header">
      <!-- 头部 -->
      <slot name="header" />
    </view>
    <view v-show="$slots.container" class="page-layout-container">
      <!-- 中间内容 -->
      <slot name="container" />
    </view>
    <slot />
    <!-- 是否底部固定适配 iphonex 等以上机型 -->
    <view v-show="$slots.footer" class="page-layout-footer" :class="{'page-layout-footer--fixed': footerFixed}">
      <!-- 底部 -->
      <slot name="footer" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { withDefaults, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    customStyle?: object, // 自定义页面样式
    footerFixed?: boolean, // 底部是否固定
  }>(),
  {
    customStyle: () => ({}),
    footerFixed: false,
  },
)

const pageStyle = computed(() => {
  const customStyleArr = Object.entries(props.customStyle)
  if (!customStyleArr.length) return

  return customStyleArr.reduce((pre, cur) => (pre += `${cur[0]}: ${cur[1]};`), '')
})
</script>

<script lang="ts">
export default {
  name: 'CusPageLayout',
}
</script>

<style scoped>
.page-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
}

.page-layout-container {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.page-layout-container::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

.page-layout-footer {
  position: relative;
  z-index: 1;
  padding-bottom: 100rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.page-layout-footer--fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.page-layout-footer__placeholder {
  height: constant(safe-area-inset-bottom);
}
</style>
