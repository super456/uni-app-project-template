import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import globalComponents from '@/components'

export function createApp () {
  const app = createSSRApp(App)
  const pinia = createPinia()

  app.use(globalComponents)
  app.use(pinia)

  return {
    app,
  }
}
