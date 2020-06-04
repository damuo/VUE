import Vue from 'vue'
//导入组件
/*import home from '../components/Home'
import about from '../components/About'
import user from '../components/User'*/
//组件懒加载
const home=()=> import('../components/Home')
const about=()=> import('../components/About')
const user=()=> import('../components/User')

//1.导入路由对象
import Router from 'vue-router'
//1.1.使用插件
Vue.use(Router)
//2.配置路由映射，创建并导出路由对象
//2.1映射配置
const routes=[
  {
    path:'/',
    //默认显示首页
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
    meta: {
      title:'首页'
    },
    children:[
      //缺省值设置(默认跳转)
     /* {
        path: '',
        redirect:'news'
      },*/
      {
        path: 'news',
        component: () => import('../components/HomeNews'),
        meta: {
          title:'新闻'
        }
      },
      {
        path: 'message',
        component:()=>import('../components/HomeMessage'),
        meta: {
          title:'消息'
        }
      }
    ]
  },
  {
    path:'/about',
    component:about,
    meta: {
      title:'关于'
    },
    //独享守卫
    beforeEnter: (to, from, next) => {
      console.log('这是独享守卫');
      next()
    }
  },
  {
    path:'/user/:parameter',
    component:user,
    meta: {
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:()=>import('../components/Profile'),
    meta: {
      title:'档案'
    }
  }
];
//2.2导出路由对象
const router=new Router({
  routes,
  //url不显示#
  mode: 'history',
  //绑定class
  linkActiveClass: 'active'
})
//全局导航守卫
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title=to.matched[0].meta.title
  next()
})
export default router
