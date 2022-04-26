import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './modules/router'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(createPinia()) //挂载pinia

app.mount('#app')

//登录鉴权
router.beforeEach((to, from, next) => {
    debugger
    if (to.matched.some(record => record.meta.requireLogin)){  // 判断该路由是否需要登录权限
    //   if (sessionStorage.getItem('loginInfo')) {  // 判断当前用户的登录信息loginInfo是否存在
    if (true) {
        next();
      } else {
        next({
          path: '/login'
        })
      }
    }else {
      next();
    }
  
  })
