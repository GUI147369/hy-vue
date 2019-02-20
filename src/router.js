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
import Detail from './views/Detail.vue'
import Login from './views/Login.vue'
import Nprogress from 'nprogress'
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
      components: City
    },
    {
      path: '/detail/:id',
      component: Detail,
      props: true
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/card',
      component: {
        render (h) {
          return h('div', '卡')
        }
      }
    },
    {
      path: '/money',
      component: {
        render (h) {
          return h('div', '钱')
        }
      }
    },
    {
      path: '/set',
      component: {
        render (h) {
          return h('div', '设置')
        }
      }
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
router.beforeEach((to, from, next) => {
  // 开始Nprogress
  Nprogress.start()
  let nickName = sessionStorage.getItem('nickName')
  let list = ['/card', '/money', '/card']
  if (list.indexOf(to.path) > -1 && !nickName) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  // 停止Nprogress
  Nprogress.done()
})
export default router
