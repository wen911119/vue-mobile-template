import Vue from 'vue'
import Router from 'vue-router'
const demoList = () => import('@/modules/Demo/pages/demo-list/app.vue')
const vuexDemo = () => import('@/modules/Demo/pages/vuex-demo/app.vue')
const iconfontDemo = () => import('@/modules/Demo/pages/iconfont-demo/app.vue')
{{#i18n}}
const i18nDemo = () => import('@/modules/Demo/pages/i18n-demo/app.vue')
{{/i18n}}
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/demo',
            name: 'demo-list',
            component: demoList
        },
        {
            path: '/demo/vuex',
            name: 'vuex',
            component: vuexDemo
        },
        {
            path: '/demo/iconfont',
            name: 'iconfont',
            component: iconfontDemo
        },
        {{#i18n}}
        {
            path: '/demo/i18n',
            name: 'i18n',
            component: i18nDemo
        },
        {{/i18n}}
        { path: '*', redirect: '/demo' }
    ]
})
