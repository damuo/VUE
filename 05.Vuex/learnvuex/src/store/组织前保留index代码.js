import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {INCREMENT} from "./mutations-type";
//module的使用
const moduleA={
    state:{
        name:'爱丽丝'
    },
    mutations:{
        updateName(state,data){
            this.state.num=1
            state.name=data.name
        }
    },
    actions:{
        //1.写法1
        updateNames(context,data){
            setTimeout(()=>{
                alert(context.rootState.num)
                context.commit('updateName',data)
            },1000)
        }
        //2.写法2
        /*updateNames({state,commit,rootState}){
          setTimeout(()=>{
            alert(rootState.num)
            context.commit('updateName',data)
          },1000)
        }*/
    },
    getters:{
        fullName(state){
            return state.name ;
        },
        fullName2(state,getters,rootState){
            return getters.fullName+rootState.num ;
        },
        fullName3(state,getters,rootState){
            return getters.fullName2+rootState.num ;
        }
    }
}
export default new Vuex.Store({
    //全局变量区
    state: {
        num:100,
        counter:1000,
        student:{id:110,name:'Jek',age:23},
        students:[
            {id:110,name:'tom',age:17},
            {id:110,name:'Tony',age:21},
            {id:110,name:'Mark',age:36}
        ]
    },
    //同步方法区
    mutations: {
        [INCREMENT](state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        addCount(state,num){
            state.counter +=num
        },
        subaddCount(state,num){
            state.counter -=num
        },
        //响应式数据
        addStudent(state,stu){
            state.students.push(stu)
        },
        updateStu(state,data){
            state.student.name=data
        }
    },
    //异步操作|context:上下文
    actions: {
        //不带参
        /*updateStudent(context){
          setTimeout(()=>{
            context.commit('updateStu')
          },1000)
        }*/
        //带参
        updateStudent(context,data){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('updateStu',data.name);
                    resolve(data)
                },1000)
            })
        }
    },
    //计算属性
    getters:{
        powerCounter(state){
            return state.counter*state.counter
        },
        getStudent(state){
            return state.students
        },
        //可在参数中传入getter
        getGreateAgeCount(state,getter){
            return getter.getStudent.filter(s => s.age>=20).length
        },
        moreAgeStu(state){
            return function (age) {
                return state.students.filter(s=>s.age>age).length
            }
        }
    },
    //Vuex模块化管理
    modules: {
        a:moduleA
    }
})
