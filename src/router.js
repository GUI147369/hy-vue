// 引入vue
// 引入 vue-router
// 使用 Vue.set(vue-router)
import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from './views/Film.vue'
import NowPlaying from './views/NowPlaying.vue'
import ComingSoon from './views/ComingSoon.vue'
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
          component: Film,
          children: [
            {
              path: 'nowPlaying',
              component: NowPlaying
            },
            {
              path: 'comingSoon',
              component: ComingSoon
            }
          ]
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
          redirect: '/films/nowPlaying'
        }
      ]
    },
    {
      path: '/city',
      component: City
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
    },
    {
      path: '/filmOrder',
      component: {
        render (h) {
          return h('div', '电影订单')
        }
      }
    },
    {
      path: '/groupOrder',
      component: {
        render (h) {
          return h('div', '拼团订单')
        }
      }
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 开始Nprogress
  Nprogress.start()
  let nickName = sessionStorage.getItem('nickName')
  let list = ['/card', '/money', '/card', '/filmOrder', '/groupOrder']
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
