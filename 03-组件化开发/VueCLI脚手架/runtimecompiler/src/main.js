// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/* eslint-disable no-new */
//组件
const cpn={
  template:'<div>{{message}}</div>>',
  data(){
    return{
      message:"我是组件"
    }
  }
}
console.log(App)
new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/
  //render函数翻译虚拟DOM
  render:function (createElement) {
    //1.传入标签:创建虚拟DOM，渲染为真实DOM
   /* return createElement('h2',
      {class:'box'},
      ['HelloWorld', createElement('button',['按钮'])])
    }*/
    //2.传入组件:创建虚拟DOM，渲染为真实DOM
    return createElement(cpn)
  }
})

