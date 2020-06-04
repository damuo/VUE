import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import ModuleA from "./modules/ModuleA";
Vue.use(Vuex)
const state={
  num:100,
  counter:1000,
  student:{id:110,name:'Jek',age:23},
  students:[
    {id:110,name:'tom',age:17},
    {id:110,name:'Tony',age:21},
    {id:110,name:'Mark',age:36}
  ]
};
export default new Vuex.Store({
  //全局变量区
  state: state,
  //同步方法区
  mutations: mutations,
  //异步操作|context:上下文
  actions: actions,
  //计算属性
  getters: getters,
  //Vuex模块化管理
  modules: {
    a:ModuleA
  }
})
