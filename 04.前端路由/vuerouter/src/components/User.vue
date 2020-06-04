<template>
    <div>
      <h2>用户界面</h2>
      <p>欢迎您:{{userId}}</p>
      <p>欢迎您:{{$route.params.parameter}}</p>
      <button @click="btnClick">按钮</button>
    </div>
</template>
aaa
<script>
    export default {
      name: "User",
      computed:{
          userId(){
            return this.$route.params.parameter
          }
      },
      /*created() {
        console.log('created');
        document.title='用户中心'
      },*/
      mounted() {
        console.log('mounted');
      },
      updated() {
        console.log('updated');
      },
      methods:{
        btnClick(){
          console.log(this.$route)
          console.log(this.$router)
        }
      }
    }
</script>
<style scoped>
</style>
