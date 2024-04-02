// 公共组件全局注册声明
import type { App } from 'vue'
import CusPageLayout from './cus-page-layout.vue'

export default function (app: App) {
  app.component(CusPageLayout.name, CusPageLayout)
}
