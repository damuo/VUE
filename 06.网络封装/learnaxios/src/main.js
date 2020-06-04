import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import {request} from './network/request'
/*
request({
  url:'/home/multidata'
},res=>{
  console.log(res)
},err=>{
  console.log(err);
})*/
/*request({
  baseConfig: {
    url: '/home/multidata'
  },
  succes: function (res) {
    console.log(res);
  },
  failure: function (res) {
    console.log(res);
  }
})*/
/*request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})*/
request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

