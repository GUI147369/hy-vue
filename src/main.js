import Vue from 'vue'
import App from './App.vue'
import './assets/style/reset.less'
import 'nprogress/nprogress.css'
import './assets/style/common.less'
import router from './router.js'
import store from '@/store/index.js'
// 让浏览器console里面不出现一个生产的提示
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
