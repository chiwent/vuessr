import { createApp } from '../app'

// 客户端特定引导逻辑
const { app, router } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 有可能为异步组价
router.onReady(() => {
  // 添加路由钩子函数，用于处理asyncData
  // 在初始路由resolve后执行
  // 以便不会二次预取已有数据
  // 使用`router.beforeResolve()`,确保所有异步组件都resolve
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // 只关心之前没有渲染的组件，所以对比他们，找出两个匹配列表的差异组件
    let diffed = false
    const actived = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!actived.length) {
      return next()
    }

    // 这里可以展示菊花图
    Promise.all(actived.map(c => {
      if (c.asyncData) {
        return c.asyncData({store, route: to})
      }
    })).then(() => {
      // 停止菊花图
      next()
    }).catch(next)
  })
  // 挂载
  app.$mount('#app')
})
