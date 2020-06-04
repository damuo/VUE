<template>
  <div>
    <h2>档案</h2>
    <p>这是档案信息！</p>
    <!--:to动态绑定传递-->
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <!--js方式传递-->
    <p>姓名:{{parm.name}}</p>
    <p>年龄:{{parm.age}}</p>
    <!--<p v-for="item in parm.adress" :key="item">地址:{{item}}</p>-->
    <p v-for="item in address" :key="item">地址:{{item}}</p>
  </div>
</template>

<script>
    export default {
      name: "Profile",
      data(){
        return{
          address:this.$route.query.adress
        }
      },/*
      created() {
        console.log('created');
        document.title='档案'
      },*/
      mounted() {
        console.log('mounted');
      },
      updated() {
        console.log('updated');
      },
      computed:{
        parm(){
          return this.$route.query
        }
      }
    }
</script>

<style scoped>

</style>
