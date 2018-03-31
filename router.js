import Vue from 'vue'
import Router from 'vue-router'

const Baz = () => import('./src/components/Baz.vue')
const Foo = () => import('./src/components/Foo.vue') 

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
        component: Baz
      },
      {
        path: '/foo',
        component: Foo
      }
    ]
  })
}
