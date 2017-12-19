import Vue from 'vue'
import Router from 'vue-router'
const demo1 = ()=>import('@/modules/Demo/pages/demo1/app.vue')
const demo2 = ()=>import('@/modules/Demo/pages/demo2/app.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: demo2
      },
    { path: '*', redirect: '/demo1' }
  ]
})
