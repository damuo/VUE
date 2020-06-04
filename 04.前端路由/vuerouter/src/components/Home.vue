<template>
    <div>
      <h2>首页</h2>
      <p>欢迎来到首页！</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view></router-view>

      <h2>{{message}}</h2>
    </div>
</template>a

<script>
    export default {
      name: "Home",
      data(){
        return{
          message:"hello!",
          path:'/home/news'
        }
      },
      created() {
        console.log('home created');
      },
      destroyed() {
          console.log('home destroyed');
      },
      //活跃中
      activated() {
        console.log('activated');
        this.$router.push(this.path)
      },
      /*deactivated() {
        console.log('deactivated');
        this.path=this.$route.path
      },*/
      //组件守卫
      beforeRouteLeave(to,from,next){
        console.log(this.$route.path);
        this.path=this.$route.path;
        next()
      }
    }
</script>
<style scoped>
</style>
