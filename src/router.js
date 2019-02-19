// 引入vue
// 引入 vue-router
// 使用 Vue.set(vue-router)
import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import City from './views/City.vue'
import Home from './views/Home.vue'
// router-view 路由视图 router-link 路由跳转
// 路由插件提供方法 install 就可以调用vue的install方法，相当于调用全局组件
Vue.use(VueRouter)
let router = new VueRouter({
  // 配置 路由对照表 url对应相应的组件
  // localhost:8080/#/films -> Film.vue
  // localhost:8080/#/cinemas -> Cinema.vue
  // localhost:8080/#/center -> Center.vue
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        // 定义一个空的儿子
        // localhost:8080/#/会自动转为 localhost：8080/#/films
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      // 设置一个通配符路由，当路由路径不匹配路由对照表 就会返回电影页面
      path: '*',
      redirect: '/films'
    }
    // {
    //   path: '/films',
    //   component: Film
    // },
    // {
    //   path: '/cinemas',
    //   component: Cinema
    // },
    // {
    //   path: '/center',
    //   component: Center
    // },
    // {
    //   path: '/city',
    //   component: City
    // }
  ]
})
export default router
