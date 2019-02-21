import Vue from 'vue'
import App from './App.vue'
import './assets/style/reset.less'
import 'nprogress/nprogress.css'
import router from './router.js'
import $ from "jquery"
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
