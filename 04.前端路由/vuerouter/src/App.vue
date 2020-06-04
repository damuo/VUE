<template>
  <div id="app">
    <!--1.基本使用-->
   <!-- <router-link to="/home" >首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>-->

    <!--1.0.配置默认style方式一-->
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-view></router-view>-->

    <!--1.1.配置默认style方式二-->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-view></router-view>-->

    <!--2.通过代码更改路由地址实现跳转-->
    <!--<button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>-->

    <!--3.动态路由-->
    <!--3.1固定参数-->
    <!--<router-link to="/user/123" tag="button" replace>用户</router-link>-->
    <!--3.2动态参数-->
    <!--<router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-view></router-view>-->

    <!--4.定义渲染成为的组件：将组件渲染成按钮|消除history记录-->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <!--参数传递的两种方式：1.动态路由|2.:to动态绑定参数或者js代码-->
   <!-- <router-link :to="{path:'/profile',query:{name:'zhangsan',age:19}}" tag="button" replace>档案</router-link>
    <button @click="profileClick">档案</button>
    <router-view></router-view>-->

    <!--全局导航守卫-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Home,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  //通过代码改变路由
  data(){
    return{
      userId:"lisi"
    }
  },
  methods:{
    homeClick(){
      // this.$router.push("/home")
      this.$router.replace("/home")
      console.log("首页")
    },
    aboutClick(){
      // this.$router.push("/about")
      this.$router.replace("/about")
      console.log("关于")
    },
    userClick(){
      this.$router.push('/user/'+this.userId);
    },
    profileClick(){
      this.$router.push({
        path:"/profile",
        query:{
          name:'Tom',
          age:27,
          adress:[1,2,3]
        }
      })

    }
  }
}
</script>
<style>
  .active{
    color: red;
  }
</style>

