import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '首页',
        component: () =>  import('../views/Home.vue') 
    },
    {
        path: '/details',
        name: '详情',
        component: () =>  import('../views/Details.vue') 
    },
    {
        path: '/upload',
        name: '上传',
        component: () => import('../views/Upload.vue') 
    },
    {
        path: '/search',
        name: '查询',
        component: () => import('../views/Search.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router