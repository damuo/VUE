import Vue from 'vue'
import App from './App'
//导入路由对象
import router from './router'

Vue.config.productionTip = false

//挂载到vue实例
new Vue({
  el: '#app',
  //3.挂载路由对象
  router,
  //最先渲染
  render: h => h(App)
})
