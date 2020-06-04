import Vue from 'vue'
import App from './App.vue'
//是否显示提示信息
Vue.config.productionTip = false

new Vue({
  //1.原始方法
 /* render:function (createElement) {
    return createElement(App)
  }*/
  //2.箭头函数
  /*render:h=>{
    return h(App)
  }*/
  //3.箭头函数简化
  render: h => h(App),

}).$mount('#app')

