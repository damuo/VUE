<template>
  <div id="app">
    <h2>App内容</h2>
    <p>$state获取:{{$store.state.counter}}</p>
    <h2>Hello Vux内容</h2>
    <hello-vuex/>
    <h2>mutations同步修改值</h2>
    <button @click="subtraction">-</button>
    <button @click="addtion">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="subaddCount(5)">-5</button>
    <button @click="addStudent">添加学生</button>

    <h2>App:Getters(获取平方值)</h2>
    <p>平方值:{{$store.getters.powerCounter}}</p>
    <h2>App:Getters(获取学生大于20岁的人数)</h2>
    <p>大于20岁数量:{{$store.getters.getGreateAgeCount}}个</p>
    <h2>App:Getters(获取学生大于指定年龄的人数)</h2>
    <p>大于指定岁数数量:{{$store.getters.moreAgeStu(22)}}个</p>

    <h2>App:computed(获取学生大于20岁的人数)</h2>
    <p>大于20岁数量:{{getGreateAgeCount}}个</p>

    <h2>Action异步修改值</h2>
    <button @click="updateStudent">修改</button>
    {{$store.state.student}}

    <h2>Modules中的内容</h2>
    <p>$state获取:{{$store.state.num}}</p>
    <p>修改Modules的值:{{$store.state.a.name}}</p>
    <p>获取getter:{{$store.getters.fullName}}</p>
    <p>获取getter(外部State):{{$store.getters.fullName2}}</p>
    <p>获取getter(外部State):{{$store.getters.fullName3}}</p>
    <button @click="updateName">同步修改Modules和外部State中的值</button>
    <button @click="updateNames">异步修改Modules和外部State中的值</button>
  </div>
</template>
<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from "./store/mutations-type";
  export default {
    name:'App',
    components:{
      HelloVuex
    },
    data(){
      return{
        message:"我是App组件",
        counter:0
      }
    },
    methods:{
      //不带参数
      addtion(){
        this.$store.commit(INCREMENT)
      },
      subtraction(){
        this.$store.commit('decrement')
      },
      //带参数
      addCount(num){
        this.$store.commit('addCount',num)
      },
      subaddCount(num){
        this.$store.commit('subaddCount',num)
      },
      addStudent(){
        const stu={id:1009,name:'Alan',age:37}
        this.$store.commit('addStudent',stu)
      },
      updateStudent(){
        //不带参
        /*this.$store.dispatch('updateStudent')*/
        //带参
        this.$store.dispatch('updateStudent',{
          name:'张三',
          message:"修改成功"
        }).then(data=>{
          console.log(data.message)
        })
      },
      //Modules同步修改
      updateName(){
        this.$store.commit('updateName',{
          name:'"里斯"'
        })
      },
      //Modules异步修改
      updateNames(){
        this.$store.dispatch('updateNames',{
          name:'"里斯"'
        })
      }
    },
    computed:{
      getGreateAgeCount(state){
        return this.$store.state.students.filter(s => s.age>=20).length
      }
    }
  }
</script>
<style>
</style>
