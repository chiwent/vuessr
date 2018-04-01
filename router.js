import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/bar',
        component: () => import('./src/components/Bar.vue')
      },
      {
        path: '/baz',
        component: () => import('./src/components/Baz.vue')
      },
      {
        path: '/foo',
        component: () => import('./src/components/Foo.vue') 
      },
      {
        path: '/item/:id',
        component: () => import('./src/components/Item.vue')
      }
    ]
  })
}
