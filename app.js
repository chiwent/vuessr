import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

// 导出一个工厂函数，用于创建新的应用程序、
// router和store实例
// 在服务器中，如果只创建一个vue单例容易造成数据污染，各组件数据共享
export function createApp () {
  const router = createRouter()
  const store = createStore()

  // 同步路由状态(route state)到store
  sync(store, router)
  // 根实例简单的渲染应用程序组件
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {
    app,
    router,
    store
  }
}
