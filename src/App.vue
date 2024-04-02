<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>
<style>
/* tailwindcss 样式文件注入 */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

#app, body, page {
  height: 100%;
  background-color: #fff;
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Arial Bold", sans-serif;
}

/* 设置底部安全区 */
.safe-area-inset-bottom {
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

view {
  box-sizing: border-box;
}
</style>
