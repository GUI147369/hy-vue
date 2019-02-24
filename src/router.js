// 引入vue
// 引入 vue-router
// 使用 Vue.set(vue-router)
import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
Vue.use(VueRouter)
// import Film from './views/Film.vue'
// import NowPlaying from './views/NowPlaying.vue'
// import ComingSoon from './views/ComingSoon.vue'
// import Cinema from './views/Cinema.vue'
// import Center from './views/Center.vue'
// import City from './views/City.vue'
// import Home from './views/Home.vue'
// import Detail from './views/Detail.vue'
// import Login from './views/Login.vue'
// router-view 路由视图 router-link 路由跳转
// 路由插件提供方法 install 就可以调用vue的install方法，相当于调用全局组件
let router = new VueRouter({
  // 配置 路由对照表 url对应相应的组件
  // localhost:8080/#/films -> Film.vue
  // localhost:8080/#/cinemas -> Cinema.vue
  // localhost:8080/#/center -> Center.vue
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'films',
          component: () => import('./views/Film.vue'),
          children: [
            {
              path: 'nowPlaying',
              component: () => import('./views/NowPlaying.vue')
            },
            {
              path: 'comingSoon',
              component: () => import('./views/ComingSoon.vue')
            }
          ]
        },
        {
          path: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Center.vue')
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
      component: () => import('./views/City.vue')
    },
    {
      path: '/detail/:id',
      component: () => import('./views/Detail.vue'),
      props: true
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/filmOrder',
      component: () => import('./views/FilmOrder.vue')
    },
    {
      path: '/groupOrder',
      component: () => import('./views/GroupOrder.vue')
    },
    {
      path: '/card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/money',
      component: () => import('./views/Money.vue')
    },
    {
      path: '/set',
      component: () => import('./views/Set.vue')
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  // 开始Nprogress
  Nprogress.start()
  let nickName = sessionStorage.getItem('nickName')
  let list = ['/card', '/money', '/card', '/filmOrder', '/groupOrder', '/user']
  if (list.indexOf(to.path) > -1 && !nickName) {
    if (to.path === '/user') {
      next({
        path: '/login',
        query: {
          redirect: '/center'
        }
      })
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  // 停止Nprogress
  Nprogress.done()
})
export default router
