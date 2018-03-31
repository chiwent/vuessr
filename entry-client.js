import { createApp } from './app'

// 客户端特定引导逻辑
const { app, router } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 有可能为异步组价
router.onReady(() => {
  // 挂载
  app.$mount('#app')
})
