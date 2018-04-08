{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import store from './store'
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}
{{#router}}
import router from './router'
{{/router}}

{{#i18n}}
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh-CN', // 默认中文
    messages: {
        'zh-CN': require('./i18n/lang/zh-CN.json'), // 中文语言包
        'en-US': require('./i18n/lang/en-US.json') // 英文语言包
    }
})
{{/i18n}}
Vue.config.devTools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  {{#router}}
  router,
  {{/router}}
  {{#i18n}}
  i18n,
  {{/i18n}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
