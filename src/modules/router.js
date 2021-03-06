import {createRouter,createWebHistory} from 'vue-router'
import { Session } from '../util/cache'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '首页',
        component: () =>  import('../views/Home.vue') ,
        children:[
            // {
            //     path: 'details',
            //     // name: '详情',
            //     component: () =>  import('../views/Details.vue') 
            // },
        ]
    },
    {
        path: '/search',
        name: '查询',
        component: () => import('../views/Search.vue')
    },
    {
        path: '/upload',
        name: '上传',
        component: () => import('../views/Upload.vue') ,
        meta:{
            requireLogin:true //当前路由需要登录验证
        }
    },
    {
        path: '/profile',
        name: '我的',
        component: () => import('../views/Profile.vue') ,
        meta:{
            requireLogin:true //当前路由需要登录验证
        }
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('../views/Login.vue') ,
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


//登录鉴权
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要登录权限
      if (Session.get('token')) { // 判断当前用户是否登录
          next()
      } else {
        if (to.name === 'Login') {//防止next无限循环的问题
          next();
          return
        }
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      }
    } else {
      next()
    }
  })

  

export default router