import Vue from 'vue'
//导入路由对象
import VueRouter from 'vue-router'
//安装插件
Vue.use(VueRouter)
//配置映射(懒加载导入)
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: () => import('../../views/home/Home')
  }
  ,
  {
    path:'/category',
    component: () => import('../../views/category/Category')
  },
  {
    path:'/cart',
    component: () => import('../../views/cart/Cart')
  },
  {
    path:'/profile',
    component: () => import('../../views/profile/Profile')
  },
]
//创建路由对象
const router = new VueRouter({
  routes,
  //去除hash模式，即去除#
  mode:'history'
})
//导出路由对象
export default router
